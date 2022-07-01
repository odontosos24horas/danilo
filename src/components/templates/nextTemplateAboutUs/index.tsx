/* eslint-disable prettier/prettier */
import React from 'react'
import NextCallToAction, {
  NextCallToActionProps
} from '../../organisms/nextCallToAction'
import NextLayout from '../nextLayout'
import NextHeroPage from '../../organisms/nextHeropage'
import { Box } from '@chakra-ui/react'

export type NextTemplateAboutUs = {
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
}

const NextTemplateAboutUs = ({
  nextCallToActionItems
}: NextTemplateAboutUs) => {
  return (
    <NextLayout>
      <NextHeroPage />
      <Box py={[0, 20]}>
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
      />
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
    </NextLayout>
  )
}

export default NextTemplateAboutUs
