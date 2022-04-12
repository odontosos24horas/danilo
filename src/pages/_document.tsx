import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="description" content="Odonto SOS tem atendimentos 24 horas de urgência odontológica em BH e região metropolitana de Belo Horizonte. Oferece dentistas de plantão 24 horas na região da Savassi em BH." />
          <meta name="keywords" content="urgência odontológica, dentista 24 horas, dentista 24 horas BH, dentista de plantão 24 horas, plantão odontológico, odontologia 24 horas, clínica dentária 24 horas, dentista atendimento 24 horas, dentista emergência" />
          <link rel="icon" href="/favicon.png" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-PPHPCBH" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-PPHPCBH');
            `
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPHPCBH"
              height="0" width="0">
            </iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
