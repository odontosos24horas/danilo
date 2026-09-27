import NextLayout from '../nextLayout'
import NextFeatures from '../../organisms/nextFeatures'
import NextHeroPage from '../../organisms/nextHeropage'
import { Container, Text } from '@chakra-ui/react'
import { SeoMeta } from '../../../data/seo'

export type NextTemplateAgreementsProps = {
  seo?: SeoMeta
  nextTechnologyItems: Array<Record<string, unknown>>
  title?: string
  numberGrid?: Array<number>
}
const NextTemplateAgreements = ({
  nextTechnologyItems,
  title = 'Convênios',
  numberGrid = [1, 5],
  seo
}: NextTemplateAgreementsProps) => {
  return (
    <NextLayout {...seo}>
      <NextHeroPage />
      <Container maxW="container.lg" py={12}>
        <Text
          as="h1"
          pb={6}
          bgGradient={'linear(to-b, next-secondary, next-primary)'}
          bgClip={'text'}
          fontWeight={700}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        >
          {title}
        </Text>
        <NextFeatures items={nextTechnologyItems} numberGrid={numberGrid} />
      </Container>
    </NextLayout>
  )
}

export default NextTemplateAgreements
