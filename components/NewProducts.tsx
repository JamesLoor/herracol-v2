import { SubTitle } from '@config/themeConfig'
import * as React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import productListJson from '../data/productList.json'
import ProductItem from './ProductItem'

const NewProductsStyled = styled.div`
  margin-bottom: 25px;

  .newProducts__container {
    display: grid;
    gap: 10px;
  }

  .newProducts__grid {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 250px;
    gap: 10px;
    overflow-x: scroll;
    padding-bottom: 40px;

    li {
      list-style: none;
      display: block;
    }
  }

  @media (min-width: 1024px) {
    .newProducts__grid {
      overflow: hidden;
      grid-auto-columns: 1fr;
    }
  }
`

const NewProducts: React.FC = () => {
  const filterByNewProduct = productListJson.filter((item) => item.new)
  return (
    <NewProductsStyled>
      <Wrapper>
        <div className="newProducts__container">
          <SubTitle>Productos nuevos</SubTitle>
          <ul className="newProducts__grid">
            {filterByNewProduct.map((item) => {
              return (
                <li key={item.id}>
                  <ProductItem
                    id={item.id}
                    name={item.name}
                    brand={item.brand}
                    image={item.image}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </Wrapper>
    </NewProductsStyled>
  )
}

export default NewProducts
