import { SubTitle } from '@config/themeConfig'
import * as React from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import productListJson from '../data/productList.json'
import Wrapper from './Wrapper'

const FeaturedProductsStyled = styled.section`
  margin-bottom: 25px;

  .featuredProducts__container {
    display: grid;
    gap: 10px;
  }

  .featuredProducts__grid {
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
    .featuredProducts__grid {
      overflow: hidden;
      grid-auto-columns: 1fr;
    }
  }
`


const FeaturedProducts: React.FC = () => {
  const filterByFeaturedProduct = productListJson.filter((item) => item.featured)
  return (
    <FeaturedProductsStyled>
      <Wrapper>
        <div className="featuredProducts__container">
          <SubTitle>Productos más vendidos</SubTitle>
          <ul className="featuredProducts__grid">
            {filterByFeaturedProduct.map((item) => {
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
    </FeaturedProductsStyled>
  )
}

export default FeaturedProducts
