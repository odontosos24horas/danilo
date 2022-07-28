import React from 'react'
import { Box, Center, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'
import NextLayout from '../components/templates/nextLayout'

const NextHome = () => {
  return (
    <NextLayout>
      <Center>
        <Heading
          fontWeight={900}
          as={'span'}
          bgGradient="linear(to-b, #EACE8C, #D6BD82)"
          bgClip="text"
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        >
          Contato
        </Heading>
      </Center>
      <Container>
        <Box py={8}>
          <Stack>
            <Heading color="next-primary" size="md">
              Dr. Danilo Antunes
            </Heading>
            <Link href={'tel:3133188718'}>
              <Heading color="next-primary" size="md">
                (31) 3318-8718
              </Heading>
            </Link>
            <Link href={'https://www.instagram.com/dr.daniloantunes'} color="next-primary">
              Instagram Dr. Danilo
            </Link>
          </Stack>
        </Box>
        <Box pb={8}>
          <Stack>
            <Heading color="next-primary" size="md">
              Dra. Rosane Lage Lacerda
            </Heading>
            <Link href={'tel:25552779'}>
              <Heading color="next-primary" size="md">
                (31) 2555-2779
              </Heading>
            </Link>
            <Link href={'https://www.instagram.com/dra.rosane.lage'} color="next-primary">
              Instagram Dra. Rosane
            </Link>
          </Stack>
        </Box>
        <Text color="next-primary" fontSize="sm">
          Rua Gonçalves Dias, 82 | Sala 902 - Bairro Funcionários - Cep 30140-190
        </Text>
      </Container>
    </NextLayout>
  )
}

export default NextHome
