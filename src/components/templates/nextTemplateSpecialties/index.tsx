import { Box, Grid, GridItem, Container } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import NextDoctoralia from '../../atoms/nextDoctoralia'
import NextAccordionImage, { NextAccordionImageProps } from '../../organisms/nextAccordionImage'
import NextGridListWithHeading from '../../organisms/nextGridListWithHeading'
import NextLayout from '../nextLayout'
import Image from 'next/image'
import { SeoMeta } from '../../../data/seo'

export type NextTemplateAboutUs = {
  seo?: SeoMeta
  nextCallToActionItems: NextAccordionImageProps
}

const NextTemplateSpecialties = ({ nextCallToActionItems, seo }: NextTemplateAboutUs) => {
  useEffect(() => {
    process.nextTick(() => {
      if (globalThis.window) {
        const script = document.createElement('script')
        script.innerHTML = `!function($_x,_s,id){
          var js, fjs=$_x.getElementsByTagName(_s)[0];
          if(!$_x.getElementById(id)){
            js = $_x.createElement(_s);
            js.id = id;
            js.src = "//platform.docplanner.com/js/widget.js";
            fjs.parentNode.insertBefore(js,fjs);
          }
        }(document,"script","zl-widget-s");`
        document.body.appendChild(script)
      }
    })
  }, [])
  return (
    <NextLayout {...seo}>
      <NextAccordionImage
        id={'specialties'}
        title={nextCallToActionItems.title}
        text={nextCallToActionItems.text}
        image={nextCallToActionItems.image}
        imageAlt={nextCallToActionItems.imageAlt}
        textButton={nextCallToActionItems.textButton}
        directionMd={nextCallToActionItems.directionMd}
        width={nextCallToActionItems.width}
        height={nextCallToActionItems.height}
        url={nextCallToActionItems.url}
        content={nextCallToActionItems.content}
        background={nextCallToActionItems.background}
        specialties={nextCallToActionItems.specialties}
      />
      {nextCallToActionItems.title === 'Dr. Danilo' && (
        <NextDoctoralia slug="danilo-antunes" nome="Danilo Antunes" />
      )}
      {nextCallToActionItems.title === 'Dra. Rosane' && (
        <NextDoctoralia slug="rosane-lage" nome="Rosane Lage" />
      )}
      <Box pt={16}>
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem colSpan={2} display={['none', 'block']}>
            <Box>
              <Image
                alt={'Mulher sorrindo e mostrando os dentes'}
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
