import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { GTM_ID } from '../data/site'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/favicon.png" />
          {/* GTM carregado com o snippet correto (gtm.js).
              O código anterior usava gtag.js com um ID GTM-, combinação que
              não carrega o container: o gtag.js só aceita G-, AW- ou UA-.
              Na prática, nenhuma tag disparava para quem tem JavaScript. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              title="Google Tag Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
