import React from 'react'
import { Box, SimpleGrid, Container } from '@chakra-ui/react'
import NextFeature, { NextFeatureProps } from '../../molecules/nextFeature'

export interface NextFeaturesProps {
  items: Array<NextFeatureProps>
  numberGrid?: Array<number>
}

const NextFeatures = ({ items, numberGrid = [1, 5] }: NextFeaturesProps) => {
  return (
    <Container maxW="container.lg">
      <Box p={4}>
        <SimpleGrid columns={numberGrid} spacing={10}>
          {items?.map((item, index) => (
            <NextFeature
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
              width={item.width}
              height={item.height}
              as={item.as}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default NextFeatures
