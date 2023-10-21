import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

import FormInput from '../../sideComponents/Inputs/FormInput/FormInput'
import { IArticle, IFormNames } from '../../Types/formTypes'
import { regTagOptions, regTextOptions, regTitleOptions } from '../../variables'
import TagCreator from '../../sideComponents/Inputs/TagInputs/TagInputs'
import { addNewArticle } from '../../helpers/addNewArticle'
import editArticle from '../../helpers/editArticle'

import classes from './forms.module.scss'

const ArticleForm: FC = () => {
  const navigate = useNavigate()
  const { edit, slug } = useParams()
  const { title, description, body, tagList } = useLoaderData() as IArticle

  const { handleSubmit, register, formState, control } = useForm<IFormNames>({
    defaultValues: {
      title: title,
      description: description,
      body: body,
      tagList: tagList.map((tag) => {
        return { name: tag }
      }),
    },
  })

  const onSubmit: SubmitHandler<IFormNames> = async (data) => {
    if (edit && slug) {
      await editArticle(data, slug)
      navigate(-1)
    } else {
      await addNewArticle(data)
      navigate('/')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes['article-form']}>
      <h2 className={classes.title}>{(edit && 'Edit article') || 'Create new article'}</h2>
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
        {(edit && 'Edit') || 'Send'}
      </button>
    </form>
  )
}

export default ArticleForm
