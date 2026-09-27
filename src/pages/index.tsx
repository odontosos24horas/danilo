import React from 'react'
import NextTemplateHome from '../components/templates/nextTemplateHome'
import { nextCallToActionItems } from '../data/home'
import { SEO } from '../data/seo'

const NextHome = () => {
  return <NextTemplateHome seo={SEO.home} nextCallToActionItems={nextCallToActionItems} />
}

export default NextHome
