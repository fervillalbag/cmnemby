import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Centro Médico de Ñemby</title>
      </Head>

      <main>
        <h1>Starting the project</h1>
      </main>
    </Container>
  )
}

export default Home
