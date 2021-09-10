import { IsEmail, IsNotEmpty } from 'class-validator'
import { model, Schema } from 'mongoose'

export class UserType {
  first_name: string
  last_name: string
  email: string
}
const UserSchema = new Schema<UserType>(
  {
    first_name: {
      type: String,
      required: true,
      minLength: 3,
    },
    last_name: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      index: true,
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    autoIndex: true,
  },
)

const Users = model<UserType>('Users', UserSchema)
export default Users
