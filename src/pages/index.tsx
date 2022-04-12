
import React from 'react'
import NextTemplateHome from '../components/templates/nextTemplateHome'
import {
  nextFeatureItems,
  nextCallToActionItems,
  nextTechnologyItems,
  nextTeamItems
} from '../data'

const NextHome = () => {
  return (
    <NextTemplateHome
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
      nextTeamItems={nextTeamItems}
    />
  )
}

export default NextHome
