import get from 'ky'
// eslint-disable-next-line import/named
import { LoaderFunction } from 'react-router-dom'

import { IArticle } from '@/Types/formTypes'

type TData = {
  article: IArticle
}

export const articleLoader: LoaderFunction = async ({ params }) => {
  if (params.slug) {
    const data = await get(`https://blog.kata.academy/api/articles/${params.slug}`).json<TData>()
    return data.article
  } else {
    return { title: '', tagList: [''] }
  }
}

export const articlesLoader: LoaderFunction = async ({ params }) => {
  const page = Number(params.page) || 1
  const address = `https://blog.kata.academy/api/articles?limit=5&offset=${page * 5 - 5}`

  const data = await get(address).json()
  return data
}
