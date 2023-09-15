import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { ISignUp } from '../../Types/types'
import { regEmailOptions, regPasswordOptions } from '../../assets/variables'
import { useAuth } from '../../hooks/useAuth'
import { logInUser } from '../../helpers/logInUser'

import FormInput from './FormInput'
import classes from './forms.module.scss'

const SignInForm: FC = () => {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const { handleSubmit, register, formState, setError } = useForm<ISignUp>()

  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    const response = await logInUser(data)
    if (response?.errors) {
      setError('email', { message: `Email or password is invalid` })
    } else if (response && signIn) {
      window.localStorage.setItem('currentUser', JSON.stringify(response.user))
      signIn(response.user, () => navigate('../articles'))
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <h2 className={classes.title}>Sign-In</h2>
      <FormInput name="email" formState={formState} register={register} registerOptions={regEmailOptions}>
        Email
      </FormInput>
      <FormInput
        name="password"
        type="password"
        formState={formState}
        register={register}
        registerOptions={regPasswordOptions}
      >
        Password
      </FormInput>
      <button type="submit" className={classes.submit}>
        Login
      </button>
      <span className={classes.out}>
        Don’t have an account?
        <Link to="../sign-up" className={classes['link-out']}>
          Sign Up.
        </Link>
      </span>
    </form>
  )
}

export default SignInForm
