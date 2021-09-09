import { classToPlain, plainToClass } from 'class-transformer'
import { Router } from 'express'
import { getAllUsers } from '../services/userService'

const userRoutes = Router()

userRoutes.get('/', async function (req, res) {
  const users = await getAllUsers()
  res.status(200).send({
    users,
  })
})

export default userRoutes
