import * as React from 'react'
import styled from 'styled-components'
import Search from '@components/icons/Search'

const SearchBarStyled = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr max-content;
  height: 40px;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.secundary};
  .search__input {
    width: 100%;
    height: 20px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`

type Props = {
  className?: string
}

const SearchBar: React.FC<Props> = ({ ...props }) => {
  return (
    <SearchBarStyled {...props}>
      <input className="search__input" placeholder="Buscar..." type="text" />
      <Search className="search__icon" width="20" height="20" />
    </SearchBarStyled>
  )
}

export default SearchBar
