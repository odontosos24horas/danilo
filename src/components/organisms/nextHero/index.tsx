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
        <Image alt={'Login Image'} objectFit={'cover'} src={'/images/home/hero.png'} />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}>
            <Text
              fontWeight={900}
              as={'span'}
              bgGradient="linear(to-b, #27B9F1, #2081CD)"
              bgClip="text"
            >
              Cirurgias
            </Text>
            <Text
              fontWeight={900}
              as={'span'}
              bgGradient="linear(to-b, #1C65BB, #152D98)"
              bgClip="text"
            >
              <br /> de implante
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} opacity={'0.6'}>
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
          </Text>
        </Stack>
      </Flex>
    </Stack>
  )
}
