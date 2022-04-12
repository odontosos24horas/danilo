import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Center, Heading } from '@chakra-ui/react'

const NextHero = () => {
  return (
    <>
      <Image
        alt={'Login Image'}
        src={'/images/home/hero.jpeg'}
        width={1440}
        height={632}
        layout="responsive"
      />
      <Center display={{ base: 'flex', md: 'none' }} pt={4}>
        <NextLink href={'tel:3135860900'}>
          <a>
            <Heading color="next-primary" size="lg">
              (31) 3586-0900
            </Heading>
          </a>
        </NextLink>
      </Center>
    </>
  )
}

export default NextHero
