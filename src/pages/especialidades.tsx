import React from 'react'
import NextTemplateSpecialties from '../components/templates/nextTemplateSpecialties'
import {
  nextFeatureItems,
  nextCallToActionItems,
  nextTechnologyItems,
  nextTeamItems
} from '../data'

const NextHome = () => {
  return (
    <NextTemplateSpecialties
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
      nextTeamItems={nextTeamItems}
    />
  )
}

export default NextHome
