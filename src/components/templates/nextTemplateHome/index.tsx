import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero from '../../organisms/nextHero'
import NextLayout from '../nextLayout'

import {
  Box,
  Text
} from '@chakra-ui/react'

export type NextTemplateHomeProps = {
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
}

const NextTemplateHome = ({
  nextCallToActionItems,
  nextTechnologyItems
}: NextTemplateHomeProps) => {
  return (
    <NextLayout>
      <NextHero />
      <Box pt={{ base: 10, md: 0 }} pb={{ base: 20 }}>
        <NextCallToAction
          id={'quemsomos'}
          title={nextCallToActionItems[0].title}
          text={nextCallToActionItems[0].text}
          image={nextCallToActionItems[0].image}
          textButton={nextCallToActionItems[0].textButton}
          directionMd={nextCallToActionItems[0].directionMd}
          width={nextCallToActionItems[0].width}
          height={nextCallToActionItems[0].height}
          url={nextCallToActionItems[0].url}
          content={nextCallToActionItems[0].content}
        />
      </Box>
      <Box pb={{ base: 20 }}>
        <NextCallToAction
          id={'urgencias'}
          title={nextCallToActionItems[1].title}
          text={nextCallToActionItems[1].text}
          image={nextCallToActionItems[1].image}
          textButton={nextCallToActionItems[1].textButton}
          directionMd={nextCallToActionItems[1].directionMd}
          width={nextCallToActionItems[1].width}
          height={nextCallToActionItems[1].height}
          url={nextCallToActionItems[1].url}
          content={nextCallToActionItems[1].content}
        />
      </Box>
      <Box id={'convenios'} pb={{ base: 20 }}>
        <Text px={{ base: 10 }} color={'next-primary'} fontWeight={700} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          CONVÊNIOS
        </Text>
        <NextFeatures
          items={nextTechnologyItems}
          numberGrid={5}
        />
      </Box>
      <Box pb={{ base: 20 }}>
        <NextCallToAction
          id={'trabalheconosco'}
          background
          title={nextCallToActionItems[2].title}
          text={nextCallToActionItems[2].text}
          image={nextCallToActionItems[2].image}
          textButton={nextCallToActionItems[2].textButton}
          directionMd={nextCallToActionItems[2].directionMd}
          width={nextCallToActionItems[2].width}
          height={nextCallToActionItems[2].height}
          url={nextCallToActionItems[2].url}
          bgButton={'next-dark'}
          content={nextCallToActionItems[2].content}
        />
      </Box>
      <Box pb={{ base: 20 }}>
        <NextCallToAction
          id={'comochegar'}
          title={nextCallToActionItems[3].title}
          text={nextCallToActionItems[3].text}
          image={nextCallToActionItems[3].image}
          textButton={nextCallToActionItems[3].textButton}
          directionMd={nextCallToActionItems[3].directionMd}
          width={nextCallToActionItems[3].width}
          height={nextCallToActionItems[3].height}
          url={nextCallToActionItems[3].url}
          content={nextCallToActionItems[3].content}
        />
      </Box>
    </NextLayout>
  )
}

export default NextTemplateHome
