import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import NextLink from 'next/link'
import {
  Container,
  Heading,
  Link,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import NextLayout from '../../components/templates/nextLayout'
import NextHeroPage from '../../components/organisms/nextHeropage'
import NextTreatmentCta from '../../components/organisms/nextTreatmentCta'
import { SITE_URL, jsonLdNegocio } from '../../data/site'
import { TreatmentPage, getTreatmentPage, treatmentPages } from '../../data/treatmentPages'

type Props = { page: TreatmentPage }

const Lista = ({ titulo, itens }: { titulo: string; itens: string[] }) => (
  <Stack spacing={3}>
    <Heading as="h2" size="lg" color="next-primary">
      {titulo}
    </Heading>
    <UnorderedList spacing={2} pl={2} color="gray.600">
      {itens.map(item => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </UnorderedList>
  </Stack>
)

export default function TratamentoPage({ page }: Props) {
  const outros = treatmentPages.filter(outro => outro.slug !== page.slug)
  const jsonLdProcedimento = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: page.nome,
    description: page.resumo,
    url: `${SITE_URL}/tratamentos/${page.slug}`,
    provider: { '@id': jsonLdNegocio['@id'] }
  }

  return (
    <NextLayout {...page.seo} jsonLdExtra={jsonLdProcedimento}>
      <NextHeroPage />
      <Container maxW="container.md" py={12}>
        <Stack spacing={10}>
          <Stack spacing={4}>
            <NextLink href="/tratamentos" passHref>
              <Link color="next-primary" fontSize="sm">
                ← Todos os tratamentos
              </Link>
            </NextLink>
            <Heading
              as="h1"
              fontWeight={700}
              bgGradient="linear(to-b, next-secondary, next-primary)"
              bgClip="text"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            >
              {page.titulo}
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.700">
              {page.resumo}
            </Text>
          </Stack>

          <Stack spacing={3}>
            <Heading as="h2" size="lg" color="next-primary">
              Como funciona
            </Heading>
            {page.explicacao.map(paragrafo => (
              <Text key={paragrafo} color="gray.600">
                {paragrafo}
              </Text>
            ))}
          </Stack>

          <Lista titulo="Quando é indicado" itens={page.indicacoes} />
          <Lista titulo="Limitações e cuidados" itens={page.limitacoes} />

          <NextTreatmentCta />

          <Stack spacing={3}>
            <Heading as="h2" size="md" color="next-primary">
              Outros tratamentos
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2}>
              {outros.map(outro => (
                <NextLink key={outro.slug} href={`/tratamentos/${outro.slug}`} passHref>
                  <Link color="gray.600">{outro.nome}</Link>
                </NextLink>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </NextLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: treatmentPages.map(page => ({ params: { slug: page.slug } })),
  fallback: false
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const page = getTreatmentPage(String(params?.slug))
  if (!page) return { notFound: true }
  return { props: { page } }
}
