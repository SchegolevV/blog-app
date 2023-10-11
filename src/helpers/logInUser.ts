import { loginUser } from '../API/API'
import { IFormNames } from '../Types/formTypes'

export interface ILoginData {
  user: {
    email: string
    password: string
  }
}

export const logInUser = async (data: IFormNames) => {
  const { email, password } = data
  const requestParams: ILoginData = {
    user: {
      email: email,
      password: password,
    },
  }
  const body = await loginUser(requestParams)
  return body
}
