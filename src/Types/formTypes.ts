import { UseFormRegister, RegisterOptions, FormState, FieldValues } from 'react-hook-form'
import { HTMLInputTypeAttribute } from 'react'

export interface IHookFormInputProps<T extends FieldValues> {
  register: UseFormRegister<T>
  registerOptions?: RegisterOptions
  formState: FormState<T>
  name: keyof T
  type?: HTMLInputTypeAttribute
}

export interface IFormNames {
  username: string
  checkbox: string
  email: string
  password: string
  password_repeat: string
  image: string
  title: string
  description: string
  body: string
  tagList: {
    name: string
  }[]
}

export type IAuthor = {
  username: string
  image: string
  following: boolean
}

export type IArticle = {
  slug: string
  title: string
  description: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: string[]
  favorited: boolean
  favoritesCount: number
  author: IAuthor
}

export type IArticlesData = {
  articles: IArticle[]
  articlesCount: number
}
