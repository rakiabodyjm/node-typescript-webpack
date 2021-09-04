import { IsEmail, IsNotEmpty } from 'class-validator'
import { model, Schema } from 'mongoose'

export class UserType {
  @IsNotEmpty()
  first_name: string
  @IsNotEmpty()
  last_name: string
  @IsEmail()
  @IsNotEmpty()
  email: string
}
const UserSchema = new Schema<UserType>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
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

const User = model<UserType>('Users', UserSchema)
export default User
