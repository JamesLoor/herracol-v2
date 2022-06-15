import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import Button from './Button'

const CategoryCardItemStyled = styled.article`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 1px 2px 1px #00000026;
  padding: 25px 20px;
  display: grid;
  grid-template-rows: 1fr max-content;
  position: relative;

  .categoryItem__image {
    position: absolute;
    top: 20px;
    right: 0;
    z-index: -1;
  }

  .categoryItem__content {
    width: 50%;
    display: grid;
    grid-auto-rows: max-content;
    gap: 5px;
  }

  .categoryItem__title {
    font-size: 18px;
    text-transform: uppercase;
  }

  .categoryItem__text {
    color: ${({ theme }) => theme.colors.gray};
  }

  .categoryItem__link {
    font-size: 18px;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`

type Props = {
  id: string
  name: string
  text?: string
  image?: string
}

const CategoryCardItem: React.FC<Props> = ({ id, name, text, image }) => {
  return (
    <CategoryCardItemStyled id={id}>
      <div className="categoryItem__content">
        <h3 className="categoryItem__title">{name}</h3>
        <p className="categoryItem__text">{text}</p>
      </div>
      <Link href="/">
        <a className="categoryItem__link">Ver productos</a>
      </Link>
      {image &&
        <figure className="categoryItem__image">
          <Image
            src={image}
            alt={name}
            width="130"
            height="130"
            objectFit="contain"
          />
        </figure>
      }
    </CategoryCardItemStyled>
  )
}

export default CategoryCardItem
