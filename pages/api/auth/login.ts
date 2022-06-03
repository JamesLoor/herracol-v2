import type { NextApiRequest, NextApiResponse } from 'next'
import { LoginUser } from '@types'
import Users from '@models/userModel'
import validateEmail from '@lib/validateEmail'
import connectDB from '@lib/connectDB'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import cookie from "cookie"

type Data = {
  message?: string
  error?: string
  status?: string
  authToken?: string
}

connectDB()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch(req.method){
    case "POST":
      await login(req, res)
      break;

    default:
      res.status(405).json({ message: `No admitimos el metodo "${req.method}"` });
  }
}

async function login(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const userData: LoginUser = req.body
    const { email, password } = userData

    if(!email || !password) {
      throw { status: 400, message: 'Los campos son requeridos'}
    }

    if(!validateEmail(email)) {
      throw { status: 400, message: 'Correo invalido'}
    }

    const user = await Users.findOne({ email })
    const isMatchPassword = user === null
      ? false
      : await bcrypt.compare(password, user.password)
    if(!(user && isMatchPassword)) {
      throw { status: 401, message: 'Usuario y contraseña inválidos.'}
    }

    //  ¡Secret debe ir en variables de entorno!
    const secret = '0e900be1-0ac5-4e6a-bf4b-38f8b21a189b'
    const payload = {
      id: user._id,
      email: user.email
    }
    const token = jwt.sign(payload, secret, { expiresIn: '1h' })
    res
      .setHeader('Set-Cookie', cookie.serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 60 * 60,
        path: '/'
      }))
      .json({
        message: '¡Ingreso exitoso!.'
      })
  } catch(error: any){
      return res.status(error.status || 500).json({message: error.message})
  }
}