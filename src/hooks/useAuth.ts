import { useContext } from 'react'

import { AuthContext } from '../hoc/AuthProvider'

export const useAuth = () => {
  const value = useContext(AuthContext)
  const user = value?.user
  const signIn = value?.signIn
  const signOut = value?.signOut

  return { user, signIn, signOut }
}
