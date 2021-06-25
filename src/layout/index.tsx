import React from 'react'

import { Navbar } from './Navbar'
import { Container } from './styles'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <main className="main">
          <Navbar />
          {children}
        </main>
      </Container>
    </>
  )
}

export default Layout
