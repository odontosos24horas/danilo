import React from 'react'
import NextTemplateTreatments from '../components/templates/nextTemplateTreatments'
import { videos } from '../data/videos'
import { SEO } from '../data/seo'

export default function NextTreatments() {
  return (
    <NextTemplateTreatments
      seo={SEO.videos}
      nextTechnologyItems={videos}
      title="Vídeos"
      numberGrid={2}
    />
  )
}
