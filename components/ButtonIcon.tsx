import { useRouter } from 'next/router'
import * as React from 'react'
import styled from 'styled-components'

const ButtonIconStyled = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-items: center;
  width: max-content;
`

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  href?: string
  width?: string
  onClick: () => void
}

const ButtonIcon: React.FC<Props> = ({ Icon, href, children, onClick, ...props }) => {
  const router = useRouter()
  const hasExternalLink = href?.startsWith("http") || href?.startsWith("mailto:") || href?.startsWith("tel:") || href?.startsWith("//")

  if(hasExternalLink) {
    return (
      <ButtonIconStyled onClick={() => window.open(href)} {...props}>
        <Icon />
      </ButtonIconStyled>
    )
  }

  if(href) {
    return (
      <ButtonIconStyled onClick={() => router.push(href)} {...props}>
        <Icon />
      </ButtonIconStyled>
    )
  }

  return (
    <ButtonIconStyled onClick={onClick} {...props}>
      <Icon />
    </ButtonIconStyled>
  )
}

export default ButtonIcon
