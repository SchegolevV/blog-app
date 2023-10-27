import { editCurrentUser } from '@/API/API'
import { IFormNames } from '@/Types/formTypes'

import { getToken } from './getToken'

export const editUser = async (data: IFormNames) => {
  const body = await editCurrentUser({ user: { ...data } }, getToken() as string)
  return body
}
