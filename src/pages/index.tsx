import React from 'react'
import NextTemplateHome from '../components/templates/nextTemplateHome'
import { nextCallToActionItems } from '../data/home'

const NextHome = () => {
  return <NextTemplateHome nextCallToActionItems={nextCallToActionItems} />
}

export default NextHome
