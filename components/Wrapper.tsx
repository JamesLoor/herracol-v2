import * as React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
  padding: 0 25px;
`

type Props = {
  children: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children, ...props }) => {
  return (
    <WrapperStyled {...props}>{children}</WrapperStyled>
  )
}

export default Wrapper
