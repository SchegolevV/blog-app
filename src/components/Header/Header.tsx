import { FC } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'
import { TUser } from '@/hooks/useUser'
import Button from '@/sideComponents/Button/Button'

import Profile from '../Profile/Profile'

import classes from './Header.module.scss'

interface HeaderProps {
  user: TUser | null
}

const Header: FC<HeaderProps> = ({ user }) => {
  const { signOut } = useAuth()

  const logOut = () => {
    localStorage.clear()
    signOut()
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
