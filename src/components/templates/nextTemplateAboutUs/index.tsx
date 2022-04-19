import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextLayout from '../nextLayout'
import NextHeroPage from '../../organisms/nextHeropage'
import { Box } from '@chakra-ui/react'

export type NextTemplateAboutUs = {
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
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
        id={'profile'}
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
    </NextLayout>
  )
}

export default NextTemplateAboutUs
