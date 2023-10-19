import { FC } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../sideComponents/Button/Button'
import Profile from '../Profile/Profile'
import { useAuth } from '../../hooks/useAuth'

import classes from './Header.module.scss'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { user, signOut } = useAuth()

  const logOut = () => {
    if (signOut) {
      localStorage.clear()
      signOut()
    }
  }
  return (
    <header className={classes.header}>
      <h1 hidden>RealWorld Blog</h1>
      <Link to={'/'} className={classes.link}>
        RealWorld Blog
      </Link>
      <div className={classes['actions-wrapper']}>
        {!user && (
          <>
            <Button style="ui" linkTo="./sign-in" replace>
              Sign In
            </Button>
            <Button style="success" linkTo="./sign-up" replace>
              Sign Up
            </Button>
          </>
        )}
        {user && (
          <>
            <Button linkTo="./new-article" style="creative">
              Create article
            </Button>
            <Profile user={user} linkTo="./profile" />
            <Button linkTo="./articles" onClick={() => logOut()}>
              Log Out
            </Button>
          </>
        )}
      </div>
    </header>
  )
}
export default Header
