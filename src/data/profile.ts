// Dados que não dependem de idioma. Para trocar e-mail, links ou foto, edite só aqui.
import type { ImageMetadata } from 'astro';

import photo from '../assets/photo.jpg';

export const profile = {
  name: 'Christian Michelson',
  /** Exibidos no rodapé. */
  legalName: 'Christian Mathias Michelson',
  cnpj: '67.952.153/0001-00',
  email: 'christian.m.michelson@gmail.com',
  githubUser: 'Chris-Mathias',
  /** URL completa do perfil; `null` esconde a linha. */
  linkedin: 'https://www.linkedin.com/in/christian-michelson/' as string | null,
  /** Imagem importada de `src/assets/` (o Astro gera as versões otimizadas); `null` mostra as iniciais. */
  photo: photo as ImageMetadata | null,
  // Exibidas em ordem alfabética, como a saída de `ls`.
  tools: ['Docker', 'Linux', 'Node.js', 'PostgreSQL', 'Python', 'React', 'TypeScript'],
};
