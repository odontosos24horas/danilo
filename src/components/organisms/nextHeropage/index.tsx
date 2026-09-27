import { Flex } from '@chakra-ui/react'

export interface NextHeroPageProps {
  backgroundImage?: string
}

export default function NextHeroPage({
  backgroundImage = '/images/heropage.jpeg'
}: NextHeroPageProps) {
  return (
    <Flex
      role="img"
      aria-label="Recepção e sala de espera do consultório no bairro Funcionários, em Belo Horizonte"
      minH={['150px', '317px']}
      w={'full'}
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    ></Flex>
  )
}
