import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../../sideComponents/Button/Button'
import { useAuth } from '../../hooks/useAuth'

import classes from './Header.module.scss'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { user, signOut } = useAuth()

  const navigate = useNavigate()

  const logOut = () => {
    if (signOut) {
      localStorage.clear()
      signOut(() => navigate('../articles'))
    }
  }
  return (
    <header className={classes.header}>
      <Link to={'/'} className={classes.link}>
        RealWorld Blog
      </Link>
      <div className={classes['actions-wrapper']}>
        {!user && (
          <>
            <Button type="signIn" onClick={() => navigate('sign-in')} />
            <Button type="signUp" onClick={() => navigate('sign-up')} />
          </>
        )}
        {user && (
          <>
            <Button type="logOut" onClick={() => logOut()} />
          </>
        )}
      </div>
    </header>
  )
}

export default Header
