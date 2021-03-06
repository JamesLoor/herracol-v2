export declare type User = {
  name: string,
  email: string,
  password: string,
  role: string,
  root: boolean,
  avatar: string
}

export declare type RegisterUser = {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string
}

export declare type LoginUser = {
  email: string,
  password: string
}

export declare type ProductCategory = {
  id: string
  type: string
  name: string
  url: string
  text: string
  image: string
}