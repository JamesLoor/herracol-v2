import styled from "styled-components"

const positions = {
  modal: 1100,
  header: 1000,
  sidebar: 900,
  controllers: 600,
  image: 500,
}

export const lightTheme = {
  colors: {
    primary: '#000000',
    accent: '#091254',
    secundary: '#FFFFFF',
    stroke: '#BDBDBD',
    gray: '#717171',
    overlay: 'rgb(0, 0, 0, 0.3)',
    error: '#FF6767',
    success: '#28A745',
    boxShadowBottom: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    boxShadowRight: 'rgba(0, 0, 0, 0.1) 10px 0px 15px -3px, rgba(0, 0, 0, 0.05) 4px 0px 6px -2px'
  },
  positions
}

export const darkTheme = {
  colors: {
    primary: '#FFFFFF',
    accent: '#E5CA44',
    secundary: '#091254',
    gray: '#717171',
    stroke: '#BDBDBD',
    boxShadowBottom: '0px 8px 24px 0px #00000021',
    boxShadowRight: 'rgba(0, 0, 0, 0.1) 10px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
  },
  positions
}

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};

  @media (min-width: 768px) {
    font-size: 45px;
  }

  @media (min-width: 1024px) {
    font-size: 60px;
  }
`

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`