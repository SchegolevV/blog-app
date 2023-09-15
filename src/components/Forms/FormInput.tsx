import { FC } from 'react'
// import { FormState } from 'react-hook-form'

import { IFormInputProps } from '../../Types/types'

import classes from './forms.module.scss'

const FormInput: FC<IFormInputProps> = ({ register, formState, children, name, registerOptions, type }) => {
  const { errors } = formState
  const InvalidClass = formState.errors[name] ? classes.invalid : ''

  return (
    <label>
      <div className={classes['input-label']}>{children}</div>
      <input className={`${classes.input} ${InvalidClass}`} type={type} {...register(name, registerOptions)} />
      {errors[name] && <p className={classes['error-message']}>{errors[name]?.message}</p>}
    </label>
  )
}

export default FormInput
