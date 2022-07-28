import React from 'react'
import NextTemplateTreatments from '../components/templates/nextTemplateTreatments'
import { videos } from '../data/videos'

export default function NextTreatments() {
  return <NextTemplateTreatments nextTechnologyItems={videos} title="Vídeos" numberGrid={2} />
}
