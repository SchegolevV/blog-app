import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import FormInput from '../../sideComponents/Inputs/FormInput/FormInput'
import { IFormNames } from '../../Types/formTypes'
import { regTagOptions, regTextOptions, regTitleOptions } from '../../assets/variables'
import TagCreator from '../../sideComponents/Inputs/TagInputs/TagInputs'
import { addNewArticle } from '../../helpers/addNewArticle'

import classes from './forms.module.scss'

const ArticleForm: FC = () => {
  const { handleSubmit, register, formState, control } = useForm<IFormNames>({
    defaultValues: {
      title: '',
      description: '',
      body: '',
      tagList: [{ name: '' }],
    },
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IFormNames> = async (data) => {
    const res = await addNewArticle(data)
    console.log(res)
    navigate('../articles')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes['article-form']}>
      <h2 className={classes.title}>Create new article</h2>
      <FormInput name="title" register={register} registerOptions={regTitleOptions} formState={formState}>
        Title
      </FormInput>
      <FormInput name="description" register={register} registerOptions={regTitleOptions} formState={formState}>
        Short description
      </FormInput>
      <FormInput name="body" register={register} registerOptions={regTextOptions} formState={formState} textarea>
        Text
      </FormInput>
      <TagCreator control={control} register={register} registerOptions={regTagOptions} formState={formState} />
      <button type="submit" className={classes.submit}>
        Send
      </button>
    </form>
  )
}

export default ArticleForm
