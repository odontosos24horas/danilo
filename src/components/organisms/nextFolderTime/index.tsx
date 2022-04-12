import React from 'react'

import {
  Box,
  Grid,
  GridItem,
  Heading

} from '@chakra-ui/react'

type NextFolderTimeProps = {
  bg?: 'next-primary' | undefined
}

const NextFolderTime = ({
  bg = 'next-primary'
}: NextFolderTimeProps) => {
  return (
    <footer>
      <Box bg={bg} py={12}>
        <Grid
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem display={['none', 'block']} colSpan={[1, 3]}>
            <Heading fontSize="130px">
              T
            </Heading>
            <Heading fontSize="130px">
              E
            </Heading>
            <Heading fontSize="130px">
              M
            </Heading>
            <Heading fontSize="130px">
              P
            </Heading>
            <Heading fontSize="130px">
              O
            </Heading>
          </GridItem>
          <GridItem colSpan={[1, 1]}>
            <Box>
              <Heading fontWeight={600}>
                Faça seu bem mais precioso valer realmente a pena
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </footer>
  )
}

export default NextFolderTime
