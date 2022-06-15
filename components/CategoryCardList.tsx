import { ProductCategory } from '@types'
import * as React from 'react'
import styled from 'styled-components'
import CategoryCardItem from './CategoryCardItem'

const CategoryCardListStyled = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 260px;
  gap: 10px;
  overflow-x: scroll;
  padding-bottom: 20px;

  li {
    list-style: none;
    display: block;
  }
`

type Props = {
  categoryList: ProductCategory[]
}

const CategoryCardList: React.FC<Props> = ({ categoryList }) => {
  return (
    <CategoryCardListStyled>
      {categoryList.map((item) => {
        return (
          <li key={item.id}>
            <CategoryCardItem
              id={item.id}
              name={item.name}
              text={item.text}
              image={item.image}
            />
          </li>
        )
      })}
    </CategoryCardListStyled>
  )
}

export default CategoryCardList
