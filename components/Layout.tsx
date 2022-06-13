import * as React from 'react'
import styled from 'styled-components'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import Modal from './Modal'
import useAppDispatch from '@hooks/useAppDispatch'
import useAppSelector from '@hooks/useAppSelector'
import Register from '@components/auth/Register'
import Login from '@components/auth/Login'
import ForgotPassword from '@components/auth/ForgotPassword'
import { closeModal, ModalView, selectUi } from '@features/ui/uiSlice'

const LayoutStyled = styled.div`
  main {
    padding-top: 121px;
  }

  @media (min-width: 1024px) {
    main {
      padding-top: 71px;
    }
  }
`

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { isModalOpen, modalView } = useAppSelector(selectUi)

  return (
    <>
      <LayoutStyled>
        <Header />
        <Sidebar />
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </LayoutStyled>

      <Modal
        isOpen={isModalOpen}
        onClose={() => dispatch(closeModal())}
      >
        {modalView === ModalView.loginView && <Login />}
        {modalView === ModalView.registerView && <Register />}
        {modalView === ModalView.forgotPasswordView && <ForgotPassword />}
      </Modal>
    </>

  )
}

export default Layout
