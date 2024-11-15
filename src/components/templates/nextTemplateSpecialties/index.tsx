import { Box, Grid, GridItem, Container } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import NextAccordionImage, { NextAccordionImageProps } from '../../organisms/nextAccordionImage'
import NextGridListWithHeading from '../../organisms/nextGridListWithHeading'
import NextLayout from '../nextLayout'
import Image from 'next/image'

export type NextTemplateAboutUs = {
  nextCallToActionItems: NextAccordionImageProps
}

const NextTemplateSpecialties = ({ nextCallToActionItems }: NextTemplateAboutUs) => {
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
      {nextCallToActionItems.title === 'Dr. Danilo' && (
        <Box bg={'next-gray-dark'} py={'12'}>
          <a
            id="zl-url"
            className="zl-url"
            href="https://www.doctoralia.com.br/danilo-antunes/dentista/belo-horizonte"
            rel="nofollow"
            data-zlw-doctor="danilo-antunes"
            data-zlw-type="big"
            data-zlw-opinion="true"
            data-zlw-hide-branding="true"
            data-zlw-saas-only="true"
          >
            Danilo Antunes - Doctoralia.com.br
          </a>
        </Box>
      )}
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
