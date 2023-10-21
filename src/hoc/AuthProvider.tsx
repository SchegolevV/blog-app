import { FC, ReactNode, createContext, useState } from 'react'

import { getLocalUser } from '../helpers/getLocalUser'

interface AuthProviderProps {
  children: ReactNode
}

type TUser = {
  email: string
  username: string
  token: string
  image?: string
}

type TSignIn = (user: TUser, cb?: () => void) => void

type TSignOut = (cb?: () => void) => void

type valueType = {
  user: TUser | null
  signIn: TSignIn
  signOut: TSignOut
}

export const AuthContext = createContext<valueType | null>(null)

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const currentUser = getLocalUser()

  const [user, setUser] = useState<TUser | null>(currentUser)

  const signIn: TSignIn = (user, cb) => {
    setUser(user)
    cb ? cb() : null
  }
  const signOut: TSignOut = (cb) => {
    setUser(null)
    cb ? cb() : null
  }

  const value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
