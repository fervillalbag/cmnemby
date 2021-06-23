import React from 'react'
import Head from 'next/head'

import { Navbar } from '../../layout/Navbar'
import { Header } from '../../layout/Header'
import { Map } from '../../components/Map'
import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Centro Médico de Ñemby</title>
      </Head>

      <main className="main">
        <Navbar />
        <Header />
        <Map />
      </main>
    </Container>
  )
}

export default Home
