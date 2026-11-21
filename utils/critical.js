// Dopo la build mette nelle home il CSS critico e rimanda il resto.
// Prende il posto di rollup-plugin-critical, che usava critical 8 e scriveva
// per effetto collaterale anche _site/index.html (vedi src/index.njk).
// critical 9 con il motore statico non apre un browser.
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { critical } from 'critical';

const site = process.argv[2] || '_site';
const pagine = ['it/index.html', 'en/index.html'];

// Regole che dipendono dalle classi messe dallo script dei font (base.njk):
// nell'HTML statico non ci sono, quindi il motore le scarterebbe.
// Prima era penthouse.forceInclude.
const forzate = /\.fonts-loaded-[12] [^{}]*\{[^{}]*\}/g;

let errori = 0;
for (const pagina of pagine) {
  const file = path.join(site, pagina);
  const html = await readFile(file, 'utf8');
  try {
    const {
      html: uscita,
      css,
      report
    } = await critical({
      html,
      base: site,
      inline: true
    });

    // le regole forzate, prese dai fogli di stile della pagina
    const fogli = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)]
      .map((m) => m[0].match(/href="([^"]+)"/)?.[1])
      .filter(Boolean);
    let extra = '';
    for (const href of fogli) {
      const sorgente = await readFile(path.join(site, href), 'utf8');
      extra += (sorgente.match(forzate) || []).join('');
    }
    const finale = extra
      ? uscita.replace(/<\/style>/, `${extra}</style>`)
      : uscita;

    if (finale === html || !/<style[^>]*>/.test(finale)) {
      throw new Error('nessun CSS critico inserito');
    }
    await writeFile(file, finale);
    console.log(
      `critical: ${pagina} · motore ${report.engine} · ${css.length + extra.length} byte inline` +
        (report.warnings?.length
          ? ` · ${report.warnings.length} avvisi: ${report.warnings[0].slice(0, 90)}…`
          : '')
    );
  } catch (e) {
    errori++;
    console.error(`critical: ${pagina} non elaborata: ${e.message}`);
  }
}

// la pagina resta valida anche senza CSS critico: la build non si ferma,
// ma l'errore deve vedersi in CI
if (errori) process.exitCode = 1;
