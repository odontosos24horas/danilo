import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Dr. Danilo Antunes é um cirurgião dentista especializado em implantes dentários e periodontia. Atende no bairro de Funcionários, em Belo Horizonte."
          />
          <meta
            name="keywords"
            content="implantes em BH, periodontia BH, implante dentário, implantes dentários BH"
          />
          <link rel="icon" href="/favicon.png" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-PPHPCBH" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-PPHPCBH');
            `
            }}
          /> */}
        </Head>
        <body>
          {/* <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPHPCBH"
              height="0" width="0">
            </iframe>
          </noscript> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
