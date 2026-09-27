/* eslint-disable prettier/prettier */
import React from 'react'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextLayout from '../nextLayout'
import { Box, Center, Heading } from '@chakra-ui/react'
import { SeoMeta } from '../../../data/seo'

export type NextTemplateAboutUs = {
  seo?: SeoMeta
  nextCallToActionItems: Array<NextCallToActionProps>
}

const NextTemplateAboutUs = ({ nextCallToActionItems, seo }: NextTemplateAboutUs) => {
  return (
    <NextLayout {...seo}>
      <Center>
        <Heading
          fontWeight={900}
          as={'h1'}
          bgGradient="linear(to-b, #EACE8C, #D6BD82)"
          bgClip="text"
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        >
          Fotos do consultório
        </Heading>
      </Center>
      <Box>
        <NextCallToAction
          id={'quemsomos'}
          title={nextCallToActionItems[1].title}
          text={nextCallToActionItems[1].text}
          image={nextCallToActionItems[1].image}
          imageAlt={nextCallToActionItems[1].imageAlt}
          textButton={nextCallToActionItems[1].textButton}
          directionMd={nextCallToActionItems[1].directionMd}
          width={nextCallToActionItems[1].width}
          height={nextCallToActionItems[1].height}
          url={nextCallToActionItems[1].url}
          content={nextCallToActionItems[1].content}
          rightItemJustify={'end'}
        />
      </Box>
    </NextLayout>
  )
}

export default NextTemplateAboutUs
