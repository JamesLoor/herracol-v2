import * as React from 'react'
import styled from 'styled-components'
import type { NextPage } from 'next'

const HomeStyled = styled.div`
  h1 {
    font-size: 50px;
    font-weight: bold;
  }
`

const Home: NextPage = () => {
  return (
    <HomeStyled>
      <h1>Hello</h1>
    </HomeStyled>
  )
}

export default Home
