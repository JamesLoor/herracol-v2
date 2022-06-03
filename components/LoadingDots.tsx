import * as React from 'react'
import styled from 'styled-components'

const LoadingDotsStyled = styled.span`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-content: center;
  align-items: center;
  gap: 4px;

  .dot {
    width: 100%;
    height: 100%;
    min-width: 10px;
    min-height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray};
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  .dot:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  .dot::nth-of-type(3) {
    animation-delay: 0.4s;
  }

  @keyframes blink {
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`

const LoadingDots: React.FC = () => {
  return (
    <LoadingDotsStyled>
      <span className="dot" key="dot_1" />
      <span className="dot" key="dot_2" />
      <span className="dot" key="dot_3" />
    </LoadingDotsStyled>
  )
}

export default LoadingDots
