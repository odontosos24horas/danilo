import NextLayout from '../nextLayout'
import NextFeatures from '../../organisms/nextFeatures'
import NextHeroPage from '../../organisms/nextHeropage'
import { Box, Container, Text, VStack } from '@chakra-ui/react'
import { NextFeatureProps } from '../../molecules/nextFeature'

export type NextTemplateAgreementsProps = {
  agreements: Array<Array<NextFeatureProps>>
  title?: string
  numberGrid?: number
}
const NextTemplateAgreements = ({
  agreements,
  title = 'Convênios',
  numberGrid = 5
}: NextTemplateAgreementsProps) => {
  return (
    <NextLayout>
      <NextHeroPage />
      <Container maxW="container.lg" py={12}>
        <Text
          pb={6}
          bgGradient={'linear(to-b, next-secondary, next-primary)'}
          bgClip={'text'}
          fontWeight={700}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        >
          {title}
        </Text>
        <VStack spacing={6} align="stretch">
          <Box>
            <Text color={'next-gray.600'} fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
              Atendemos particular e temos parcerias com várias empresas para atender seus
              funcionários da melhor maneira possível. Somos conveniados com planos odontológicos,
              dentre eles:
            </Text>
            <NextFeatures items={agreements[0]} numberGrid={numberGrid} />
          </Box>
          {/* <Box>
            <Text
              bgGradient={'linear(to-b, next-secondary, next-primary)'}
              bgClip={'text'}
              fontWeight={700}
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            >
              Dra. Rosane
            </Text>
            <NextFeatures items={agreements[1]} numberGrid={numberGrid} />
          </Box> */}
        </VStack>
      </Container>
    </NextLayout>
  )
}

export default NextTemplateAgreements
