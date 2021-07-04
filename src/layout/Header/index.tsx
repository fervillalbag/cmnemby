import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <header className="header">
        <div className="brand">
          <img src="/logo.jpeg" alt="" className="brand-image" />
          <h1 className="header__title">
            Centro Médico <span>Ñemby</span>
          </h1>
        </div>

        <div className="header-main">
          <div className="header-media">
            <img src="/image1.jpg" alt="" className="header-media__image" />
            <img src="/image2.jpg" alt="" className="header-media__image" />
            <img src="/image3.jpg" alt="" className="header-media__image" />
            <img src="/image4.jpg" alt="" className="header-media__image" />
          </div>

          <p className="header-main__description">
            Centro Medico Ñemby es una empresa dedicada al servicio y cuidado de
            la salud integral de las personas.
          </p>

          <p className="header-main__description">
            Somos un equipo joven que brindamos la mejor atención personalizada
            y por sobre todo humanizada, con calidad y calidez familiar
            promoviendo la salud y mejorando la calidad de vida de los usuarios.
          </p>

          <Link href="/nosotros">
            <a className="header-main__link">Acerca de nosotros</a>
          </Link>
        </div>
      </header>
    </Container>
  )
}
