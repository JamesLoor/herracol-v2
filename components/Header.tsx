import * as React from 'react'
import styled from 'styled-components'
import Logo from '@components/Logo'
import SearchBar from '@components/SearchBar'
import Cart from '@components/icons/Cart'
import Heart from '@components/icons/Heart'
import User from '@components/icons/User'
import Menu from '@components/icons/Menu'
import ButtonIcon from '@components/ButtonIcon'
import Wrapper from '@components/Wrapper'
import useAppDispatch from '@hooks/useAppDispatch'
import { ModalView, openModal, setModalView, toggleSidebar } from '@features/ui/uiSlice'
import useAppSelector from '@hooks/useAppSelector'
import { selectAuth } from '@features/auth/authSlice'

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  z-index: ${({ theme }) => theme.positions.header};
  box-shadow: ${({ theme }) => theme.colors.boxShadowBottom};
  background-color: ${({ theme }) => theme.colors.primary};

  .header__container {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-areas:
      "logo buttonList"
      "input input";
    align-items: center;
    gap: 10px;
    padding: 14px 0;
  }

  .logo {
    grid-area: logo;
  }

  .button__list {
    grid-area: buttonList;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
  }

  .button__icon path {
    stroke: ${({ theme }) => theme.colors.secundary};
  }

  .searchBar {
    grid-area: input;
  }

  @media (min-width: 1024px) {
    .header__container {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        "logo input buttonList";
    }
  }
`

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isLogged } = useAppSelector(selectAuth)
  const id = React.useId()

  return (
    <HeaderStyled>
      <Wrapper>
        <div className="header__container">
          <Logo link="/" className="logo" />

          <SearchBar
            key={`${id}-header-searchbar`}
            className="searchBar"
          />

          <div className="button__list">
            <ButtonIcon className="button__icon button__cart" Icon={Cart} onClick={() => console.log('Click')} />
            <ButtonIcon className="button__icon button__fav" Icon={Heart} onClick={() => console.log('Click')} />
            {isLogged
              ? <div className="user__avatar">
                  0
                </div>
              : <ButtonIcon className="button__icon button__user" Icon={User} onClick={() => {
                  dispatch(openModal())
                  dispatch(setModalView(ModalView.loginView))
                }} />
            }
            <ButtonIcon Icon={Menu} className="button__icon menu" onClick={() => dispatch(toggleSidebar())} />
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
