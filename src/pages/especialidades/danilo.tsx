import React from 'react'
import NextTemplateSpecialties from '../../components/templates/nextTemplateSpecialties'
import { nextCallToActionItems } from '../../data/home'

const NextHome = () => {
  return <NextTemplateSpecialties nextCallToActionItems={nextCallToActionItems[2]} />
}

export default NextHome
