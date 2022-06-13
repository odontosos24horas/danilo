import { Box, Grid, GridItem, Container } from '@chakra-ui/react'
import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextAccordionImage, { NextAccordionImageProps } from '../../organisms/nextAccordionImage'
import NextGridListWithHeading from '../../organisms/nextGridListWithHeading'
import NextLayout from '../nextLayout'
import Image from 'next/image'

export type NextTemplateAboutUs = {
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextAccordionImageProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
}

const NextTemplateSpecialties = ({ nextCallToActionItems }: NextTemplateAboutUs) => {
  return (
    <NextLayout>
      <NextAccordionImage
        id={'specialties'}
        title={nextCallToActionItems[4].title}
        text={nextCallToActionItems[4].text}
        image={nextCallToActionItems[4].image}
        textButton={nextCallToActionItems[4].textButton}
        directionMd={nextCallToActionItems[4].directionMd}
        width={nextCallToActionItems[4].width}
        height={nextCallToActionItems[4].height}
        url={nextCallToActionItems[4].url}
        content={nextCallToActionItems[4].content}
        background={nextCallToActionItems[4].background}
      />
      <Box pt={16}>
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem colSpan={2} display={['none', 'block']}>
            <Box>
              <Image
                alt={'Sorriso'}
                src={'/images/sorriso.jpg'}
                width={551}
                height={1014}
                layout={'responsive'}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={[7, 5]}>
            <Container maxW="3xl">
              <NextGridListWithHeading title={'Como funciona?'} />
            </Container>
          </GridItem>
        </Grid>
      </Box>
    </NextLayout>
  )
}

export default NextTemplateSpecialties
