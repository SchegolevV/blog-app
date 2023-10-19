import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

interface ButtonProps {
  style?: 'warning' | 'success' | 'ui' | 'creative'
  onClick?: () => void
  children: string
  linkTo?: string
  replace?: boolean
}

const Button: FC<ButtonProps> = ({ style, onClick, children, linkTo, replace }) => {
  if (linkTo) {
    return (
      <Link to={`${linkTo}`} replace={replace} className={`button ${style}`} onClick={onClick}>
        {children}
      </Link>
    )
  } else {
    return (
      <button type="button" className={`button ${style}`} onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default Button
