import React from 'react'
import NextTemplateAboutUs from '../components/templates/nextTemplateAboutUs'
import { nextCallToActionItems } from '../data/home'
import { SEO } from '../data/seo'

const NextHome = () => {
  return <NextTemplateAboutUs seo={SEO.fotos} nextCallToActionItems={nextCallToActionItems} />
}

export default NextHome
