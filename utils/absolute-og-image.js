// Dopo la build di Vite rende assoluto l'URL di og:image.
// eleventy-plugin-og-image e Vite scrivono un percorso relativo (/imgs/…),
// ma LinkedIn, Facebook e simili accettano solo URL assoluti.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const site = process.argv[2] || '_site';
const meta = JSON.parse(await readFile('src/_data/meta.json', 'utf8'));
const ogImage = /(<meta\s+property="og:image"\s+content=")(\/[^"]*)"/g;

let pages = 0;
for (const file of await readdir(site, { recursive: true })) {
  if (!file.endsWith('.html')) continue;
  const filePath = path.join(site, file);
  const html = await readFile(filePath, 'utf8');
  const fixed = html.replace(
    ogImage,
    (_, before, url) => `${before}${new URL(url, meta.url).href}"`
  );
  if (fixed !== html) {
    await writeFile(filePath, fixed);
    pages++;
  }
}

if (pages === 0) {
  console.warn(
    'absolute-og-image: nessun og:image relativo trovato, controlla il markup'
  );
} else {
  console.log(`absolute-og-image: og:image resi assoluti in ${pages} pagine`);
}
