import { useContext } from 'react'

import { AuthContext, valueType } from '../hoc/AuthProvider'

export const useAuth = () => useContext(AuthContext) as valueType
