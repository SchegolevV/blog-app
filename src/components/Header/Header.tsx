import { FC } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../sideComponents/Button/Button'

import classes from './Header.module.scss'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={classes.header}>
      <Link to={'/'} className={classes.link}>
        RealWorld Blog
      </Link>
      <div className={classes.buttons}>
        <Button type="signIn" />
        <Button type="signUp" />
      </div>
    </header>
  )
}

export default Header
