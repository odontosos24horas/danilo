import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import NextHeader from '../../organisms/nextHeader'
import NextFooter from '../../organisms/nextFooter'

type Props = {
  title?: string
  description?: string
}

const NextLayout = ({
  children,
  title = 'Implantes dentários BH | Periodontia',
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

      <main>{children}</main>

      <footer>
        <NextFooter />
      </footer>
    </>
  )
}

export default NextLayout
