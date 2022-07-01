import React from 'react'
import NextTemplateAgreements from '../components/templates/nextTemplateAgreements'
import { videos } from '../data/videos'

export default function NextAgreements() {
  return <NextTemplateAgreements nextTechnologyItems={videos} title="Vídeos" numberGrid={2} />
}
