import React from 'react'
import NextTemplateSpecialties from '../../components/templates/nextTemplateSpecialties'
import { nextCallToActionItems } from '../../data/home'
import { SEO } from '../../data/seo'

const NextHome = () => {
  return (
    <NextTemplateSpecialties
      seo={SEO.especialidadesRosane}
      nextCallToActionItems={nextCallToActionItems[3]}
    />
  )
}

export default NextHome
