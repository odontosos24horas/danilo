import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextAccordionImage, { NextAccordionImageProps } from '../../organisms/nextAccordionImage'
import NextGridListWithHeading from '../../organisms/nextGridListWithHeading'
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
        id={'specialties'}
        title={nextCallToActionItems[4].title}
        text={nextCallToActionItems[4].text}
        image={nextCallToActionItems[4].image}
        textButton={nextCallToActionItems[4].textButton}
        directionMd={nextCallToActionItems[4].directionMd}
        width={nextCallToActionItems[4].width}
        height={nextCallToActionItems[4].height}
        url={nextCallToActionItems[4].url}
        content={nextCallToActionItems[4].content}
        background={nextCallToActionItems[4].background}
      />
      <NextGridListWithHeading title={'Como funciona?'} />
    </NextLayout>
  )
}

export default NextTemplateSpecialties
