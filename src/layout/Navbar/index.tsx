import React from 'react'
import Link from 'next/link'

import { FaEnvelope, FaHome, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { Container } from './styles'

export const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="navbar-top">
          <Link href="/">
            <a className="navbar-brand">
              <FaHome />
            </a>
          </Link>
        </div>
        <div className="navbar-bottom">
          <Link href="/">
            <a className="navbar-social">
              <FaWhatsapp />
            </a>
          </Link>
          <Link href="/">
            <a className="navbar-social">
              <FaMapMarkerAlt />
            </a>
          </Link>
          <Link href="/">
            <a className="navbar-social">
              <FaEnvelope />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}
