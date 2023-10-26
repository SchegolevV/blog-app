import { useOutletContext } from 'react-router-dom'

export type TUser = {
  email: string
  username: string
  token: string
  image?: string
}

export const useUser = () => {
  return useOutletContext<{ user: TUser }>()
}
