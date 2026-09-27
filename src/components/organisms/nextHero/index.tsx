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
        <Image
          alt={
            'Recepção do consultório com os nomes do Dr. Danilo Antunes e da Dra. Rosane Lage na parede'
          }
          objectFit={'cover'}
          src={'/images/home/hero.jpeg'}
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading
            as="h1"
            fontWeight={900}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            bgGradient="linear(to-b, #CEB77F, #BBA676)"
            bgClip="text"
          >
            Implantes dentários e periodontia em Belo Horizonte
          </Heading>
          <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'black'} opacity={'0.75'}>
            Tratamentos especializados com planejamento digital, cirurgia de implantes, reconstrução
            óssea, periodontia e próteses CAD/CAM.
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} opacity={'0.6'}>
            Dr. Danilo Antunes — Cirurgião-dentista — CRO-MG 27292 — Especialista em Implantodontia
            e Periodontia. Atendimento no bairro Funcionários, em Belo Horizonte.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  )
}
