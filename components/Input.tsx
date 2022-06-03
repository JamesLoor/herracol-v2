import * as React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input<InputStyledType>`
  width: 100%;
  height: 42px;
  padding: 10px 20px;
  outline: none;
  font-size: 16px;
  line-height: 1em;
  background-color: ${({ theme }) => theme.colors.secundary};
  border: 1px solid ${({ error, theme }) => error ? theme.colors.error : theme.colors.stroke};
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`

type InputStyledType = {
  error?: any
}

interface FormikInputType extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  form: any
}

const Input: React.FC<FormikInputType> = ({ form, ...props }) => {
  const { name } = props
  const error = form.errors[name]

  return (
    <InputStyled
      error={error ?? false}
      onChange={form.handleChange}
      value={form.values[name]}
      { ...props }
    />
  )
}

export default Input