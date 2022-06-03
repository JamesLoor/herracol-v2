import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcrypt"
import Users from '@models/userModel'
import connectDB from '@lib/connectDB'
import validateEmail from '@lib/validateEmail'
import { RegisterUser } from '@types'

type Data = {
  message?: string
  newUser?: any
}

connectDB()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch(req.method) {
    case "POST":
      await register(req, res)
      break

    default:
      res.status(405).json({ message: `No admitimos "${req.method}"` });
  }
}

async function register(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const userData: RegisterUser = req.body
    const { name, email, password } = userData

    const errorMessage = validate(userData)
    if(errorMessage) {
      throw { status: 400, message: errorMessage }
    }

    const user = await Users.findOne({ email })
    if(user) {
      throw { status: 400, message: "El correo ya existe." }
    }

    const passwordHash = await bcrypt.hash(password, 12)
    const newUser = new Users({
      name,
      email,
      password: passwordHash,
    })

    await newUser.save()
    res.status(200).json({message: "¡Registro exitoso!", newUser})
  } catch(error: any) {
    res.status(error.status).json({message: error.message})
  }
}

function validate(data: RegisterUser) {
  const { name, email, password, passwordConfirmation } = data
  if(!name || !email || !password || !passwordConfirmation) {
    return "Los campos son requeridos."
  }

  if(!validateEmail(email)) {
    return "Correo invalido."
  }

  if(password.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres."
  }

  if(password !== passwordConfirmation) {
    return "Las contraseñas no coinciden."
  }
}
