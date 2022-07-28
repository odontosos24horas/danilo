import React from 'react'
import NextTemplateAgreements from '../components/templates/nextTemplateAgreements'
import { agreements } from '../data/agreements'

export default function NextAgreements() {
  return <NextTemplateAgreements agreements={agreements} />
}
