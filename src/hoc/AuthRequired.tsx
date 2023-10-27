import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

interface AuthRequiredProps {
  children: React.ReactNode
}

const AuthRequired: FC<AuthRequiredProps> = ({ children }) => {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to={'/sign-in'} />
  }

  return children
}

export default AuthRequired
