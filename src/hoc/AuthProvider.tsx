import { FC, ReactNode, createContext, useState, useCallback } from 'react'

import { getToken } from '../helpers/getToken'
interface AuthProviderProps {
  children: ReactNode
}

type TSignIn = (token: string, cb?: () => void) => void

type TSignOut = (cb?: () => void) => void

export type valueType = {
  token: string | null
  signIn: TSignIn
  signOut: TSignOut
}

export const AuthContext = createContext<valueType | null>(null)

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const currentToken = getToken()

  const [token, setToken] = useState<string | null>(currentToken)

  // useEffect(() => {
  //   setNewToken(token as string)
  // }, [token])

  const signIn: TSignIn = useCallback((token, cb) => {
    setToken(token)
    cb ? cb() : null
  }, [])

  const signOut: TSignOut = useCallback((cb) => {
    setToken(null)
    cb ? cb() : null
  }, [])

  const value = { token, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
