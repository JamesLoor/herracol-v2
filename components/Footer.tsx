import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '@components/Wrapper'

const FooterStyled = styled.div`
  /*  */
`

type Props = {
  
}

const Footer: React.FC<Props> = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <h1>Footer</h1>
      </Wrapper>
    </FooterStyled>
  )
}

export default Footer
