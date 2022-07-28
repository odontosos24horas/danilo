/* eslint-disable prettier/prettier */
import React from 'react'
import NextCallToAction, {
  NextCallToActionProps
} from '../../organisms/nextCallToAction'
import NextLayout from '../nextLayout'
import { Box, Center, Heading } from '@chakra-ui/react'

export type NextTemplateAboutUs = {
  nextCallToActionItems: Array<NextCallToActionProps>
}

const NextTemplateAboutUs = ({
  nextCallToActionItems
}: NextTemplateAboutUs) => {
  return (
    <NextLayout>
      <Center>
        <Heading
          fontWeight={900}
          as={'span'}
          bgGradient="linear(to-b, #EACE8C, #D6BD82)"
          bgClip="text"
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        >
          Fotos
        </Heading>
      </Center>
      <Box>
        <NextCallToAction
          id={'quemsomos'}
          title={nextCallToActionItems[1].title}
          text={nextCallToActionItems[1].text}
          image={nextCallToActionItems[1].image}
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
