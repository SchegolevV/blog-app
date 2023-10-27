import { FC, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { getUser } from '@/API/API'
import { useAuth } from '@/hooks/useAuth'
import { TUser } from '@/hooks/useUser'

import Header from '../Header/Header'

type contextType = { user: TUser | null }

const Layout: FC = () => {
  const [user, setUser] = useState<TUser | null>(null)
  const { token } = useAuth()
  useEffect(() => {
    if (token) {
      getUser(token).then((user) => {
        user ? setUser(user) : setUser(null)
      })
    } else {
      setUser(null)
    }
  }, [token])
  return (
    <>
      <div className="content-wrapper">
        <Header user={user} />
      </div>
      <main>
        <div className="content-wrapper">
          <Outlet context={{ user } satisfies contextType} />
        </div>
      </main>
    </>
  )
}

export default Layout
