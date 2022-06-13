import Image from 'next/image'
import * as React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Cart from './icons/Cart'

type Props = {
  id: string
  name: string
  price?: number
  brand: string
  image: string
}

const ProductItemStyled = styled.article`
  width: 100%;
  height: 100%;
  min-height: 350px;
  display: grid;
  grid-template-rows: 1fr max-content;
  box-shadow: 0 1px 2px 1px #00000026;

  .product__image {
    position: relative;
  }

  .product__content {
    display: grid;
    gap: 2px;
    padding: 15px 15px 26px;
    position: relative;
  }

  .product__brand {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
  }

  .product__price {
    font-weight: 700;
  }

  .product__button__addCart {
    position: absolute;
    bottom: -21px;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    align-items: center;
    gap: 5px;
    justify-self: center;

    path {
      stroke: ${({ theme }) => theme.colors.primary};
      stroke-width: 2;
    }

    &:hover {
      path {
        stroke: ${({ theme }) => theme.colors.secundary};
      }
    }
  }
`

const ProductItem: React.FC<Props> = ({ id, name, price, brand, image }) => {
  return (
    <ProductItemStyled id={id}>
      <figure className="product__image">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          priority={false}
        />
      </figure>

      <div className="product__content">
        <h3 className="product__name">{name}</h3>
        <span className="product__brand">{brand}</span>
        {price && <span className="product__price">$ {price.toFixed(2)}</span>}
        <Button className="product__button__addCart">
          <Cart width="20" height="20" /> Agregar
        </Button>
      </div>
    </ProductItemStyled>
  )
}

export default ProductItem
