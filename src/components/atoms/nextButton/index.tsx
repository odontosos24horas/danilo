import React, { PropsWithChildren } from 'react'
import { Button } from '@chakra-ui/react'

export type NextButtonProps = {
  bg?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | undefined
  textColor?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  isLoading?: boolean | boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

const NextButton = ({
  bg = 'next-primary',
  children,
  variant = 'solid',
  textColor = 'white',
  isLoading,
  type
}: PropsWithChildren<NextButtonProps>) => {
  return (
    <>
      <Button
        bg={bg}
        textColor={textColor}
        borderColor="next-primary"
        variant={variant}
        height="45px"
        borderRadius="50px"
        _hover={{ bg: 'next-dark' }}
        isLoading={isLoading}
        type={type}
      >
        { children }
      </Button>
    </>
  )
}

export default NextButton
