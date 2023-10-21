import { editCurrentUser } from '../API/API'
import { IFormNames } from '../Types/formTypes'

import { getLocalUser } from './getLocalUser'

export const editUser = async (data: IFormNames) => {
  return await editCurrentUser({ user: { ...data } }, getLocalUser().token)
}
