import { registerNewUser } from '../API'
import { ISignUp, IRequestedUser } from '../Types/types'

export const registerUser = async (data: ISignUp) => {
  const { username, email, password } = data
  const requestParams: IRequestedUser = {
    user: {
      username: username,
      email: email,
      password: password,
    },
  }
  const body = await registerNewUser(requestParams)
  return body
}
