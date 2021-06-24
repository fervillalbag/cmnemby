import React from 'react'

import Layout from '../../layout'
import { Map } from '../../components/Map'
import { Header } from '../../layout/Header'

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Map />
    </Layout>
  )
}

export default Home
