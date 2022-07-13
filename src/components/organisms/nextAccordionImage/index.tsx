import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import Image from 'next/image'

export interface NextAccordionImageProps {
  bgButton?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  background?: string
  title?: string
  titleColor?: string
  bgGradient?: string
  text?: string
  textColor?: string
  textButton?: string
  image: string
  url?: string
  width?: string
  height?: string
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  content?: 'image' | 'map' | 'form' | 'carousel'
  id?: string
  rightItemJustify?: 'end'
  features?: Array<Record<string, any>>
  specialties?: Array<Record<string, any>>
}

const NextAccordionImage = ({
  background,
  title,
  titleColor,
  textColor = 'next-quaternary',
  bgGradient = 'linear(to-b, next-secondary, next-primary)',
  image,
  width,
  height,
  directionMd = 'row',
  directionBase = 'column',
  content,
  id,
  specialties
}: NextAccordionImageProps) => {
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
    <Stack id={id} bg={background} direction={{ base: directionBase, md: directionMd }}>
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
          <Accordion defaultIndex={[0]}>
            {specialties?.map(item => (
              <AccordionItem borderTop="0" borderColor="next-primary">
                <h2>
                  <AccordionButton borderBottom="1px" borderColor="next-primary">
                    <Box flex="1" textAlign="left">
                      <Text
                        color={'next-primary'}
                        fontWeight={500}
                        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                      >
                        {item.title}
                      </Text>
                    </Box>
                    <AccordionIcon color="next-primary" w={10} h={10} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    fontSize={{ base: 'md', lg: 'lg' }}
                    color={textColor}
                    whiteSpace={'pre-wrap'}
                  >
                    {item.text}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={title} src={image} width={width} height={height} />
      </Flex>
    </Stack>
  )
}

export default NextAccordionImage
