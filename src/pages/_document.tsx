import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <>
        <Html lang="es">
          <Head>
            <meta charSet="utf-8" />
            <title>Centro Médico de Ñemby</title>
            <meta
              name="description"
              content="Centro Medico Ñemby es una empresa dedicada al servicio y cuidado de la salud integral de las personas."
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;900&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    )
  }
}
