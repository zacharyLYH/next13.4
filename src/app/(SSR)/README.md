(SSR) is just a way to logically group routes. It doesn't have any effect on the routes itself.

Static: Fetches at build time and caches resources until another build takes place

Dynamic: Add the line `export const revalidate = 0;` and each time the page is refreshed, the server makes a fetch for the ENTIRE page. If you add the block `next: { revalidate: 0 }` instead, then only that fetch API doesn't cache; more granular control of which APIs to cache.

Incremental server regeration: Refresh the build cache every `N` seconds. Use `next: { revalidate: N }`.
