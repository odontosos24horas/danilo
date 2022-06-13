import NextLayout from '../nextLayout'
import NextFeatures from '../../organisms/nextFeatures'
import NextHeroPage from '../../organisms/nextHeropage'
import { Container, Text } from '@chakra-ui/react'

export type NextTemplateAgreementsProps = {
  nextTechnologyItems: Array<Record<string, unknown>>
}
const NextTemplateAgreements = ({ nextTechnologyItems }: NextTemplateAgreementsProps) => {
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
          Convênios
        </Text>
        <NextFeatures items={nextTechnologyItems} numberGrid={5} />
      </Container>
    </NextLayout>
  )
}

export default NextTemplateAgreements
