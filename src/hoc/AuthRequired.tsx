import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

interface AuthRequiredProps {
  children: React.ReactNode
}

const AuthRequired: FC<AuthRequiredProps> = ({ children }) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to={'/sign-in'} />
  } else {
    return children
  }
}

export default AuthRequired
