import * as React from 'react'
import styled from 'styled-components'
import type { NextPage } from 'next'
import Wrapper from '@components/Wrapper'

const HomeStyled = styled.div`
  h1 {
    font-size: 50px;
    font-weight: bold;
  }
`

type Props = {
  token?: string
}

const Home: NextPage<Props> = () => {
  return (
    <HomeStyled>
      <Wrapper>
        <h1>Hello</h1>
      </Wrapper>
    </HomeStyled>
  )
}

export default Home
