import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function NextWithBackgroundImage() {
  return (
    <Flex
      minH={['350px', '505px']}
      w={'full'}
      backgroundImage={'url(/images/home/background.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        justify={'center'}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        px={useBreakpointValue({ base: 10, md: '8rem' })}
        w={'3xl'}
      >
        <Stack spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Especialidades
          </Text>
          <Text color={'white'} fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}>
            Conheça as duas especialidades de implantes oferecidas por nós e escolha a ideal para
            seu tratamento.
          </Text>
          <Stack direction={'row'}>
            <Button
              bgGradient={'linear(to-b, #28C5F8, #1950AE)'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'next-primary' }}
            >
              Ver especialidades
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
