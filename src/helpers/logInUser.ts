import { loginUser } from '../API'
import { ILoginData, ISignUp } from '../Types/types'

export const logInUser = async (data: ISignUp) => {
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
