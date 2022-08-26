import { Box, Grid, GridItem, Container } from '@chakra-ui/react'
import React from 'react'
import NextAccordionImage, { NextAccordionImageProps } from '../../organisms/nextAccordionImage'
import NextGridListWithHeading from '../../organisms/nextGridListWithHeading'
import NextLayout from '../nextLayout'
import Image from 'next/image'

export type NextTemplateAboutUs = {
  nextCallToActionItems: NextAccordionImageProps
}

const NextTemplateSpecialties = ({ nextCallToActionItems }: NextTemplateAboutUs) => {
  return (
    <NextLayout>
      <NextAccordionImage
        id={'specialties'}
        title={nextCallToActionItems.title}
        text={nextCallToActionItems.text}
        image={nextCallToActionItems.image}
        textButton={nextCallToActionItems.textButton}
        directionMd={nextCallToActionItems.directionMd}
        width={nextCallToActionItems.width}
        height={nextCallToActionItems.height}
        url={nextCallToActionItems.url}
        content={nextCallToActionItems.content}
        background={nextCallToActionItems.background}
        specialties={nextCallToActionItems.specialties}
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
              <NextGridListWithHeading features={nextCallToActionItems.features} />
            </Container>
          </GridItem>
        </Grid>
      </Box>
    </NextLayout>
  )
}

export default NextTemplateSpecialties
