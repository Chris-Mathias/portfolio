export const locales = { pt: 'pt-BR', en: 'en' } as const;
export type Lang = keyof typeof locales;

export const paths: Record<Lang, string> = { pt: '/', en: '/en/' };

const pt = {
  title: 'Christian Michelson · desenvolvimento full-stack',
  description: 'Desenvolvimento full-stack. Sites, landing pages e sistemas sob medida.',
  role: '# full-stack',
  about: 'Desenvolvimento full-stack. Sites, landing pages e sistemas sob medida.',
  aboutFile: 'sobre.txt',
  toolsDir: 'ferramentas/',
  contactFile: 'contato.txt',
  photoAlt: 'Foto de Christian Michelson',
  langLabel: 'Idioma',
  copy: 'copiar',
  copied: 'copiado',
  notFoundTitle: 'Página não encontrada · Christian Michelson',
  notFound: 'arquivo ou diretório inexistente',
};

const en: typeof pt = {
  title: 'Christian Michelson · full-stack development',
  description: 'Full-stack development. Websites, landing pages and custom systems.',
  role: '# full-stack',
  about: 'Full-stack development. Websites, landing pages and custom systems.',
  aboutFile: 'about.txt',
  toolsDir: 'tools/',
  contactFile: 'contact.txt',
  photoAlt: 'Photo of Christian Michelson',
  langLabel: 'Language',
  copy: 'copy',
  copied: 'copied',
  notFoundTitle: 'Page not found · Christian Michelson',
  notFound: 'no such file or directory',
};

export const ui: Record<Lang, typeof pt> = { pt, en };
