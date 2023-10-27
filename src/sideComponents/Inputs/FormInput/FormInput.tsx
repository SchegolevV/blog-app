import { FC } from 'react'

import { IHookFormInputProps, IFormNames } from '@/Types/formTypes'

import classes from '../Inputs.module.scss'

export interface IFormInputProps extends IHookFormInputProps<IFormNames> {
  className?: string
  children: string
  textarea?: boolean
  disabled?: boolean
}

const FormInput: FC<IFormInputProps> = ({
  register,
  formState,
  children,
  name,
  registerOptions,
  type,
  className,
  textarea,
  disabled = false,
}) => {
  const { errors } = formState
  const InvalidClass = formState.errors[name] ? classes.invalid : ''

  if (type === 'checkbox') {
    return (
      <>
        <label className={className}>
          <input className={classes.checkbox} type="checkbox" {...register(name, registerOptions)} />
          <div className={classes.input_label}>{children}</div>
        </label>
        {errors[name] && <p className={classes.error_message}>{errors[name]?.message}</p>}
      </>
    )
  }
  return (
    <label className={className}>
      <div className={classes.input_label}>{children}</div>
      {(textarea && (
        <textarea
          className={`${classes.input} ${classes.form_input} ${InvalidClass}`}
          {...register(name, registerOptions)}
        />
      )) || (
        <input
          className={`${classes.input} ${classes.form_input} ${InvalidClass}`}
          type={type}
          {...register(name, registerOptions)}
          disabled={disabled}
        />
      )}
      {errors[name] && <p className={classes.error_message}>{errors[name]?.message}</p>}
    </label>
  )
}

export default FormInput
