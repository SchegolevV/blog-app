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
      <Link to={'/'} className={classes.link}>
        RealWorld Blog
      </Link>
      <div className={classes['actions-wrapper']}>
        {!user && (
          <>
            <Button className="signIn" linkTo="./sign-in" replace>
              Sign In
            </Button>
            <Button className="signUp" linkTo="./sign-up" replace>
              Sign Up
            </Button>
          </>
        )}
        {user && (
          <>
            <Button linkTo="./new-article" className="createArticle">
              Create article
            </Button>
            <Profile user={user} linkTo="./profile" />
            <Button className="logOut" linkTo="./articles" onClick={() => logOut()}>
              Log Out
            </Button>
          </>
        )}
      </div>
    </header>
  )
}
export default Header
