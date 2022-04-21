import React, { ReactNode } from 'react'
import Image from 'next/image'
import packageInfo from '../../../../package.json'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Link
} from '@chakra-ui/react'
import NextimeSvg from '../../atoms/nextimeSvg'
const version = packageInfo.version
const NeXTIMEColor = '#202F4F'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export type NextFooterProps = {
  bg?: 'next-primary' | undefined
}

const NextFooter = () => {
  return (
    <footer>
      <Box bg={'white'} color={'next-primary'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <Image
                  src="/images/logos/logo_header.svg"
                  alt="Logo Dr Danilo Antunes"
                  width={261}
                  height={48}
                />
              </Box>
              <Text fontSize={'sm'}>
                © {new Date().getFullYear()} Dr. Danilo Antunes. Todos os
                direitos reservados.
              </Text>
              <Text>
                Desenvolvido por:
                <Link
                  href="https://nextime.com.br"
                  _hover={{
                    transition: '0.3s',
                    fill: NeXTIMEColor
                  }}
                  transition="0.3s"
                  fill="next-primary"
                >
                  <a>
                    <NextimeSvg />
                  </a>
                </Link>
              </Text>
              <Text>v{version}</Text>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Menu</ListHeader>
              <Link href={'/'}>Home</Link>
              <Link href={'/quemsomos'}>Quem Somos</Link>
              <Link href={'/especialidades'}>Especialidades</Link>
              <Link href={'/convenios'}>Convênios</Link>
              <Link href={'/tratamentos'}>Tratamentos</Link>
              <Link href={'/videos'}>Vídeos</Link>
              <Link href={'https://odontosos.com.br/'}>Urgência</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Contatos</ListHeader>
              <Link href={'mailto:odontosos@odontosos.com.br'}>E-mail</Link>
              <Link href={'https://www.instagram.com/dr.daniloantunes'}>
                Instagram
              </Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'tel:3133188718'}>
                <Heading color="next-primary" size="lg">
                  (31) 3318-8718
                </Heading>
              </Link>
              <Text color="next-primary" fontSize="sm">
                Rua Gonçalves Dias, 82 | Sala 902 - Bairro Funcionários - Cep
                30140-190
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </footer>
  )
}

export default NextFooter
