import React, { useEffect, useState } from 'react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'
import Link from 'next/link'
import Image from 'next/image'
import NextContactUs from '../nextContactUs'
import NextCarousel from '../nextCarousel'

export interface NextCallToActionProps {
  bgButton?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  background?: string
  title: string
  titleColor?: string
  bgGradient?: string
  text: string
  textColor?: string
  textButton?: string
  image: string
  url: string
  width: string
  height: string
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  content: 'image' | 'map' | 'form' | 'carousel'
  id: string
  rightItemJustify?: 'end'
  features?: []
  specialties?: []
}

const NextCallToAction = ({
  background,
  title,
  titleColor,
  bgGradient = 'linear(to-b, next-secondary, next-primary)',
  text,
  textColor = 'next-quaternary',
  image,
  url,
  width,
  height,
  textButton,
  directionMd = 'row',
  directionBase = 'column',
  bgButton,
  content,
  id,
  rightItemJustify
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
    <>
      <Stack
        id={id}
        pb={[0, 16]}
        bg={background}
        direction={{ base: directionBase, md: directionMd }}
      >
        {content !== 'carousel' && (
          <Flex
            px={{ base: 10 }}
            pt={content === 'form' ? 20 : [12, 0]}
            pb={{ base: 6, md: 0 }}
            flex={1}
            align={'center'}
            justify={'center'}
          >
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Text
                color={titleColor}
                bgGradient={titleColor ? undefined : bgGradient}
                bgClip={!titleColor ? 'text' : undefined}
                fontWeight={700}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              >
                {title}
              </Text>
              {(content === 'image' || content === 'form') && (
                <Box display={{ md: 'none' }}>
                  <Image alt={title} src={image} width={width} height={height} />
                </Box>
              )}
              {content === 'form' && <NextContactUs />}
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={textColor} whiteSpace={'pre-wrap'}>
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
        )}
        <Flex flex={1} pt={[0, 12]} justify={rightItemJustify}>
          {(content === 'image' || content === 'form') && (
            <Box display={{ base: 'none', md: 'flex' }}>
              <Image alt={title} src={image} width={width} height={height} />
            </Box>
          )}
        </Flex>
      </Stack>
      {content === 'carousel' && <NextCarousel />}
    </>
  )
}

export default NextCallToAction
