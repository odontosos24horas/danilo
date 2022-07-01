import React from 'react'
import NextTemplateAgreements from '../components/templates/nextTemplateAgreements'
import { treatmentsItems } from '../data/treatments'

export default function NextAgreements() {
  return (
    <NextTemplateAgreements
      nextTechnologyItems={treatmentsItems}
      title="Tratamentos"
      numberGrid={2}
    />
  )
}
