import { Title } from '@config/themeConfig'
import Image from 'next/image'
import * as React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Wrapper from './Wrapper'

const BannerStyled = styled.section`
  margin-bottom: 25px;

  .banner__container {
    width: 100%;
    height: max-content;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .banner__content {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    gap: 10px;
  }

  .banner__description {
    color: ${({ theme }) => theme.colors.gray};
  }

  .banner__image {
    position: relative;
    width: 100%;
    max-width: 375px;
    justify-self: center;
    align-self: center;

    img {
      width: 100%;
    }
  }


  @media (min-width: 768px) {
    .banner__container {
      height: calc(100vh - 115px);
      grid-template-columns: 1fr .7fr;
    }

    @media (max-height: 500px) {
      .banner__container {
        height: 100%;
        padding: 40px 0;
      }
    }

    .banner__content {
      gap: 15px;
    }

    .banner__description {
      font-size: 20px;
    }

    .banner__image {
      max-width: 100%;
    }
  }

  @media (min-width: 1024px) {
    .banner__container {
      height: calc(100vh - 63px);
      grid-template-columns: 1fr .7fr;
    }

    @media (max-height: 500px) {
      .banner__container {
        height: 100%;
        padding: 40px 0;
      }
    }
  }
`

const Banner: React.FC = () => {
  const bannerData = {
    id: "001",
    title: "Herramientas de alta calidad",
    description: "Importamos y distribuimos herramientas para la construcción, agricultura, jardinería e industria con cobertura en todo el territorio nacional",
    button: "Ver más",
    image: "/images/banner.png"
  }

  return (
    <BannerStyled>
      <Wrapper>
        <div className="banner__container">
          <div className="banner__content">
            <Title>{bannerData.title}</Title>
            <p className="banner__description">{bannerData.description}</p>
            <Button className="banner__button">{bannerData.button}</Button>
          </div>

          <figure className="banner__image">
            {bannerData.image &&
              <Image
                src={bannerData.image}
                alt={"Banner"}
                layout="responsive"
                width={1200}
                height={898}
                objectFit="contain"
                priority
              />
            }
          </figure>
        </div>
      </Wrapper>
    </BannerStyled>
  )
}

export default Banner
