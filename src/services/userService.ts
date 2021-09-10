import Users, { UserType } from '../schemas/User'
type GetAllUsers = {
  page: number
  limit: number
}

export const getAllUsers = async (params?: GetAllUsers) => {
  let page = 0
  let limit = 0
  if (params) {
    page = params.page
    limit = params.limit
  }
  console.log('page', page, 'limit', limit)
  return await Users.find({}, null, {
    skip: page * limit,
    limit: limit,
  })
    .then((res: UserType[]) => {
      return res
    })
    .catch((err) => {
      throw err
    })
}
