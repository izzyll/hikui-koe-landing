import type { APIRoute } from 'astro';
import { dict, product, homePath, abs, factsEn, summaryEs } from '../i18n/content';
import { DOWNLOAD_URL, REPO_URL, RELEASES_URL } from '../config';

// Versión completa: todos los hechos del producto, generados desde src/i18n/content.ts.
export const GET: APIRoute = ({ site }) => {
  const en = dict.en;
  const facts = factsEn.map((s) => `## ${s.heading}\n\n${s.items.map((i) => `- ${i}`).join('\n')}`).join('\n\n');
  const steps = en.how.steps.map((s, i) => `${i + 1}. **${s.title}** — ${s.body}`).join('\n');
  const faq = en.faq.items.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n');
  const faqEs = dict.es.faq.items.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n');
  const body = `# ${product.name}

> ${en.meta.description}

Resumen en español: ${summaryEs}

- Website (ES): ${abs(site, homePath.es)}
- Website (EN): ${abs(site, homePath.en)}
- Download (latest Windows installer): ${DOWNLOAD_URL}
- Releases: ${RELEASES_URL}
- Source code: ${REPO_URL}

## How it works

${steps}

${facts}

## FAQ

${faq}

## Preguntas frecuentes (español)

${faqEs}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
