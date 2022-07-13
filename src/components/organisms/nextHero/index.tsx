import React from 'react'
import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack
      minH={'80vh'}
      bgGradient="linear(to-r, #D6D9D8, white)"
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={'/images/home/hero.jpeg'} />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>
            <Text
              fontWeight={900}
              as={'span'}
              bgGradient="linear(to-b, #EACE8C, #D6BD82)"
              bgClip="text"
            >
              Clínica odontológica
            </Text>
            <Text
              fontWeight={900}
              as={'span'}
              bgGradient="linear(to-b, #CEB77F, #BBA676)"
              bgClip="text"
            >
              <br />
            </Text>
          </Heading>
          {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} opacity={'0.6'}>
            Se você perdeu seu dente por causa de cáries, doenças gengivais, traumas ou outros
            problemas, o implante é uma ótima solução.
            <br />
            <br />
            Ele permite restituir as funções dos dentes naturais, melhorando a mastigação, a fala e
            a estética do sorriso.
            <br />
            <br />
            Ou seja, ele não é uma solução puramente estética. Essa alternativa também é positiva
            por diversas questões funcionais.
          </Text> */}
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} opacity={'0.6'}>
            Com um consultório amplo e agradável, localizado em um dos pontos nobres de Belo
            Horizonte, realizamos atendimentos especializados em Implantodontia, Periodontia,
            Endodontia e Microscopia endodôntica.
            <br />
            <br />
            Através de tratamentos personalizados, com a qualidade que você merece. Aqui você se
            sentirá seguro de que todos os processos de higienização e esterilização de equipamentos
            são realizados adequadamente, além do cumprimento de todos os cuidados necessários para
            lhe proporcionar tranquilidade e conforto e a segurança de um tratamento muito bem
            feito.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  )
}
