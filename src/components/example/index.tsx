import React from 'react'

export interface Props {
  label: string
}

const Example = ({ label }: Props) => <h1 className="h1">{label}</h1>

export default Example
