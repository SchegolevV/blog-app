import { FC } from 'react'
import './Button.scss'

interface ButtonProps {
  type: 'signIn' | 'signUp' | 'logOut'
}

const Button: FC<ButtonProps> = ({ type }) => {
  const name = type === 'signIn' ? 'Sign In' : type === 'signUp' ? 'Sign Up' : 'Log Out'
  return <button className={type}>{name}</button>
}

export default Button
