import { addArticle } from '../API/API'

import { getLocalUser } from './getLocalUser'

type TRequestedData = {
  body: string
  title: string
  description: string
  tagList: { name: string }[]
}

export const addNewArticle = async (data: TRequestedData) => {
  const { tagList } = data
  const requestedTags = tagList.filter((tag) => tag.name).map((tag) => tag.name)

  const requestBody = {
    article: { ...data, tagList: requestedTags },
  }

  const body = await addArticle(requestBody, getLocalUser().token)
  return body
}
