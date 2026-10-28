// Fuente única de textos y datos del producto.
// La página (ES/EN), el JSON-LD y llms.txt / llms-full.txt se generan desde aquí.

export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];

export const product = {
  name: 'Hikui Koe',
  nameJa: '低い声',
  operatingSystem: 'Windows 10 (2004+), Windows 11',
  ogImage: { es: '/og-es.png', en: '/og-en.png' } as Record<Lang, string>,
};

export type Feature = { icon: 'shield' | 'lock' | 'eye' | 'spark' | 'globe' | 'keys'; title: string; body: string };
export type Step = { title: string; body: string };
export type Faq = { q: string; a: string };

type Dict = {
  htmlLang: string;
  ogLocale: string;
  skip: string;
  meta: { title: string; description: string };
  nav: { label: string; langLabel: string; download: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    shotAlt: string;
  };
  cta: string;
  secondary: string;
  how: { kicker: string; title: string; steps: Step[]; shotAlt: string };
  features: { kicker: string; title: string; items: Feature[] };
  faq: { kicker: string; title: string; nameNote: string; items: Faq[] };
  footer: { github: string; otherLang: string };
  shortcuts: { keys: string; action: string }[];
  appCategory: string;
  requirements: string;
};

export const dict: Record<Lang, Dict> = {
  es: {
    htmlLang: 'es',
    ogLocale: 'es_ES',
    skip: 'Saltar al contenido',
    meta: {
      title: 'Hikui Koe — respuestas sugeridas en tus reuniones, para Windows',
      description: `Overlay para Windows que escucha tu reunión (Meet, Zoom, Teams), transcribe las preguntas y te sugiere qué responder a partir de tus documentos. Gratis para Windows 10 y 11.`,
    },
    nav: { label: 'Principal', langLabel: 'Idioma', download: 'Descargar' },
    hero: {
      eyebrow: 'Para Windows · Gratis · Código en GitHub',
      title: 'La respuesta justa, en voz baja, mientras presentas.',
      subtitle:
        'Hikui Koe escucha tu reunión en Meet, Zoom o Teams, transcribe las preguntas de los demás y te sugiere qué responder a partir de tus propios documentos. Una idea central y 3–5 viñetas, para leer de un vistazo.',
      note: 'Windows 10 (2004+) / 11 · Requiere Ollama',
      shotAlt:
        'Vista «En vivo» de Hikui Koe: arriba, la pregunta transcrita de un participante sobre por qué usar una cola para los pagos; abajo, la respuesta sugerida con una idea central en negrita y cuatro viñetas, con marcadores [X] y [N] donde faltan datos.',
    },
    cta: 'Descargar para Windows',
    secondary: 'Ver en GitHub',
    how: {
      kicker: 'Cómo funciona',
      title: 'Tres pasos, sin cambiar tu forma de presentar.',
      steps: [
        {
          title: 'Carga tus documentos',
          body: 'Presentación, documentación del proyecto, notas o datos (PDF con texto, DOCX, HTML, TXT, MD). Se indexan en tu PC.',
        },
        {
          title: 'Escucha la reunión',
          body: 'Captura el audio del sistema en Meet, Zoom o Teams y transcribe lo que dicen los demás. Tu micrófono no se captura.',
        },
        {
          title: 'Lee la respuesta sugerida',
          body: 'Detecta la pregunta y te propone una idea central en negrita y 3–5 viñetas, en primera persona («nosotros» al hablar del proyecto).',
        },
      ],
      shotAlt:
        'Vista «Contexto» de Hikui Koe: modo «Presentación / reunión», tema de la reunión y tres documentos indexados (un PDF de presentación, un .md de arquitectura y un .txt de preguntas frecuentes) con su número de fragmentos.',
    },
    features: {
      kicker: 'Características',
      title: 'Hecho para hablar con seguridad, no para improvisar datos.',
      items: [
        {
          icon: 'shield',
          title: 'No inventa datos',
          body: 'Si algo no está en tus documentos, deja un marcador como [X %] o sugiere «lo confirmo y te lo envío».',
        },
        {
          icon: 'lock',
          title: 'Local o nube rápida',
          body: 'Whisper en tu GPU y Ollama para total privacidad, o APIs con capa gratuita y muy rápidas (Groq, Cerebras) o cualquier API compatible con OpenAI: primera palabra en menos de ~2 s.',
        },
        {
          icon: 'eye',
          title: 'Invisible al compartir',
          body: 'La ventana no aparece al compartir pantalla (Windows 10 2004+), ni en la barra de tareas ni en Alt+Tab. Opacidad ajustable.',
        },
        {
          icon: 'spark',
          title: 'Detecta las preguntas',
          body: 'Responde solo cuando alguien pregunta. También puedes forzar la respuesta con Ctrl+Shift+Space o escribir la pregunta a mano.',
        },
        {
          icon: 'globe',
          title: 'Español e inglés',
          body: 'Transcribe y responde en español o en inglés, o detecta el idioma automáticamente.',
        },
        {
          icon: 'keys',
          title: 'Atajos de teclado',
          body: 'Todo se controla sin tocar el ratón:',
        },
      ],
    },
    faq: {
      kicker: 'Preguntas frecuentes',
      title: 'Lo que suelen preguntar.',
      nameNote: '低い声 (hikui koe) significa «voz baja» en japonés: alguien que te sopla la respuesta en voz baja.',
      items: [
        {
          q: '¿Es gratis?',
          a: 'Sí, Hikui Koe es gratis y su código está en GitHub. Para responder puedes usar Ollama en local o APIs con capa gratuita como Groq o Cerebras.',
        },
        {
          q: '¿Qué necesito para usarlo?',
          a: 'Windows 10 (2004 o posterior) u 11 y Ollama instalado con el modelo nomic-embed-text (ollama pull nomic-embed-text). Si quieres generar las respuestas en local, también qwen2.5:7b.',
        },
        {
          q: '¿Se ve al compartir pantalla?',
          a: 'No. La ventana se excluye de la pantalla compartida (Windows 10 2004+) y no aparece en la barra de tareas ni en Alt+Tab.',
        },
        {
          q: '¿Mis documentos salen de mi PC?',
          a: 'No. Se indexan localmente con embeddings nomic-embed-text en Ollama. Si usas una API en la nube, solo se envían la transcripción y los fragmentos relevantes. Con Whisper local y Ollama, todo queda en tu PC. Las API keys se guardan cifradas con DPAPI.',
        },
        { q: '¿Qué idiomas entiende?', a: 'Español e inglés, o detección automática del idioma.' },
        { q: '¿Funciona en Mac?', a: 'No. Por ahora solo funciona en Windows.' },
      ],
    },
    footer: { github: 'GitHub', otherLang: 'English' },
    shortcuts: [
      { keys: 'Ctrl+Shift+H', action: 'mostrar/ocultar' },
      { keys: 'Ctrl+Shift+L', action: 'escuchar' },
      { keys: 'Ctrl+Shift+Space', action: 'responder' },
      { keys: 'Ctrl+Shift+K', action: 'limpiar' },
    ],
    appCategory: 'BusinessApplication',
    requirements: 'Windows 10 (2004+) u 11; Ollama con nomic-embed-text (y qwen2.5:7b para responder en local)',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    skip: 'Skip to content',
    meta: {
      title: 'Hikui Koe — suggested answers during your meetings, for Windows',
      description: `Windows overlay that listens to your meeting (Meet, Zoom, Teams), transcribes the questions and suggests what to answer from your own documents. Free for Windows 10 and 11.`,
    },
    nav: { label: 'Main', langLabel: 'Language', download: 'Download' },
    hero: {
      eyebrow: 'For Windows · Free · Code on GitHub',
      title: 'The right answer, in a low voice, while you present.',
      subtitle:
        'Hikui Koe listens to your Meet, Zoom or Teams call, transcribes what the other participants ask and suggests what to answer based on your own documents. One key idea plus 3–5 bullets, readable at a glance.',
      note: 'Windows 10 (2004+) / 11 · Requires Ollama',
      shotAlt:
        'Hikui Koe "Live" view: at the top, a participant’s transcribed question about why payments go through a queue; below, the suggested answer with a bold key idea and four bullets, with [X] and [N] placeholders where data is missing.',
    },
    cta: 'Download for Windows',
    secondary: 'View on GitHub',
    how: {
      kicker: 'How it works',
      title: 'Three steps, without changing how you present.',
      steps: [
        {
          title: 'Load your documents',
          body: 'Your deck, project docs, notes or data (text PDF, DOCX, HTML, TXT, MD). They are indexed on your PC.',
        },
        {
          title: 'Listen to the meeting',
          body: 'It captures system audio from Meet, Zoom or Teams and transcribes what the others say. Your microphone is not captured.',
        },
        {
          title: 'Read the suggested answer',
          body: 'It detects the question and gives you a bold key idea plus 3–5 bullets, in first person ("we" when talking about the project).',
        },
      ],
      shotAlt:
        'Hikui Koe "Context" view: "Presentation / meeting" mode, the meeting topic and three indexed documents (a presentation PDF, an architecture .md and an FAQ .txt) with their chunk counts.',
    },
    features: {
      kicker: 'Features',
      title: 'Built to speak with confidence, not to make up numbers.',
      items: [
        {
          icon: 'shield',
          title: 'Never makes up data',
          body: 'If something is not in your documents, it leaves a placeholder like [X %] or suggests "I’ll confirm and send it to you".',
        },
        {
          icon: 'lock',
          title: 'Local or fast cloud',
          body: 'Whisper on your GPU and Ollama for full privacy, or very fast APIs with a free tier (Groq, Cerebras) or any OpenAI-compatible API: first word in under ~2 s.',
        },
        {
          icon: 'eye',
          title: 'Invisible when sharing',
          body: 'The window does not show up when you share your screen (Windows 10 2004+), in the taskbar or in Alt+Tab. Adjustable opacity.',
        },
        {
          icon: 'spark',
          title: 'Detects questions',
          body: 'It answers on its own when someone asks something. You can also force an answer with Ctrl+Shift+Space or type a question.',
        },
        {
          icon: 'globe',
          title: 'Spanish and English',
          body: 'Transcribes and answers in Spanish or English, or detects the language automatically.',
        },
        {
          icon: 'keys',
          title: 'Keyboard shortcuts',
          body: 'Everything works without touching the mouse:',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Common questions.',
      nameNote: '低い声 (hikui koe) means "low voice" in Japanese: someone whispering the answer to you.',
      items: [
        {
          q: 'Is it free?',
          a: 'Yes, Hikui Koe is free and its code is on GitHub. For answers you can use Ollama locally or APIs with a free tier such as Groq or Cerebras.',
        },
        {
          q: 'What do I need?',
          a: 'Windows 10 (2004 or later) or 11, and Ollama installed with the nomic-embed-text model (ollama pull nomic-embed-text). To generate answers locally, also qwen2.5:7b.',
        },
        {
          q: 'Is it visible when I share my screen?',
          a: 'No. The window is excluded from screen sharing (Windows 10 2004+) and does not appear in the taskbar or Alt+Tab.',
        },
        {
          q: 'Do my documents leave my PC?',
          a: 'No. They are indexed locally with nomic-embed-text embeddings in Ollama. If you use a cloud API, only the transcript and the relevant chunks are sent. With local Whisper and Ollama, everything stays on your PC. API keys are stored encrypted with DPAPI.',
        },
        { q: 'Which languages does it understand?', a: 'Spanish and English, or automatic language detection.' },
        { q: 'Does it work on Mac?', a: 'No. For now it only runs on Windows.' },
      ],
    },
    footer: { github: 'GitHub', otherLang: 'Español' },
    shortcuts: [
      { keys: 'Ctrl+Shift+H', action: 'show/hide' },
      { keys: 'Ctrl+Shift+L', action: 'listen' },
      { keys: 'Ctrl+Shift+Space', action: 'answer' },
      { keys: 'Ctrl+Shift+K', action: 'clear' },
    ],
    appCategory: 'BusinessApplication',
    requirements: 'Windows 10 (2004+) or 11; Ollama with nomic-embed-text (and qwen2.5:7b for local answers)',
  },
};

/** Ruta relativa de la home de cada idioma (es sin prefijo, en en /en/). */
export const homePath: Record<Lang, string> = { es: '/', en: '/en/' };

/** Ruta con el `base` de astro.config (p. ej. /repo/ en GitHub Pages de proyecto). */
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

/** URL absoluta a partir de `site` + `base` (astro.config). */
export const abs = (site: URL | undefined, path: string) => new URL(withBase(path), site).href;

/** Hechos completos (en inglés) para llms-full.txt. */
export const factsEn: { heading: string; items: string[] }[] = [
  {
    heading: 'What it is',
    items: [
      'Hikui Koe is a desktop overlay for Windows. It listens to the meeting audio (Google Meet, Zoom, Microsoft Teams…), transcribes what the other participants say and suggests what to answer based on YOUR documents (presentation, project documentation, notes, data).',
      'Use cases: presenting projects, demos, client or team meetings and Q&A rounds.',
      'The name comes from Japanese 低い声 (hikui koe), "low voice": someone whispering the answer to you.',
    ],
  },
  {
    heading: 'Answers',
    items: [
      'Short answers: a bold key idea plus 3–5 bullets to read at a glance, in first person ("we" when talking about the project).',
      'It does not make up data: if something is not in your documents it leaves a placeholder such as [X %] or suggests "I’ll confirm and send it to you".',
      'Detects questions automatically and answers on its own; Ctrl+Shift+Space forces an answer. Questions can also be typed manually.',
    ],
  },
  {
    heading: 'Audio and transcription',
    items: [
      'Captures system audio (Windows loopback); your microphone is not captured.',
      'Transcription: cloud Whisper via Groq (fast) or local Whisper on the GPU (private, no internet once downloaded).',
      'Languages: Spanish and English, or automatic detection.',
    ],
  },
  {
    heading: 'Answer models',
    items: [
      'Local Ollama (private), or very fast APIs with a free tier (Groq, Cerebras), or any OpenAI-compatible API.',
      'Latency target: first word in under ~2 s with cloud APIs.',
    ],
  },
  {
    heading: 'Privacy',
    items: [
      'Documents are indexed locally (RAG with nomic-embed-text embeddings in Ollama). Only the transcript and the relevant chunks are sent to the cloud, and only when a cloud provider is used.',
      'API keys are encrypted with Windows DPAPI.',
      'The window is excluded from screen sharing (Windows 10 2004+), does not appear in the taskbar or Alt+Tab, and has adjustable opacity.',
    ],
  },
  {
    heading: 'Shortcuts',
    items: ['Ctrl+Shift+H: show/hide', 'Ctrl+Shift+L: listen', 'Ctrl+Shift+Space: answer now', 'Ctrl+Shift+K: clear'],
  },
  {
    heading: 'Supported documents',
    items: ['PDF with text, DOCX, HTML, TXT, MD.'],
  },
  {
    heading: 'Requirements',
    items: [
      'Windows 10 (2004+) or Windows 11. Not available for macOS.',
      'Ollama installed: `ollama pull nomic-embed-text`, plus `qwen2.5:7b` to answer locally.',
    ],
  },
  {
    heading: 'Price and source',
    items: ['Free. Source code on GitHub.'],
  },
];

export const summaryEs = `Hikui Koe es un overlay de escritorio para Windows que escucha el audio de la reunión (Meet, Zoom, Teams…), transcribe lo que dicen los demás participantes y sugiere qué responder a partir de tus documentos, pensado para presentaciones de proyectos, demos, reuniones con clientes o equipo y rondas de preguntas. Respuestas breves (idea central + 3–5 viñetas), sin inventar datos; transcripción con Whisper (Groq o local en GPU) y respuestas con Ollama local, Groq, Cerebras o cualquier API compatible con OpenAI. Documentos indexados en local; ventana invisible al compartir pantalla. Gratis y con el código en GitHub.`;
