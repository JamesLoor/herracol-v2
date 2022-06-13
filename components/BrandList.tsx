import { SubTitle } from '@config/themeConfig'
import * as React from 'react'
import styled from 'styled-components'
import BrandItem from './BrandItem'
import Wrapper from './Wrapper'
import brandListJson from '../data/brandList.json'

const BrandListStyled = styled.div`
  margin-bottom: 25px;

  .brand__container {
    display: grid;
    gap: 10px;
  }

  .brand__grid {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 250px;
    gap: 10px;
    overflow-x: scroll;

    li {
      list-style: none;
      display: block;
    }
  }

  @media (min-width: 1024px) {
    .brand__grid {
      overflow: hidden;
      grid-auto-columns: 1fr;
    }
  }
`

type Props = {
  
}

const BrandList: React.FC<Props> = () => {
  return (
    <BrandListStyled>
      <Wrapper>
        <div className="brand__container">
          <SubTitle>Marcas</SubTitle>
          <ul className="brand__grid">
            {brandListJson.map((item) => {
              return (
                <li key={item.id}>
                  <BrandItem
                    title={item.title}
                    image={item.image}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </Wrapper>
    </BrandListStyled>
  )
}

export default BrandList
