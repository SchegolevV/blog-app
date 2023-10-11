import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

interface ButtonProps {
  className: 'signIn' | 'signUp' | 'logOut' | 'createArticle'
  onClick?: () => void
  children: string
  linkTo: string
  replace?: boolean
}

const Button: FC<ButtonProps> = ({ className, onClick, children, linkTo, replace }) => {
  return (
    <Link to={`${linkTo}`} replace={replace} className={`button ${className}`} onClick={onClick}>
      {children}
    </Link>
  )
}

export default Button
