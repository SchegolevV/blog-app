import { FC, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, Form } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { IFormNames } from '../../Types/formTypes'
import { regEmailOptions, regPasswordOptions, regUrlOptions, regUsernameOptions } from '../../variables'
import FormInput from '../../sideComponents/Inputs/FormInput/FormInput'
import { editUser } from '../../helpers/editUser'
import { getCurrentUser } from '../../helpers/getCurrentUser'
import { useSpin } from '../../hooks/useSpin'

import classes from './forms.module.scss'

const EditForm: FC = () => {
  const { loading, setLoading } = useSpin()
  const disabled = useMemo(() => loading, [loading])

  const { handleSubmit, register, formState, setError } = useForm<IFormNames>({
    defaultValues: async () => {
      setLoading(true)
      return getCurrentUser().then((user) => {
        setLoading(false)
        return user
      }) as Promise<IFormNames>
    },
  })
  console.log(disabled)
  // const { handleSubmit, register, formState, setError } = methods

  const { signIn: update } = useAuth()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IFormNames> = async (data) => {
    const response = await editUser(data)

    if (response?.errors) {
      let key: 'email' | 'username'
      for (key in response.errors) {
        setError(key, { message: `${key} ${response.errors[key]}` })
      }
    } else if (response && update) {
      localStorage.setItem('token', JSON.stringify(response.user))
      update(response.user.token, () => navigate('../articles'))
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={`${classes.form}`}>
      <h2 className={classes.title}>Edit Profile</h2>
      <FormInput
        name="username"
        register={register}
        registerOptions={regUsernameOptions}
        formState={formState}
        disabled={disabled}
      >
        Username
      </FormInput>
      <FormInput
        name="email"
        register={register}
        registerOptions={regEmailOptions}
        formState={formState}
        disabled={disabled}
      >
        Email address
      </FormInput>
      <FormInput
        name="password"
        type="password"
        register={register}
        registerOptions={regPasswordOptions}
        formState={formState}
        disabled={disabled}
      >
        New password
      </FormInput>
      <FormInput
        name="image"
        register={register}
        registerOptions={regUrlOptions}
        formState={formState}
        disabled={disabled}
      >
        Avatar image (url)
      </FormInput>
      <button type="submit" className={classes.submit} disabled={disabled}>
        Save
      </button>
    </Form>
  )
}

export default EditForm
