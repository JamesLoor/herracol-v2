import * as React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import LogoHerracol from '@components/icons/LogoHerracol'
import Input from '@components/Input'
import Button from '@components/Button'
import useAppDispatch from '@hooks/useAppDispatch'
import { loginUser, selectAuth } from '@features/auth/authSlice'
import { LoginUser } from '@types'
import { ModalView, setModalView } from '@features/ui/uiSlice'
import useAppSelector from '@hooks/useAppSelector'
import LoadingDots from '@components/LoadingDots'

const LoginStyled = styled.div`
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

const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const { error, success, message, isLoading } = useAppSelector(selectAuth)
  const initialValues: LoginUser = { email: "", password: "" }
  const onSubmit = async (formValues: LoginUser, action: any) => {
    dispatch(loginUser(formValues))
      .then((res) => {
        if(!res.type.includes('rejected')) {
          action.resetForm()
          // window.location.reload()
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
    <LoginStyled>
      <LogoHerracol width="82" height="80" className="logo" />

      {notify(success, error, message)}

      <form onSubmit={formik.handleSubmit} className="form">
        <Input form={formik} name="email" placeholder="Email" />
        <Input form={formik} name="password" placeholder="Contraseña" type="password" />
        <Button type="submit" width="100%">{isLoading ? <LoadingDots /> : "Iniciar sesión"}</Button>
      </form>

      <div className="links">
        <button onClick={() => dispatch(setModalView(ModalView.registerView))}>
          Registrarme
        </button>
        &nbsp;|&nbsp;
        <button onClick={() => dispatch(setModalView(ModalView.forgotPasswordView))}>
          Olvide la contraseña
        </button>
      </div>
    </LoginStyled>
  )
}

export default Login
