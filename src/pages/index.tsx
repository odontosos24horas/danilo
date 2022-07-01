import React from 'react'
import NextTemplateHome from '../components/templates/nextTemplateHome'
import { nextCallToActionItems, nextTechnologyItems } from '../data'

const NextHome = () => {
  return (
    <NextTemplateHome
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
    />
  )
}

export default NextHome
