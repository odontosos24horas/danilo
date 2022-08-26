import React from 'react'
import NextTemplateTreatments from '../components/templates/nextTemplateTreatments'
import { treatmentsItems } from '../data/treatments'

export default function NextAgreements() {
  return (
    <NextTemplateTreatments
      nextTechnologyItems={treatmentsItems}
      title="Tratamentos"
      numberGrid={[1, 2]}
    />
  )
}
