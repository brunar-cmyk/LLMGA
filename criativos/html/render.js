// Renderiza cada mockup HTML como PNG na pasta criativos/imagens/
// Uso: node render.js  (a partir de /home/user/LLMGA/criativos/html)

const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const outDir = path.resolve(__dirname, '..', 'imagens');
fs.mkdirSync(outDir, { recursive: true });

// Cada entrada: {file, selector, name, viewport}
// Vamos capturar cada .frame individualmente, com nome semântico.
const jobs = [
  {
    file: 'linkedin-imagens.html',
    viewport: { width: 1400, height: 800 },
    frames: [
      { idx: 0, name: 'linkedin-beatriz-A', w: 1200, h: 627 },
      { idx: 1, name: 'linkedin-beatriz-B', w: 1200, h: 627 },
      { idx: 2, name: 'linkedin-rafael-A',  w: 1200, h: 627 },
      { idx: 3, name: 'linkedin-rafael-B',  w: 1200, h: 627 },
      { idx: 4, name: 'linkedin-carlos-A',  w: 1200, h: 627 },
      { idx: 5, name: 'linkedin-carlos-B',  w: 1200, h: 627 },
    ],
  },
  {
    file: 'instagram-feed.html',
    viewport: { width: 1200, height: 1500 },
    frames: [
      { idx: 0, name: 'instagram-carlos-A', w: 1080, h: 1350 },
      { idx: 1, name: 'instagram-carlos-B', w: 1080, h: 1350 },
      { idx: 2, name: 'instagram-rafael-A', w: 1080, h: 1350 },
      { idx: 3, name: 'instagram-rafael-B', w: 1080, h: 1350 },
      { idx: 4, name: 'instagram-beatriz',  w: 1080, h: 1350 },
    ],
  },
  {
    file: 'carrossel-rafael.html',
    viewport: { width: 1200, height: 1200 },
    frames: [
      { idx: 0, name: 'carrossel-rafael-slide-1-capa', w: 1080, h: 1080 },
      { idx: 1, name: 'carrossel-rafael-slide-2-cra',  w: 1080, h: 1080 },
      { idx: 2, name: 'carrossel-rafael-slide-3-cpr',  w: 1080, h: 1080 },
      { idx: 3, name: 'carrossel-rafael-slide-4-fiagro', w: 1080, h: 1080 },
      { idx: 4, name: 'carrossel-rafael-slide-5-holding', w: 1080, h: 1080 },
      { idx: 5, name: 'carrossel-rafael-slide-6-cta', w: 1080, h: 1080 },
    ],
  },
  {
    file: 'carrossel-carlos.html',
    viewport: { width: 1200, height: 1500 },
    frames: [
      { idx: 0, name: 'carrossel-carlos-slide-1-capa', w: 1080, h: 1350 },
      { idx: 1, name: 'carrossel-carlos-slide-2-holding', w: 1080, h: 1350 },
      { idx: 2, name: 'carrossel-carlos-slide-3-tributaria', w: 1080, h: 1350 },
      { idx: 3, name: 'carrossel-carlos-slide-4-car', w: 1080, h: 1350 },
      { idx: 4, name: 'carrossel-carlos-slide-5-sucessao', w: 1080, h: 1350 },
      { idx: 5, name: 'carrossel-carlos-slide-6-cta', w: 1080, h: 1350 },
    ],
  },
  {
    file: 'carrossel-beatriz.html',
    viewport: { width: 1200, height: 1200 },
    frames: [
      { idx: 0, name: 'carrossel-beatriz-slide-1-capa', w: 1080, h: 1080 },
      { idx: 1, name: 'carrossel-beatriz-slide-2-esg', w: 1080, h: 1080 },
      { idx: 2, name: 'carrossel-beatriz-slide-3-financiamento', w: 1080, h: 1080 },
      { idx: 3, name: 'carrossel-beatriz-slide-4-compliance', w: 1080, h: 1080 },
      { idx: 4, name: 'carrossel-beatriz-slide-5-clima', w: 1080, h: 1080 },
      { idx: 5, name: 'carrossel-beatriz-slide-6-comex', w: 1080, h: 1080 },
      { idx: 6, name: 'carrossel-beatriz-slide-7-cta', w: 1080, h: 1080 },
    ],
  },
  {
    file: 'stories-bastidores.html',
    viewport: { width: 1200, height: 2050 },
    frames: [
      { idx: 0, name: 'story-1-esplanada', w: 1080, h: 1920 },
      { idx: 1, name: 'story-2-mapa', w: 1080, h: 1920 },
      { idx: 2, name: 'story-3-congresso', w: 1080, h: 1920 },
      { idx: 3, name: 'story-4-idp', w: 1080, h: 1920 },
      { idx: 4, name: 'story-5-cta', w: 1080, h: 1920 },
    ],
  },
  {
    file: 'reels-storyboard.html',
    viewport: { width: 700, height: 1100 },
    frames: [
      { idx: 0, name: 'reel-carlos-quadro-1', w: 540, h: 960 },
      { idx: 1, name: 'reel-carlos-quadro-2', w: 540, h: 960 },
      { idx: 2, name: 'reel-carlos-quadro-3', w: 540, h: 960 },
      { idx: 3, name: 'reel-carlos-quadro-4', w: 540, h: 960 },
      { idx: 4, name: 'reel-carlos-quadro-5', w: 540, h: 960 },
      { idx: 5, name: 'reel-rafael-quadro-1', w: 540, h: 960 },
      { idx: 6, name: 'reel-rafael-quadro-2', w: 540, h: 960 },
      { idx: 7, name: 'reel-rafael-quadro-3', w: 540, h: 960 },
      { idx: 8, name: 'reel-rafael-quadro-4', w: 540, h: 960 },
      { idx: 9, name: 'reel-rafael-quadro-5', w: 540, h: 960 },
    ],
  },
];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await ctx.newPage();

  for (const job of jobs) {
    const url = 'file://' + path.resolve(__dirname, job.file);
    await page.setViewportSize(job.viewport);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500); // dar tempo das fontes carregarem

    const frames = await page.$$('.frame');
    console.log(`${job.file}: encontrados ${frames.length} frames`);

    for (const f of job.frames) {
      const el = frames[f.idx];
      if (!el) {
        console.warn(`  [pular] ${f.name} (idx ${f.idx} não existe)`);
        continue;
      }
      const out = path.join(outDir, `${f.name}.png`);
      await el.screenshot({ path: out, omitBackground: false });
      console.log(`  ✓ ${f.name}.png (${f.w}x${f.h})`);
    }
  }

  // Google Ads e e-mail: a página inteira já é o entregável visual
  for (const extra of [
    { file: 'google-ads-preview.html', name: 'google-ads-search-previews', viewport: { width: 820, height: 1600 } },
    { file: 'email-mockup.html', name: 'email-mockups-d0-3-personas', viewport: { width: 720, height: 2400 } },
  ]) {
    const url = 'file://' + path.resolve(__dirname, extra.file);
    await page.setViewportSize(extra.viewport);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    const out = path.join(outDir, `${extra.name}.png`);
    await page.screenshot({ path: out, fullPage: true });
    console.log(`✓ ${extra.name}.png`);
  }

  await browser.close();
  console.log('\nTodos os PNGs salvos em', outDir);
})();
