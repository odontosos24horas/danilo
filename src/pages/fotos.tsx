import React from 'react'
import NextTemplateAboutUs from '../components/templates/nextTemplateAboutUs'
import { nextCallToActionItems, nextTechnologyItems } from '../data'

const NextHome = () => {
  return (
    <NextTemplateAboutUs
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
    />
  )
}

export default NextHome
