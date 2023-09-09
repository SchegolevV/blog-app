import { FC, ReactNode, createContext, useState } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

type TUser = {
  status: boolean
  key?: string
}

type TSignIn = (user: TUser, cb: () => void) => void

type TSignOut = (cb: () => void) => void

type valueType = {
  user: TUser | null
  signIn: TSignIn
  signOut: TSignOut
}

export const AuthContext = createContext<valueType | null>(null)

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<TUser | null>({ status: false })

  const signIn: TSignIn = (user, cb) => {
    setUser(user)
    cb()
  }
  const signOut: TSignOut = (cb) => {
    setUser(null)
    cb()
  }

  const value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
