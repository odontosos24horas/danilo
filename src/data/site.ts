/**
 * Dados da clínica — fonte única de verdade para contatos, endereço,
 * metadados e dados estruturados.
 *
 * ⚠️ PENDENTE PEDRO: confirmar SITE_URL. O repositório não registra o domínio
 * em lugar nenhum e os domínios testados não resolveram. O canonical e o
 * JSON-LD dependem disso estar correto.
 */
export const SITE_URL = 'https://www.drdaniloantunes.com.br'

/** Telefones em E.164. Os rótulos vieram do texto visível do próprio site. */
export const TELEFONE_CLINICA_E164 = '+553135860900'
export const TELEFONE_CLINICA = '(31) 3586-0900'

export const TELEFONE_DANILO_E164 = '+553133188718'
export const TELEFONE_DANILO = '(31) 3318-8718'

export const TELEFONE_ROSANE_E164 = '+553125552779'
export const TELEFONE_ROSANE = '(31) 2555-2779'

/**
 * ⚠️ PENDENTE PEDRO: este número tem 8 dígitos depois do DDD
 * (55 + 31 + 97376623), formato anterior a 2016. Celulares brasileiros têm
 * 9 dígitos desde então, então o link provavelmente não abre conversa
 * nenhuma. Não corrigi por conta própria: chutar um dígito em número de
 * WhatsApp é perder paciente em silêncio.
 */
export const WHATSAPP_NUMERO = '553197376623'
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${encodeURIComponent(
  'Olá, Dr. Danilo.'
)}`

export const ENDERECO = {
  logradouro: 'Rua Gonçalves Dias, 82',
  complemento: 'Sala 902',
  bairro: 'Funcionários',
  cidade: 'Belo Horizonte',
  estado: 'MG',
  cep: '30140-190',
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
