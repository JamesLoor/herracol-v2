import * as React from 'react'
import styled from 'styled-components'
import type { NextPage } from 'next'
import Banner from '@components/Banner'
import FeaturedProducts from '@components/FeaturedProducts'
import PromoList from '@components/PromoList'
import NewProducts from '@components/NewProducts'
import BrandList from '@components/BrandList'
import Wrapper from '@components/Wrapper'
import CategoryCardList from '@components/CategoryCardList'
import productCategoryJson from '../data/productCategory.json'

const HomeStyled = styled.div`
  section {
    margin-bottom: 25px;
  }
`

type Props = {

}

const Home: NextPage<Props> = () => {
  return (
    <HomeStyled>
      <Banner />
      <section className="category__cards">
        <Wrapper>
          <CategoryCardList categoryList={productCategoryJson} />
        </Wrapper>
      </section>
      <FeaturedProducts />
      <PromoList />
      <NewProducts />
      <BrandList />
    </HomeStyled>
  )
}

export default Home
