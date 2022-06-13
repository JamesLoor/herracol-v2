import { useRouter } from 'next/router'
import * as React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button<Props>`
  display: grid;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  height: 42px;
  padding: 10px 25px;
  transition: background-color .3s;
  box-shadow: 0px 4px 8px 0px rgba(0, 49, 16, 0.35);
  color: ${({ theme }) => theme.colors.secundary};
  width: ${({ width }) => width ? `${width}` : 'max-content'};
  background-color: ${({ theme }) => theme.colors.accent};
  line-height: 1em;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  width?: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({ href, children, onClick, ...props }) => {
  const router = useRouter()
  const hasExternalLink = href?.startsWith("http") || href?.startsWith("mailto:") || href?.startsWith("tel:") || href?.startsWith("//")

  if(hasExternalLink) {
    return (
      <ButtonStyled onClick={() => window.open(href)} {...props}>
        {children}
      </ButtonStyled>
    )
  }

  if(href) {
    return (
      <ButtonStyled onClick={() => router.push(href)} {...props}>
        {children}
      </ButtonStyled>
    )
  }

  return (
    <ButtonStyled onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  )
}

export default Button
