import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextAccordionImage, { NextAccordionImageProps } from '../../organisms/nextAccordionImage'
import NextLayout from '../nextLayout'

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
        id={'profile'}
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

export default NextTemplateSpecialties
