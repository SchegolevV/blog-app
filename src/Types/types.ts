import { HTMLInputTypeAttribute } from 'react'
import { RegisterOptions, UseFormRegister, FormState } from 'react-hook-form'

export type IRequestedUser = {
  user: Omit<ISignUp, 'password_repeat'>
}
export type IResponseUser = {
  user: {
    email: string
    token?: string
    username?: string
    password?: string
  }
  errors?: {
    username: string
    email: string
  }
}
export type ILoginData = {
  user: {
    email: string
    password: string
  }
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

export type ISignUp = {
  username: string
  email: string
  password: string
  password_repeat: string
}

export type IFormInputProps = {
  register: UseFormRegister<ISignUp>
  registerOptions?: RegisterOptions
  formState: FormState<ISignUp>
  children: string
  name: keyof ISignUp
  type?: HTMLInputTypeAttribute
}
