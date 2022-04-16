import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextWithBackgroundImage from '../../organisms/nextWithBackgroundImage'
import NextHero from '../../organisms/nextHero'
import NextLayout from '../nextLayout'

export type NextTemplateHomeProps = {
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
}

const NextTemplateHome = ({
  nextCallToActionItems
}: NextTemplateHomeProps) => {
  return (
    <NextLayout>
      <NextHero />
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
      <NextWithBackgroundImage />
    </NextLayout>
  )
}

export default NextTemplateHome
