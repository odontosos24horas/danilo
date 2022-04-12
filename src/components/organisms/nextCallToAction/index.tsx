import React, { Suspense, useEffect, useState } from 'react'
import {
  Flex,
  Stack,
  Text
} from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'
import Link from 'next/link'
import Image from 'next/image'
import NextContactUs from '../nextContactUs'
const NextMap = React.lazy(() => import('../../atoms/nextMap'))

export interface NextCallToActionProps {
  bgButton?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  background?: boolean;
  title: string;
  text: string;
  textButton?: string;
  image: string;
  url: string
  width: string
  height: string
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  content: 'image' | 'map' | 'form';
  id: string;
}

const NextCallToAction = ({
  background,
  title,
  text,
  image,
  url,
  width,
  height,
  textButton,
  directionMd = 'row',
  directionBase = 'column',
  bgButton,
  content,
  id
}: NextCallToActionProps) => {
  const [isFront, setIsFront] = useState(false)
  useEffect(() => {
    process.nextTick(() => {
      if (globalThis.window ?? false) {
        setIsFront(true)
      }
    })
  }, [])
  if (!isFront) return null
  return (
    <Stack id={id} bg={background ? 'next-primary' : ''} direction={{ base: directionBase, md: directionMd }}>
      <Flex px={{ base: 10 }} pt={content === 'form' ? 20 : 0} pb={{ base: 20, md: 0 }} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Text
            color={background ? 'white' : 'next-primary'}
            fontWeight={700}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          >
            {title}
          </Text>
          {content === 'form' && (
            <NextContactUs />
          )}
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'next-gray'}>
            {text}
          </Text>
          {textButton && (
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link href={url}>
                <a>
                  <NextButton bg={bgButton}>{textButton}</NextButton>
                </a>
              </Link>
            </Stack>
          )}
        </Stack>
      </Flex>
      <Flex flex={1} justify={'end'}>
        {(content === 'image' || content === 'form') && (
          <Image
            alt={title}
            src={image}
            width={width}
            height={height}
          />
        )}
        {content === 'map' && (
          <Suspense fallback={() => 'loading'}>
            <NextMap />
          </Suspense>
        )}
      </Flex>
    </Stack>
  )
}

export default NextCallToAction
