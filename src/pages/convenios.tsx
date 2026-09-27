import React from 'react'
import NextTemplateAgreements from '../components/templates/nextTemplateAgreements'
import { agreements } from '../data/agreements'
import { SEO } from '../data/seo'

export default function NextAgreements() {
  return <NextTemplateAgreements seo={SEO.convenios} agreements={agreements} />
}
