import React from 'react'
import NextTemplateSpecialties from '../../components/templates/nextTemplateSpecialties'
import { nextCallToActionItems, nextTechnologyItems } from '../../data'

const NextHome = () => {
  return (
    <NextTemplateSpecialties
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
    />
  )
}

export default NextHome
