import * as React from 'react'
import styled from 'styled-components'
import useAppDispatch from '@hooks/useAppDispatch'
import useAppSelector from '@hooks/useAppSelector'
import { selectAuth, registerUser } from '@features/auth/authSlice'
import { RegisterUser } from '@types'
import { useFormik } from 'formik'
import LogoHerracol from '@components/icons/LogoHerracol'
import Input from '@components/Input'
import Button from '@components/Button'
import { ModalView, setModalView } from '@features/ui/uiSlice'
import LoadingDots from '@components/LoadingDots'

const RegisterStyled = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  align-self: center;
  gap: 15px;

  .logo {
    justify-self: center;
    margin-bottom: 10px;
  }

  .errors {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.error};
  }

  .success {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.success}
  }

  .form {
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    gap: 15px;
  }

  .links {
    text-align: center;

    button {
      outline: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const Register: React.FC = () => {
  const dispatch = useAppDispatch()
  const { error, success, message, isLoading } = useAppSelector(selectAuth)
  const initialValues: RegisterUser = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  }
  const onSubmit = async (formValues: RegisterUser) => {
    dispatch(registerUser(formValues))
      .then((res) => {
        if(!res.type.includes('rejected')) {
          setTimeout(() => {
            dispatch(setModalView(ModalView.loginView))
          }, 1000)
        }
      })
  }
  const formik = useFormik({ initialValues, onSubmit })

  const notify = (success: boolean, error: boolean, message: string) => {
    if(error) return <span className="errors">{message}</span>
    if(success) return <span className="success">{message}</span>
    return null
  }

  return (
    <RegisterStyled>
      <LogoHerracol width="82" height="80" className="logo" />

      {notify(success, error, message)}

      <form onSubmit={formik.handleSubmit} className="form">
        <Input form={formik} name="name" placeholder="Nombres" />
        <Input form={formik} name="email" placeholder="Email" />
        <Input form={formik} name="password" placeholder="Contraseña" type="password" />
        <Input form={formik} name="passwordConfirmation" placeholder="Confirmar contraseña" type="password" />
        <Button type="submit" width="100%">{isLoading ? <LoadingDots /> : "Enviar"}</Button>
      </form>

      <div className="links">
        <p>Ya tienes una cuenta?&nbsp;
          <button onClick={() => dispatch(setModalView(ModalView.loginView))}>
            Iniciar sesión
          </button>
        </p>
      </div>
    </RegisterStyled>
  )
}

export default Register
