import * as React from 'react'
import styled from 'styled-components'
import type { NextPage } from 'next'
import Banner from '@components/Banner'
import FeaturedProducts from '@components/FeaturedProducts'
import PromoList from '@components/PromoList'
import NewProducts from '@components/NewProducts'
import BrandList from '@components/BrandList'

const HomeStyled = styled.div`

`

type Props = {

}

const Home: NextPage<Props> = () => {
  return (
    <HomeStyled>
      <Banner />
      <FeaturedProducts />
      <PromoList />
      <NewProducts />
      <BrandList />
    </HomeStyled>
  )
}

export default Home
