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
          <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-KCT26Q8" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-KCT26Q8');
            `
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              title="Código do GTM"
              src="https://www.googletagmanager.com/ns.html?id=GTM-KCT26Q8"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
