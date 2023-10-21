import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, Form, useNavigate } from 'react-router-dom'

import { IFormNames } from '../../Types/formTypes'
import { regEmailOptions, regPasswordOptions } from '../../variables'
import { useAuth } from '../../hooks/useAuth'
import FormInput from '../../sideComponents/Inputs/FormInput/FormInput'
import { loginUser } from '../../API/API'

import classes from './forms.module.scss'

const SignInForm: FC = () => {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const { handleSubmit, register, formState, setError } = useForm<IFormNames>()

  const onSubmit: SubmitHandler<IFormNames> = async (data) => {
    const response = await loginUser({ user: { ...data } })
    if (response?.errors) {
      setError('email', { message: `Email or password is invalid` })
    } else if (response && signIn) {
      localStorage.setItem('currentUser', JSON.stringify(response.user))
      signIn(response.user, () => navigate('../articles', { replace: true }))
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={classes.form} method="post">
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
    </Form>
  )
}

export default SignInForm
