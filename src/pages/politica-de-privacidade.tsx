import React from 'react'

import { Container, Heading, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'

import NextLayout from '../components/templates/nextLayout'

import { SEO } from '../data/seo'
import { ENDERECO } from '../data/site'

/**
 * PENDENTE CLIENTE: revisar antes de publicar.
 *
 * Cobre apenas o que é verificável no site: Google Tag Manager, widget do
 * Doctoralia, vídeos do YouTube, mapa e os contatos por telefone, WhatsApp,
 * e-mail e Instagram. NÃO trata de prontuário nem de dados clínicos: isso
 * depende das práticas do consultório e deve ser redigido com apoio jurídico.
 */
const EMAIL = 'drdaniloantunes@gmail.com'

const secoes: Array<{ titulo: string; paragrafos?: string[]; itens?: string[] }> = [
  {
    titulo: '1. Quem somos',
    paragrafos: [
      `Este site é mantido por Dr. Danilo Antunes, cirurgião-dentista (CRO-MG 27292), com consultório na ${ENDERECO.logradouro}, ${ENDERECO.complemento}, ${ENDERECO.bairro}, ${ENDERECO.cidade} - ${ENDERECO.estado}, CEP ${ENDERECO.cep}. Esta política explica como tratamos os dados pessoais dos visitantes do site.`
    ]
  },
  {
    titulo: '2. Dados que coletamos',
    paragrafos: ['O site não possui cadastro nem área de login. Os dados tratados são:'],
    itens: [
      'Dados de navegação: páginas visitadas, tempo de permanência, tipo de dispositivo, navegador e origem do acesso, coletados por meio de cookies e tecnologias semelhantes.',
      'Dados de contato: quando você entra em contato por telefone, WhatsApp, e-mail ou Instagram, tratamos as informações que você mesmo fornece nessa conversa.'
    ]
  },
  {
    titulo: '3. Como utilizamos esses dados',
    itens: [
      'Responder solicitações de informação e agendamento.',
      'Entender como o site é utilizado e melhorá-lo.',
      'Medir o resultado de campanhas de divulgação.'
    ]
  },
  {
    titulo: '4. Ferramentas de terceiros',
    paragrafos: ['Utilizamos serviços que podem coletar dados de navegação por meio de cookies:'],
    itens: [
      'Google Tag Manager e Google Analytics: análise de uso do site.',
      'Doctoralia: widget de avaliações de pacientes.',
      'YouTube: exibição de vídeos.',
      'WhatsApp e Instagram: canais de contato, acessados por links externos.'
    ]
  },
  {
    titulo: '5. Compartilhamento',
    paragrafos: [
      'Não vendemos nem cedemos dados pessoais a terceiros. O compartilhamento ocorre apenas com os fornecedores de tecnologia citados acima, na medida necessária para o funcionamento do site, ou quando houver obrigação legal.'
    ]
  },
  {
    titulo: '6. Seus direitos',
    paragrafos: [
      'Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a confirmação da existência de tratamento, o acesso, a correção, a anonimização ou a exclusão dos seus dados, além de revogar consentimentos, escrevendo para o e-mail abaixo.'
    ]
  },
  {
    titulo: '7. Cookies',
    paragrafos: [
      'Você pode bloquear ou apagar cookies nas configurações do seu navegador. Isso não impede o uso do site, mas pode afetar algumas funcionalidades, como a exibição de vídeos e do widget do Doctoralia.'
    ]
  },
  {
    titulo: '8. Alterações',
    paragrafos: [
      'Esta política pode ser atualizada a qualquer momento. A versão vigente é sempre a publicada nesta página.'
    ]
  }
]

export default function PoliticaDePrivacidade() {
  return (
    <NextLayout {...SEO.privacidade}>
      <Container maxW="3xl" py={12}>
        <Heading
          as="h1"
          fontWeight={900}
          bgGradient="linear(to-b, #EACE8C, #D6BD82)"
          bgClip="text"
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          pb={6}
        >
          Política de Privacidade
        </Heading>
        <Stack spacing={8} color="gray.600">
          {secoes.map(secao => (
            <Stack key={secao.titulo} spacing={3}>
              <Heading as="h2" size="md" color="next-primary">
                {secao.titulo}
              </Heading>
              {secao.paragrafos?.map(paragrafo => (
                <Text key={paragrafo}>{paragrafo}</Text>
              ))}
              {secao.itens && (
                <UnorderedList spacing={2} pl={2}>
                  {secao.itens.map(item => (
                    <ListItem key={item}>{item}</ListItem>
                  ))}
                </UnorderedList>
              )}
            </Stack>
          ))}
          <Text>
            Contato para assuntos de privacidade:{' '}
            <Link href={`mailto:${EMAIL}`} color="next-primary" fontWeight={500}>
              {EMAIL}
            </Link>
          </Text>
        </Stack>
      </Container>
    </NextLayout>
  )
}
