import React from 'react'
import NextTemplateAboutUs from '../components/templates/nextTemplateAboutUs'
import { nextCallToActionItems } from '../data/home'

const NextHome = () => {
  return <NextTemplateAboutUs nextCallToActionItems={nextCallToActionItems} />
}

export default NextHome
