import React, { useState } from 'react'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider from 'react-slick'

export default function NextCarousel() {
  const [slider, setSlider] = useState<Slider | null>(null)
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  const cards = [
    '/images/carousel/3.jpeg',
    '/images/carousel/2.jpeg',
    '/images/carousel/1.jpeg',
    '/images/carousel/4.jpeg',
    '/images/carousel/5.jpeg'
  ]

  return (
    <Box position={'relative'} height={'441px'} width={'662px'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="facebook"
        borderRadius="full"
        position="absolute"
        size="lg"
        fontSize="29px"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <FaChevronLeft />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="facebook"
        borderRadius="full"
        position="absolute"
        size="lg"
        fontSize="29px"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <FaChevronRight />
      </IconButton>
      {/* Slider */}
      <Slider ref={slider => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'441px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}
