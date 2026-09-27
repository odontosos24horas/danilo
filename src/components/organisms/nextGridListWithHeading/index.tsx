import { Box, SimpleGrid, Text, HStack, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export interface NextGridListWithHeadingProps {
  title?: string
  titleColor?: string
  bgGradient?: string
  features?: Array<Record<string, any>>
}

export default function NextGridListWithHeading({
  title,
  titleColor,
  bgGradient = 'linear(to-b, next-secondary, next-primary)',
  features = []
}: NextGridListWithHeadingProps) {
  return (
    <Box>
      <Text
        pb={6}
        color={titleColor}
        bgGradient={titleColor ? undefined : bgGradient}
        bgClip={!titleColor ? 'text' : undefined}
        fontWeight={700}
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
      >
        {title}
      </Text>
      <SimpleGrid spacing={10}>
        {features?.map(feature => (
          <HStack key={feature.id} align={'top'}>
            <Box px={2} display={['none', 'block']}>
              <Image alt="" src={feature.image} width={70} height={70} layout={'fixed'} />
            </Box>
            <VStack align={'start'}>
              <Text
                color={titleColor}
                bgGradient={titleColor ? undefined : bgGradient}
                bgClip={!titleColor ? 'text' : undefined}
                fontWeight={500}
                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              >
                {feature.title}
              </Text>
              <Text color={'gray.600'}>{feature.text}</Text>
            </VStack>
          </HStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}
