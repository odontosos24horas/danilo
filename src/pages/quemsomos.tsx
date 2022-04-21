import React from 'react'
import NextTemplateAboutUs from '../components/templates/nextTemplateAboutUs'
import {
  nextFeatureItems,
  nextCallToActionItems,
  nextTechnologyItems,
  nextTeamItems
} from '../data'

const NextHome = () => {
  return (
    <NextTemplateAboutUs
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
      nextTeamItems={nextTeamItems}
    />
  )
}

export default NextHome
