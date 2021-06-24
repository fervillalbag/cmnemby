import React from 'react'
import Link from 'next/link'

import { FaEnvelope, FaHome, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { Container } from './styles'
import { useRouter } from 'next/dist/client/router'

export const Navbar: React.FC = () => {
  const router = useRouter()

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
          {router.pathname === '/nosotros' && (
            <Link href="/">
              <a className="navbar-social">
                <FaHome />
              </a>
            </Link>
          )}
          <Link href="https://wa.me/+595981323480">
            <a
              className="navbar-social"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </Link>
          <Link href="https://www.google.com/maps?ll=-25.385587,-57.548652&z=15&t=m&hl=es-ES&gl=US&mapclient=embed&cid=5258573292780511304">
            <a
              className="navbar-social"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <FaMapMarkerAlt />
            </a>
          </Link>
          <Link href="mailto:centromediconemby@gmail.com">
            <a className="navbar-social">
              <FaEnvelope />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}
