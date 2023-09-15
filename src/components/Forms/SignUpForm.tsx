import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { registerUser } from '../../helpers/registerUser'
import { ISignUp } from '../../Types/types'
import { regEmailOptions, regPasswordOptions, regUsernameOptions } from '../../assets/variables'

import classes from './forms.module.scss'
import FormInput from './FormInput'

const SignUpForm: FC = () => {
  const methods = useForm<ISignUp>()

  const { handleSubmit, register, formState, watch, setError } = methods

  const navigate = useNavigate()
  const { signIn } = useAuth()

  const onSubmit: SubmitHandler<ISignUp> = async (data) => {
    const response = await registerUser(data)
    if (response?.errors) {
      let key: keyof ISignUp
      for (key in response.errors) {
        setError(key, { message: `${key} is already used` })
      }
    } else if (response && signIn) {
      localStorage.setItem('currentUser', JSON.stringify(response.user))
      signIn(response.user, () => navigate('../articles'))
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <h2 className={classes.title}>Create new account</h2>
      <FormInput name="username" register={register} formState={formState} registerOptions={regUsernameOptions}>
        Username
      </FormInput>

      <FormInput name="email" register={register} formState={formState} registerOptions={regEmailOptions}>
        Email address
      </FormInput>

      <FormInput
        name="password"
        type="password"
        register={register}
        formState={formState}
        registerOptions={regPasswordOptions}
      >
        Password
      </FormInput>

      <FormInput
        name="password_repeat"
        type="password"
        register={register}
        formState={formState}
        registerOptions={{
          validate: (value) => value === watch('password') || 'Repeat password correctly',
        }}
      >
        Repeat password
      </FormInput>

      <div className={classes.divider} />
      <label className={classes.policy}>
        <input type="checkbox" required />
        <span>I agree to the processing of my personal information</span>
      </label>
      <button type="submit" className={classes.submit}>
        Create
      </button>
      <span className={classes.out}>
        Already have an account?
        <Link to="../sign-in" className={classes['link-out']}>
          Sign In.
        </Link>
      </span>
    </form>
  )
}

export default SignUpForm
