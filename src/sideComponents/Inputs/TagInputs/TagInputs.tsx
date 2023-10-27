import { FC } from 'react'
import { useFieldArray, Control } from 'react-hook-form'

import Button from '@sideComponents/Button/Button'
import { IFormNames, IHookFormInputProps } from '@/Types/formTypes'

import classes from '../Inputs.module.scss'

interface TagCreatorProps extends Omit<IHookFormInputProps<IFormNames>, 'name'> {
  control: Control<IFormNames>
}

const TagCreator: FC<TagCreatorProps> = ({ control, register, registerOptions, formState }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'tagList',
    control,
  })

  const { errors } = formState

  // console.log(errors)

  return (
    <div>
      <label htmlFor="tagList" className={classes.input_label}>
        Tags
      </label>
      <ul className={classes.tag_list}>
        <div>
          {fields.map((field, index) => {
            return (
              <li key={field.id} className={classes.tag_input_wrapper}>
                <input
                  type="text"
                  {...register(`tagList.${index}.name` as const, registerOptions)}
                  className={`${classes.input} ${classes.tag_input} ${errors.tagList?.[index] && classes.error_border}`}
                />

                {index > 0 && (
                  <Button onClick={() => remove(index)} style="warning">
                    Delete
                  </Button>
                )}
              </li>
            )
          })}
        </div>

        <Button onClick={() => append({ name: '' })} style="ui">
          Add tag
        </Button>
      </ul>
    </div>
  )
}

export default TagCreator
