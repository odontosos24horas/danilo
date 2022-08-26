import React, { ReactNode } from 'react'
import Image from 'next/image'
import packageInfo from '../../../../package.json'

import { Box, Container, Heading, SimpleGrid, Stack, Text, Link } from '@chakra-ui/react'
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
          <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
            <Stack spacing={6}>
              <Box justifyContent={'center'}>
                <Image
                  src="/images/logos/logo_header.svg"
                  alt="Logo Dr Danilo Antunes"
                  width={153}
                  height={29}
                />
                <Image
                  src="/images/logos/logo_rosane.svg"
                  alt="Logo Dra Rosane Lage Lacerda"
                  width={153}
                  height={29}
                />
              </Box>
              <Text fontSize={'sm'}>
                © {new Date().getFullYear()} Dr. Danilo Antunes e Dra. Rosane Lage Lacerda. Todos os
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
              <Link href={'/'}>A Clínica</Link>
              <Link href={'/fotos'}>Fotos</Link>
              <Link href={'/convenios'}>Convênios</Link>
              <Link href={'/tratamentos'}>Tratamentos</Link>
              <Link href={'/videos'}>Vídeos</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Contatos</ListHeader>
              <Link href={'mailto:drdaniloantunes@gmail.com'}>E-mail Dr. Danilo</Link>
              <Link href={'https://www.instagram.com/dr.daniloantunes'}>Instagram Dr. Danilo</Link>
              <Link href={'mailto:rosane.lacerda@hotmail.com'}>E-mail Dra. Rosane</Link>
              <Link href={'https://www.instagram.com/dra.rosane.lage'}>Instagram Dra. Rosane</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'tel:3133188718'}>
                <Heading color="next-primary" size="lg">
                  (31) 3318-8718
                </Heading>
              </Link>
              <Heading color="next-primary" size="md">
                Dr. Danilo Antunes
              </Heading>
              <Link href={'tel:25552779'}>
                <Heading color="next-primary" size="lg">
                  (31) 2555-2779
                </Heading>
              </Link>
              <Heading color="next-primary" size="md">
                Dra. Rosane Lage Lacerda
              </Heading>
              <Text color="next-primary" fontSize="sm">
                Rua Gonçalves Dias, 82 | Sala 902 - Bairro Funcionários - Cep 30140-190
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </footer>
  )
}

export default NextFooter
