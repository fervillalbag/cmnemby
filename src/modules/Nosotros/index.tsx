import React from 'react'
import Layout from '../../layout'
import { Container } from './styles'

const Nosotros: React.FC = () => {
  return (
    <Container>
      <Layout>
        <div className="about-left">
          <h3 className="about-left__title">¿Quiénes somos?</h3>
          <p className="about-left__description">
            Somos un moderno centro médico conformado por personas jóvenes
            emprendedoras, quienes ofrecemos la mejor atención personalizada,
            apoyándonos en la tecnología de punta y unida a un sistema gestión
            de servicios, calidad humana e higiene que fortalece nuestro
            desempeño, con una visión interdisciplinaria, lo que hace posible
            que el paciente tenga a su disposición la posibilidad de satisfacer
            todas sus necesidades y requerimientos en un mismo lugar Nuestro
            servicio se basa en el factor humano, nuestros valores son el
            compromiso, la integridad, el respeto, la responsabilidad y la
            solidaridad lo que nos permite brindar en todo momento una atención
            de primera calidad, asesoramiento personalizado, nos orientamos a
            cubrir las inquietudes y deseos de cada paciente y cada caso en
            particular. Logrando su comodidad, satisfacción y confianza.
          </p>

          <h3 className="about-left__title">Portafolios de servicios</h3>

          <p className="about-left__description">
            En la actualidad, el Centro Médico Ñemby cuenta con 26
            especialidades que están a cargo de 40 profesionales habilitados
            quienes cuentan con sus respectivos registros al día, una amplia
            formación y vasta experiencia en los más grandes hospitales de
            referencias del país. De esta forma logramos que el paciente pueda
            satisfacer todas sus necesidades en un mismo sitio. Tenemos a
            disposición servicios de Consultorios Internos General Adultos,
            Medicina Familiar, Pediatría, Ginecología, Obstetricia,
            Planificación Familiar, Traumatología, Otorrinolaringología,
            Gastroenterología, Dermatología, Endocrinología, Flebologia,
            Neurología, Urología, Fisioterapia, Nutrición, Fonoaudiología,
            Psicología Clínica Adultos, Psicología Infantil, Neumología,
            Oncología, Psiquiatría, Geriatría, Reumatología, Laboratorio,
            Clínico, Odontología General, Ecografías Obstétricas,
            Electrocardiogramas, PAP, Colposcopia, Ecografía Renal. Cabe
            mencionar que está en proceso de construcción el Área de Imagen, así
            como también Urgencias. Tenemos previsto la inauguración de esas
            áreas en el mes de Abril/mayo del corriente.
          </p>

          <p className="about-left__description">
            El centro médico cuenta con su propia estructura edilicia
            estratégicamente ubicado, con una amplia sala de espera y espacio
            pensado para nuestros niños, tenemos disponibles 8 consultorios
            totalmente equipados amoblados y climatizados.
          </p>

          <p className="about-left__description">
            Laboratorio de análisis clínicos automatizados con tecnología de
            punta.
          </p>

          <p className="about-left__description">
            En la sección de imágenes contaremos con tomografía computarizada,
            mamografía, ortopantomografia y radiología.
          </p>
        </div>
        <div className="about-right">
          <div className="about-right__media">
            <img src="/nosotros.jpg" alt="" className="about-right__image" />
          </div>
        </div>
      </Layout>
    </Container>
  )
}

export default Nosotros
