import User, { UserType } from '../schemas/User'
import { classToPlain } from 'class-transformer'

class UserService {
  async findAllUsers(): Promise<UserType[]> {
    const users = await User.find()
    return users
  }
  async addUser(params: UserType): Promise<UserType> {
    const user = new User({
      email: params.email,
      first_name: params.first_name,
      last_name: params.last_name,
    })
    return await user.save()
  }
}

export default classToPlain(UserService)
