#!/usr/bin/env node
/* =========================================================
   Fetches Steam Workshop counters and writes assets/steam-stats.json.
   Run by .github/workflows/steam-stats.yml, or locally with:
     node scripts/fetch-steam-stats.mjs

   Uses the keyless GetPublishedFileDetails endpoint, which returns
   subscriptions / views / favorites but no vote data. Ratings stay
   hardcoded in the HTML (they need an API key and barely move).
   ========================================================= */

import { writeFile, readFile } from 'node:fs/promises';

const ENDPOINT = 'https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/';
const OUT = new URL('../assets/steam-stats.json', import.meta.url);

/* Every map ever published, including the delisted first Kokiri Forest.
   it still counts toward the cumulative total shown on the site. */
const ITEMS = [
  { id: '3759263940', key: 'clocktown' },
  { id: '3750985352', key: 'kakariko'  },
  { id: '3764609424', key: 'kokiri'    },
  { id: '3748754779', key: 'kokiriOld' }
];

async function fetchDetails(ids) {
  const body = new URLSearchParams({ itemcount: String(ids.length) });
  ids.forEach((id, i) => body.append(`publishedfileids[${i}]`, id));

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });
  if (!res.ok) throw new Error(`Steam API returned HTTP ${res.status}`);

  const json = await res.json();
  const details = json?.response?.publishedfiledetails;
  if (!Array.isArray(details)) throw new Error('Unexpected Steam API payload');
  return details;
}

/* Keep the previous value for an item Steam did not return, so a single
   bad response can never silently drop a map from the totals. */
async function previous() {
  try {
    return JSON.parse(await readFile(OUT, 'utf8'));
  } catch {
    return null;
  }
}

const details = await fetchDetails(ITEMS.map(i => i.id));
const byId = Object.fromEntries(details.map(d => [d.publishedfileid, d]));
const prev = await previous();

const items = {};
for (const { id, key } of ITEMS) {
  const d = byId[id];
  const ok = d && d.result === 1;
  if (!ok && !prev?.items?.[key]) {
    throw new Error(`No data for ${key} (${id}) and no previous value to fall back on`);
  }
  items[key] = ok
    ? {
        id,
        title:         d.title,
        subscriptions: d.subscriptions ?? 0,
        lifetime:      d.lifetime_subscriptions ?? 0,
        views:         d.views ?? 0,
        favorited:     d.favorited ?? 0,
        stale:         false
      }
    : { ...prev.items[key], stale: true };
}

const sum = field => Object.values(items).reduce((n, i) => n + (i[field] || 0), 0);

const out = {
  updated: new Date().toISOString(),
  totals: {
    subscriptions: sum('subscriptions'),
    lifetime:      sum('lifetime'),
    views:         sum('views'),
    favorited:     sum('favorited'),
    maps:          ITEMS.length
  },
  items
};

await writeFile(OUT, JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote ${new URL(OUT).pathname}`);
console.log(`  cumulative subscriptions: ${out.totals.subscriptions.toLocaleString('en-US')}`);
for (const [k, v] of Object.entries(items)) {
  console.log(`  ${k.padEnd(10)} ${String(v.subscriptions).padStart(8)}${v.stale ? '  (stale)' : ''}`);
}
