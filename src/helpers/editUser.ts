import { editCurrentUser } from '../API/API'
import { IFormNames } from '../Types/formTypes'

import { getStorageItem } from './getStorageItem'

interface IRequested {
  user: {
    username: string
    email: string
    password: string
    image: string
  }
}

export const editUser = async (data: IFormNames) => {
  const { username, email, password, image } = data
  const requestBody: IRequested = {
    user: {
      username: username,
      email: email,
      password: password,
      image: image,
    },
  }
  const body = await editCurrentUser(requestBody, getStorageItem('currentUser').token)

  return body
}
