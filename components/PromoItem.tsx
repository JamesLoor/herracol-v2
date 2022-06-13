import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import Button from './Button'

const PromoItemStyled = styled.article`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: grid;
  grid-template-rows: 1fr max-content;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 2px 1px #00000026;

  .promo__image {
    position: relative;
    height: auto;
  }

  .promo__content {
    display: grid;
    grid-auto-rows: max-content;
    gap: 10px;
    position: relative;
    padding: 15px 20px;
  }

  .promo__title {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    grid-template-rows: max-content max-content;
  }
`

type Props = {
  id: string
  image: string
  title: string
  description: string
}

const PromoItem: React.FC<Props> = ({ id, image, title, description }) => {
  return (
    <PromoItemStyled id={id}>
      <figure className="promo__image">
        <Image
          src={image}
          alt={title}
          width="604"
          height="340"
          priority={false}
        />
      </figure>
      <div className="promo__content">
        <h3 className="promo__title">{title}</h3>
        <p className="promo__description">{description}</p>
        <Button>Ver más</Button>
      </div>
    </PromoItemStyled>
  )
}

export default PromoItem
