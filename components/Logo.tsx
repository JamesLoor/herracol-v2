import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import LogoHerracol from '@components/icons/LogoHerracol'

const LogoStyled = styled.div`
  /*  */
  a {
    display: block;
    width: max-content;
  }
`

type Props = {
  link: string
  className?: string
}

const Logo: React.FC<Props> = ({ link, ...props }) => {
  return (
    <LogoStyled {...props}>
      <Link href={link}>
        <a>
          <LogoHerracol />
        </a>
      </Link>
    </LogoStyled>
  )
}

export default Logo
