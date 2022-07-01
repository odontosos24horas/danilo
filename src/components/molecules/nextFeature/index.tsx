import { Flex, Text, Stack, Box } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import Image from 'next/image'

export interface NextFeatureProps {
  title?: string
  text?: string
  image?: string
  icon?: ReactElement
  width?: number
  height?: number
  as?: undefined | 'iframe' | 'video'
}

const NextFeature = ({
  title,
  text,
  image,
  icon,
  width = 64,
  height = 64,
  as
}: NextFeatureProps) => {
  return (
    <>
      {!as && (
        <Stack>
          {icon && (
            <Flex
              w={16}
              h={16}
              align={'center'}
              justify={'center'}
              color={'white'}
              rounded={'full'}
              bg={'gray.100'}
              mb={1}
            >
              {icon}
            </Flex>
          )}
          {image && <Image alt={title} src={image} width={width} height={height} />}
          {title && (
            <Text fontWeight={500} color={'next-primary'}>
              {title}
            </Text>
          )}
          {text && (
            <Text color={'#616161'} whiteSpace={'pre-wrap'}>
              {text}
            </Text>
          )}
        </Stack>
      )}
      {as && (
        <Box
          as={as}
          src={image}
          width="100%"
          sx={{
            aspectRatio: '16/9'
          }}
        />
      )}
    </>
  )
}

export default NextFeature
