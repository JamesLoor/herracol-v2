import * as React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import ButtonIcon from '@components/ButtonIcon'
import Close from '@components/icons/Close'

const ModalStyled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: ${({ theme }) => theme.positions.modal};

  .box__container {
    display: grid;
    width: 100%;
    max-width: 418px;
    height: max-content;
    background-color: ${({ theme }) => theme.colors.secundary};
    position: relative;
    padding: 60px 54px;
  }

  .icon__close {
    position: absolute;
    top: 25px;
    right: 25px;
  }

  @media (min-width: 768px) {
    .box__container {
      min-width: 418px;
    }
  }
`

type Props = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<Props> = ({ children, isOpen, onClose  }) => {
  const handleKey = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    }, [onClose])

  React.useEffect(() => {
    if(isOpen) {
      window.addEventListener('keydown', handleKey)
    }

    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey, isOpen])

  const element = (
    <ModalStyled>
      <div className="box__container">
        <ButtonIcon
          className="icon__close"
          Icon={Close}
          onClick={() => {
            onClose()
          }}
        />

        {children}
      </div>
    </ModalStyled>
  )

  if(isOpen) {
    return createPortal(element, document.getElementById("modalRoot") as HTMLElement)
  }

  return null
}

export default Modal
