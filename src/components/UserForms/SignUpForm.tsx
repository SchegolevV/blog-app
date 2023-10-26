import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { IFormNames } from '../../Types/formTypes'
import { setToken } from '../../helpers/setToken'
import { regCheckboxOptions, regEmailOptions, regPasswordOptions, regUsernameOptions } from '../../variables'
import FormInput from '../../sideComponents/Inputs/FormInput/FormInput'
import { registerNewUser } from '../../API/API'

import classes from './forms.module.scss'

const SignUpForm: FC = () => {
  const methods = useForm<IFormNames>()

  const { handleSubmit, register, formState, watch, setError } = methods

  const navigate = useNavigate()
  const { signIn } = useAuth()

  const onSubmit: SubmitHandler<IFormNames> = async (data) => {
    const response = await registerNewUser({ user: { ...data } })

    if (response?.errors) {
      let key: keyof IFormNames
      for (key in response.errors) {
        setError(key, { message: `${key} is already used` })
      }
    } else if (response && signIn) {
      setToken(response.user.token)
      signIn(response.user.token, () => navigate('../articles'))
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
      <FormInput
        className={classes.policy}
        name="checkbox"
        type="checkbox"
        formState={formState}
        register={register}
        registerOptions={regCheckboxOptions}
      >
        I agree to the processing of my personal information
      </FormInput>
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
