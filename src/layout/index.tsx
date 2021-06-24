import React from 'react'
import Head from 'next/head'

import { Navbar } from './Navbar'
import { Container } from './styles'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <Head>
          <title>Centro Médico de Ñemby</title>
        </Head>

        <main className="main">
          <Navbar />
          {children}
        </main>
      </Container>
    </>
  )
}

export default Layout
