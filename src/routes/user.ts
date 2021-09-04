import { classToPlain, plainToClass } from 'class-transformer'
import { Request, Response, Router } from 'express'
import { Error } from 'mongoose'
import { UserType } from '../schemas/User'
import userService from '../services/userService'

const userRoutes = Router()
userRoutes.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userService.findAllUsers()
    res.status(200).send([...users])
  } catch (error) {
    const err = error as Error
    const errMessage = err?.message
    res.status(400).send({
      message: errMessage || 'Internal Server Error',
    })
  }
})

userRoutes.post('/', async (req, res) => {
  const User = plainToClass(UserType, req.body)

  req.body as UserType
  res.status(200).send({
    ...classToPlain(User),
  })
})

userRoutes.get('/user-tangina', (req, res) => {
  let string = ''
  for (let i = 0; i < 69; i++) {
    string += `😘`
  }

  res.status(200).send(string)
})

export default userRoutes
