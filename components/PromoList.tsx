import { SubTitle } from '@config/themeConfig'
import * as React from 'react'
import styled from 'styled-components'
import promotion from '../data/promotions.json'
import PromoItem from './PromoItem'
import Wrapper from './Wrapper'

const PromoListStyled = styled.section`
  margin-bottom: 25px;

  .promoList__container {
    display: grid;
    gap: 10px;
  }

  .promoList__grid {
    display: grid;
    gap: 16px;

    li {
      list-style: none;
      display: block;
    }
  }

  @media (min-width: 768px) {
    .promoList__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

const PromoList: React.FC = () => {
  return (
    <PromoListStyled>
      <Wrapper>
        <div className="promoList__container">
          <SubTitle>Recomendaciones</SubTitle>
          <ul className="promoList__grid">
            {promotion.map((promo) => {
              return (
                <li key={promo.id}>
                  <PromoItem
                    id={promo.id}
                    image={promo.image}
                    title={promo.title}
                    description={promo.description}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </Wrapper>
    </PromoListStyled>
  )
}

export default PromoList
