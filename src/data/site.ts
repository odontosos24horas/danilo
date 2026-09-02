/**
 * Dados da clínica — fonte única de verdade para contatos, endereço,
 * metadados e dados estruturados.
 *
 * Domínio confirmado com o cliente e verificado em produção
 * (apex redireciona para www com 308, hospedado na Vercel).
 */
export const SITE_URL = 'https://www.daniloantunesimplantes.com.br'

/** Telefones em E.164. Os rótulos vieram do texto visível do próprio site. */
export const TELEFONE_CLINICA_E164 = '+553135860900'
export const TELEFONE_CLINICA = '(31) 3586-0900'

export const TELEFONE_DANILO_E164 = '+553133188718'
export const TELEFONE_DANILO = '(31) 3318-8718'

export const TELEFONE_ROSANE_E164 = '+553125552779'
export const TELEFONE_ROSANE = '(31) 2555-2779'

/**
 * WhatsApp — CONFIRMADO.
 *
 * O site trazia 5531997376623: 8 digitos apos o DDD, formato anterior a
 * 2014, quando a Anatel acrescentou o nono digito aos celulares do DDD 31.
 * O link nao abria conversa.
 *
 * O numero (31) 99737-6623 esta publicado no perfil da propria clinica no
 * Doctoralia, e bate exatamente com a regra do nono digito.
 */
export const WHATSAPP_NUMERO = '5531997376623'
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${encodeURIComponent(
  'Olá, Dr. Danilo.'
)}`

export const ENDERECO = {
  logradouro: 'Rua Gonçalves Dias, 82',
  complemento: 'Sala 902',
  bairro: 'Funcionários',
  cidade: 'Belo Horizonte',
  estado: 'MG',
  cep: '30140-090',
  pais: 'BR'
} as const

/**
 * Instagram oficial.
 * O código antigo apontava para `dr.daniloantunes` (sem underline), mas o
 * link que o Danilo enviou é `dr.daniloantunes_` (com underline).
 */
export const INSTAGRAM_DANILO = 'https://www.instagram.com/dr.daniloantunes_'
export const INSTAGRAM_ROSANE = 'https://www.instagram.com/dra.rosane.lage'

/** Container do Google Tag Manager. */
export const GTM_ID = 'GTM-KCT26Q8'

/** Dados estruturados do consultório. */
export const jsonLdNegocio = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${SITE_URL}/#clinica`,
  name: 'Dr. Danilo Antunes',
  description:
    'Cirurgião-dentista especializado em implantes dentários e periodontia, no bairro Funcionários, em Belo Horizonte.',
  url: `${SITE_URL}/`,
  telephone: TELEFONE_DANILO_E164,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${ENDERECO.logradouro}, ${ENDERECO.complemento}`,
    addressLocality: ENDERECO.cidade,
    addressRegion: ENDERECO.estado,
    postalCode: ENDERECO.cep,
    addressCountry: ENDERECO.pais
  },
  areaServed: { '@type': 'City', name: ENDERECO.cidade },
  medicalSpecialty: ['Dentistry'],
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Implantes dentários' },
    { '@type': 'MedicalProcedure', name: 'Periodontia' }
  ],
  sameAs: [INSTAGRAM_DANILO]
}
