import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, Form } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import { IFormNames } from '../../Types/formTypes'
import { regEmailOptions, regPasswordOptions, regUrlOptions, regUsernameOptions } from '../../assets/variables'
import FormInput from '../../sideComponents/Inputs/FormInput/FormInput'
import { getStorageItem } from '../../helpers/getStorageItem'
import { editUser } from '../../helpers/editUser'

import classes from './forms.module.scss'

const EditForm: FC = () => {
  const methods = useForm<IFormNames>({
    defaultValues: {
      username: getStorageItem('currentUser').username,
      email: getStorageItem('currentUser').email,
      image: getStorageItem('currentUser').image,
    },
  })
  const { handleSubmit, register, formState, setError } = methods

  const { signIn: update } = useAuth()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IFormNames> = async (data) => {
    const response = await editUser(data)
    if (response?.errors) {
      for (const key in response.errors) {
        setError(key, { message: `${key} ${response.errors[key]}` })
      }
    } else if (response && update) {
      localStorage.setItem('currentUser', JSON.stringify(response.user))
      update(response.user, () => navigate('../articles'))
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <h2 className={classes.title}>Edit Profile</h2>
      <FormInput name="username" register={register} registerOptions={regUsernameOptions} formState={formState}>
        Username
      </FormInput>
      <FormInput name="email" register={register} registerOptions={regEmailOptions} formState={formState}>
        Email address
      </FormInput>
      <FormInput
        name="password"
        type="password"
        register={register}
        registerOptions={regPasswordOptions}
        formState={formState}
      >
        New password
      </FormInput>
      <FormInput name="image" register={register} registerOptions={regUrlOptions} formState={formState}>
        Avatar image (url)
      </FormInput>
      <button type="submit" className={classes.submit}>
        Save
      </button>
    </Form>
  )
}

export default EditForm
