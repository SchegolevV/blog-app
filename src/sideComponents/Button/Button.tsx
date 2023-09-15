import { FC } from 'react'
import './Button.scss'

interface ButtonProps {
  type: 'signIn' | 'signUp' | 'logOut'
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ type, onClick }) => {
  const name = type === 'signIn' ? 'Sign In' : type === 'signUp' ? 'Sign Up' : 'Log Out'
  return (
    <button className={type} onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
