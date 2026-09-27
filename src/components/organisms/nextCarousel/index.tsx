import React, { useState } from 'react'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Slider from 'react-slick'

export default function NextCarousel() {
  const [slider, setSlider] = useState<Slider | null>(null)
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  // Fotos do consultório. Imagens de fundo não têm alt: a descrição vai em aria-label.
  const cards = [
    {
      url: '/images/carousel/2.jpeg',
      alt: 'Recepção com balcão de mármore e sala de espera ao fundo'
    },
    { url: '/images/carousel/3.jpeg', alt: 'Sala de espera com poltronas rosa e sofá' },
    {
      url: '/images/carousel/1.jpeg',
      alt: 'Sala de estar com sofá, televisão e quadros na parede'
    },
    {
      url: '/images/carousel/4.jpeg',
      alt: 'Consultório com mesa de atendimento e cadeira odontológica'
    },
    { url: '/images/carousel/5.jpeg', alt: 'Sofá da sala de espera com quadros decorativos' },
    {
      url: '/images/carousel/6.jpeg',
      alt: 'Dra. Rosane Lage no consultório, ao lado da cadeira odontológica e do microscópio operatório'
    },
    { url: '/images/carousel/7.jpeg', alt: 'Atendimento odontológico com microscópio operatório' },
    {
      url: '/images/carousel/8.jpeg',
      alt: 'Corredor de acesso às salas de atendimento, com portas de vidro'
    },
    {
      url: '/images/carousel/9.jpeg',
      alt: 'Recepção com os nomes do Dr. Danilo Antunes e da Dra. Rosane Lage na parede'
    }
  ]

  return (
    <Box position={'relative'} height={['340px', '662px']} width={'100%'} overflow={'hidden'}>
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
        {cards.map(({ url, alt }, index) => (
          <Box
            key={index}
            role="img"
            aria-label={alt}
            height={['300px', '662px']}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}
