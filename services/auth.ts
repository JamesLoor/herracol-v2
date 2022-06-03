import genService from '@lib/genService'

const register = (userData: {name: string, email: string, password: string, passwordConfirmation: string}) => {
  return genService({
    method: "post",
    url: "/api/auth/register",
    data: userData
  })
}

const login = (userCredential: { email: string, password: string }) => {
  return genService({
    method: "post",
    url: "/api/auth/login",
    data: userCredential
  })
}

const authService = {
  register,
  login,
}

export default authService
