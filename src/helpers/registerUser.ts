import { registerNewUser } from '../API/API'
import { IFormNames, IRequestedUser } from '../Types/formTypes'

export const registerUser = async (data: IFormNames) => {
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
