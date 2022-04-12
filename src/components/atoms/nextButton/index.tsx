import React, { PropsWithChildren } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  bg?: 'primary' | 'primary-dark' | 'white' | 'dark' | undefined
}

const NextButton = ({ bg = 'primary', children }: PropsWithChildren<Props>) => (
  <Button bg={bg}>{children}</Button>
)

export default NextButton
