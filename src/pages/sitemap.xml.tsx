import { GetServerSideProps } from 'next'
import { SITE_URL } from '../data/site'
import { treatmentPages } from '../data/treatmentPages'

/**
 * Sitemap gerado a partir de SITE_URL, não hardcoded.
 *
 * O domínio ainda precisa ser confirmado (ver src/data/site.ts). Gerando
 * daqui, basta corrigir a constante num lugar só e o sitemap acompanha —
 * um XML estático com o domínio errado seria pior que não ter sitemap.
 */
const ROTAS = [
  '/',
  '/tratamentos',
  '/convenios',
  '/fotos',
  '/videos',
  '/contato',
  '/especialidades/danilo',
  '/especialidades/rosane',
  '/politica-de-privacidade',
  ...treatmentPages.map(page => `/tratamentos/${page.slug}`)
]

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls = ROTAS.map(rota => `  <url><loc>${SITE_URL}${rota}</loc></url>`).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 'public, max-age=3600')
  res.write(xml)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
