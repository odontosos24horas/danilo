import React from 'react'
import {
  Flex,
  SimpleGrid
} from '@chakra-ui/react'
import NextTeamCard from '../../molecules/nextTeamCard'

export interface NextTeamProps {
  items: Array<Record<string, string>>
}

const NextTeam = ({
  items
}: NextTeamProps) => {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}>
      <SimpleGrid
        columns={{ base: 1, xl: 4 }}
        spacing={'20'}
        mt={16}
        mx={'auto'}>
        {items.map((item, index) => (
          <NextTeamCard
            key={index}
            name={item.name}
            role={item.role}
            avatar={item.avatar}
            text={item.text}
            linkedin={item.linkedin}
            instagram={item.instagram}
            youtube={item.youtube}
          />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default NextTeam
