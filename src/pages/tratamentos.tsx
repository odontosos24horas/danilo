import React from 'react'
import NextLink from 'next/link'
import { Box, Container, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import NextLayout from '../components/templates/nextLayout'
import NextHeroPage from '../components/organisms/nextHeropage'
import NextTreatmentCta from '../components/organisms/nextTreatmentCta'
import { SEO } from '../data/seo'
import { treatmentPages } from '../data/treatmentPages'

export default function Tratamentos() {
  return (
    <NextLayout {...SEO.tratamentos}>
      <NextHeroPage />
      <Container maxW="container.lg" py={12}>
        <Stack spacing={10}>
          <Stack spacing={4}>
            <Heading
              as="h1"
              fontWeight={700}
              bgGradient="linear(to-b, next-secondary, next-primary)"
              bgClip="text"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            >
              Tratamentos com implantes dentários e periodontia
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.700">
              Conheça os tratamentos realizados pelo Dr. Danilo Antunes no consultório do bairro
              Funcionários, em Belo Horizonte.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {treatmentPages.map(page => (
              <Box key={page.slug} borderWidth="1px" borderColor="gray.200" borderRadius="lg" p={6}>
                <Stack spacing={3} h="full">
                  <Heading as="h2" size="md" color="next-primary">
                    {page.nome}
                  </Heading>
                  <Text color="gray.600" flex={1}>
                    {page.resumo}
                  </Text>
                  <NextLink href={`/tratamentos/${page.slug}`} passHref>
                    <Link color="next-primary" fontWeight={500}>
                      Saiba mais sobre {page.nome.toLowerCase()} →
                    </Link>
                  </NextLink>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
          <NextTreatmentCta />
        </Stack>
      </Container>
    </NextLayout>
  )
}
