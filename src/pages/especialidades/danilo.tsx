import React from 'react'
import NextTemplateSpecialties from '../../components/templates/nextTemplateSpecialties'
import { nextCallToActionItems, nextTechnologyItems } from '../../data'

const NextHome = () => {
  return (
    <NextTemplateSpecialties
      nextCallToActionItems={nextCallToActionItems[2]}
      nextTechnologyItems={nextTechnologyItems}
    />
  )
}

export default NextHome
