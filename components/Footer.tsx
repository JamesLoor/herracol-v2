import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '@components/Wrapper'
import Link from 'next/link'
import Image from 'next/image'

const FooterStyled = styled.footer`
  margin-bottom: 25px;

  .footer__container {
    display: grid;
    grid-template-areas:
      "logo"
      "enterprise"
      "faq"
      "contact"
      "legal";
    gap: 30px;
  }

  .footer__logo {
    justify-self: center;
    grid-area: logo;
  }

  .footer__section {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    grid-area: section;
    gap: 12px;
  }

  .section__enterprise { grid-area: enterprise; }
  .section__faq { grid-area: faq; }
  .section__contact { grid-area: contact; }
  .section__legal { grid-area: legal; }

  .section__title {
    font-size: 18px;
    font-weight: 700;
    border-bottom: 2px solid rgb(232, 220, 0);
    line-height: 1.8em;
  }

  .section__list {
    display: grid;
    grid-auto-flow: row;
    gap: 10px;
  }

  .section__item {
    list-style: none;
  }

  @media (min-width: 768px) {
    .footer__container {
      grid-template-areas:
        "logo logo"
        "enterprise faq"
        "contact legal";
    }
  }

  @media (min-width: 1024px) {
    .footer__container {
      grid-template-areas: "logo enterprise faq contact legal";
      grid-auto-columns: 1fr;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="footer__container">

          <figure className="footer__logo">
            <Image
              src="/images/LogoHerracol.png"
              width="188"
              height="126"
              alt="Logo Herracol"
            />
          </figure>

          <section className="footer__section section__enterprise">
            <h4 className="section__title">Empresa</h4>
            <ul className="section__list">
              <li className="section__item">
                <Link href="/nosotros" passHref>
                  <a>
                    Nosotros
                  </a>
                </Link>
              </li>
              <li className="section__item">
                <Link href="/productos" passHref>
                  <a>
                    Productos
                  </a>
                </Link>
              </li>
              <li className="section__item">
                <Link href="https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FHerracol%2FCatalogoHerracol2022.pdf?alt=media" passHref>
                  <a target="_blank">
                    Catálogo
                  </a>
                </Link>
              </li>
            </ul>
          </section>

          <section className="footer__section section__faq">
            <h4 className="section__title">Faq</h4>
            <ul className="section__list">
              <li className="section__item">
                <Link href="/" passHref>
                  <a>
                    ¿Cómo compro un producto?
                  </a>
                </Link>
              </li>
              <li className="section__item">
                <Link href="/" passHref>
                  <a>
                    ¿Hay envios a mi ubicación?
                  </a>
                </Link>
              </li>
              <li className="section__item">
                <Link href="/" passHref>
                  <a>
                    ¿Cómo opino sobre la aplicación?
                  </a>
                </Link>
              </li>
            </ul>
          </section>

          <section className="footer__section section__contact">
            <h4 className="section__title">Contacto</h4>
            <ul className="section__list">
              <li className="section__item">
                <Link href="https://www.google.com/maps?ll=-2.096338,-79.937145&z=17&t=m&hl=es&gl=EC&mapclient=embed&cid=3763735193489915217" passHref>
                  <a target="_blank">
                    Via a Daule km 11.5 Bodegas C7 y C41 Parque California 2
                  </a>
                </Link>
              </li>
              <li className="section__item">
                <Link href="mailto:ventas@herracol.net" passHref>
                  <a>
                    ventas@herracol.net
                  </a>
                </Link>
              </li>
              <li className="section__item">
                <Link href="tel:+593983245586" passHref>
                  <a>
                    +593 98 324 5586
                  </a>
                </Link>
              </li>
            </ul>
          </section>

          <section className="footer__section section__legal">
            <h4 className="section__title">Legal</h4>
            <ul className="section__list">
              <li className="section__item">
                <Link href="/politicas" passHref>
                  <a>
                    Política de privacidad
                  </a>
                </Link>
              </li>
              <li className="section__item">
                <Link href="/terminos" passHref>
                  <a>
                    Términos y condiciones
                  </a>
                </Link>
              </li>
            </ul>
          </section>

        </div>
      </Wrapper>
    </FooterStyled>
  )
}

export default Footer
