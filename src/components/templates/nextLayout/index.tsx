import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import NextHeader from '../../organisms/nextHeader'
import NextFooter from '../../organisms/nextFooter'
import { Box } from '@chakra-ui/react'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'
import Link from 'next/link'
import { nextSocialNetwork } from '../../../data'

type Props = {
  title?: string
  description?: string
}

const NextLayout = ({
  children,
  title = 'Dentista 24 horas BH | Urgência|ODONTO S.O.S|Emergência Odontológica',
  description = 'Odonto SOS tem atendimentos 24 horas de urgência odontológica em BH e região metropolitana de Belo Horizonte. Oferece dentistas de plantão 24 horas na região da Savassi em BH.'
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header>
        <NextHeader />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <NextFooter />
      </footer>

      <Box
        position="fixed"
        width="60px"
        height="60px"
        zIndex={100}
        bottom="20px"
        right="20px"
      >
        <Link href={nextSocialNetwork.whatsapp.url}>
          <a target="_blank" rel="noreferrer">
            <NextWhatsIcon />
          </a>
        </Link>
      </Box>
    </>
  )
}

export default NextLayout
