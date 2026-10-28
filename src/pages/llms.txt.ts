import type { APIRoute } from 'astro';
import { dict, product, homePath, abs, summaryEs } from '../i18n/content';
import { DOWNLOAD_URL, REPO_URL, RELEASES_URL } from '../config';

// llms.txt (https://llmstxt.org): H1, resumen en blockquote, secciones con enlaces.
export const GET: APIRoute = ({ site }) => {
  const en = dict.en;
  const body = `# ${product.name}

> ${en.meta.description}

${product.name} (${product.nameJa}, "low voice" in Japanese) is a Windows desktop overlay for project presentations, demos, client or team meetings and Q&A rounds. It transcribes what the other participants ask and suggests a short answer (a bold key idea plus 3–5 bullets) grounded in your own documents, without making up data.

Resumen en español: ${summaryEs}

## Pages

- [Landing page (Spanish)](${abs(site, homePath.es)}): product overview, how it works, features and FAQ.
- [Landing page (English)](${abs(site, homePath.en)}): same content in English.
- [Full product facts](${abs(site, '/llms-full.txt')}): every product fact in plain Markdown.

## Download

- [Windows installer (latest)](${DOWNLOAD_URL}): Windows 10 (2004+) / 11.
- [Releases](${RELEASES_URL}): release notes and previous versions.

## Optional

- [Source code on GitHub](${REPO_URL})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
