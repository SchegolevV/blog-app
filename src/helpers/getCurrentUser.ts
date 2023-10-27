import { getUser } from '@/API/API'

import { getToken } from './getToken'

export const getCurrentUser = async () => {
  return await getUser(getToken() as string)
}
