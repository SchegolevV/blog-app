import { IArticle, IArticlesData } from '../Types/formTypes'
import { ILoginData } from '../helpers/logInUser'

type TFetchedData<T, P> = (data: T) => Promise<P | undefined>

type TRequestedUser = {
  user: {
    email: string
    username: string
    password: string
    image?: string
  }
}

type TResponseUser = {
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

type TRequestArticle = {
  article: {
    title: string
    body: string
    tagList: string[]
    description: string
  }
}

export type TRegisterNewUserFunc = TFetchedData<Omit<TRequestedUser, 'image'>, TResponseUser>

export type TGetArticlesFunc = TFetchedData<number, IArticlesData>

export type TLoginUserFunc = TFetchedData<ILoginData, TResponseUser>

export type TEditUserFunc = (user: TRequestedUser, token: string) => Promise<TResponseUser | undefined>

export type TAddArticleFunc = (body: TRequestArticle, token: string) => Promise<IArticle | undefined>
