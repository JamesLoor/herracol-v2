import { selectUi } from '@features/ui/uiSlice'
import useAppSelector from '@hooks/useAppSelector'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

const SidebarStyled = styled.nav`
  position: fixed;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  gap: 20px;
  width: 280px;
  top: 115px;
  height: calc(100vh - 115px);
  align-self: flex-end;
  padding: 30px 20px 20px 25px;
  box-shadow: ${({ theme }) => theme.colors.boxShadowRight};
  z-index: ${({ theme }) => theme.positions.sidebar};
  background-color: ${({ theme }) => theme.colors.secundary};

  .nav__header {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    gap: 10px;

    span {
      font-size: 14px;
      line-height: 1.25rem;
    }
  }

  .nav__list {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    gap: 16px;

    li {
      font-size: 20px;
      font-weight: 700;
      list-style: none;
    }
  }

  @media (min-width: 1024px) {
    top: 63px;
    height: calc(100vh - 63px);
  }
`

type Props = {}

const Sidebar: React.FC<Props> = () => {
  const { isSidebarOpen } = useAppSelector(selectUi)
  const links: {id: string, href: string, name: string}[] = []

  if(isSidebarOpen) {
    return (
      <SidebarStyled>
        <ul className="nav__list">
          {
            links.length
            ? links.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </li>
              )
            })
            : <li>Ocurrio un error</li>
          }
        </ul>
      </SidebarStyled>
    )
  }

  return null
}

export default Sidebar
