import React, { useEffect, useState } from 'react'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextHero from '../../organisms/nextHero'
import NextLayout from '../nextLayout'
import { Box, Container } from '@chakra-ui/react'
import NextGridListWithHeading from '../../organisms/nextGridListWithHeading'

export type NextTemplateHomeProps = {
  nextCallToActionItems: Array<NextCallToActionProps>
}

const NextTemplateHome = ({ nextCallToActionItems }: NextTemplateHomeProps) => {
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
      <NextHero />
      <Container maxW="5xl" py={8}>
        <NextGridListWithHeading features={nextCallToActionItems[2].specialties} />
      </Container>
      {/* <Center bgColor={'next-gray-dark'}>
        <Heading
          pt={8}
          fontWeight={900}
          as={'span'}
          bgGradient="linear(to-b, #EACE8C, #D6BD82)"
          bgClip="text"
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        >
          Nossos Dentistas
        </Heading>
      </Center> */}
      <NextCallToAction
        id={'danilo'}
        title={nextCallToActionItems[2].title}
        text={nextCallToActionItems[2].text}
        image={nextCallToActionItems[2].image}
        textButton={nextCallToActionItems[2].textButton}
        directionMd={nextCallToActionItems[2].directionMd}
        width={nextCallToActionItems[2].width}
        height={nextCallToActionItems[2].height}
        url={nextCallToActionItems[2].url}
        content={nextCallToActionItems[2].content}
        background={nextCallToActionItems[2].background}
        directionBase={nextCallToActionItems[2].directionBase}
      />
      <Box bg={'next-gray-dark'}>
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
      <NextCallToAction
        id={'rosane'}
        title={nextCallToActionItems[3].title}
        text={nextCallToActionItems[3].text}
        image={nextCallToActionItems[3].image}
        textButton={nextCallToActionItems[3].textButton}
        directionMd={nextCallToActionItems[3].directionMd}
        width={nextCallToActionItems[3].width}
        height={nextCallToActionItems[3].height}
        url={nextCallToActionItems[3].url}
        content={nextCallToActionItems[3].content}
        background={nextCallToActionItems[3].background}
      />
      <NextCallToAction
        id={'odontologia'}
        title={nextCallToActionItems[0].title}
        titleColor={nextCallToActionItems[0].titleColor}
        text={nextCallToActionItems[0].text}
        textColor={nextCallToActionItems[0].textColor}
        background={nextCallToActionItems[0].background}
        image={nextCallToActionItems[0].image}
        textButton={nextCallToActionItems[0].textButton}
        directionMd={nextCallToActionItems[0].directionMd}
        width={nextCallToActionItems[0].width}
        height={nextCallToActionItems[0].height}
        url={nextCallToActionItems[0].url}
        content={nextCallToActionItems[0].content}
      />
      {/* <NextWithBackgroundImage /> */}
    </NextLayout>
  )
}

export default NextTemplateHome
