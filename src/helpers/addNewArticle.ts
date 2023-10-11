import { addArticle } from '../API/API'

import { getStorageItem } from './getStorageItem'

type TRequestedData = {
  body: string
  title: string
  description: string
  tagList: { name: string }[]
}

export const addNewArticle = async (data: TRequestedData) => {
  const { tagList } = data
  const requestedTags = tagList.map((tag) => tag.name)

  const requestBody = {
    article: { ...data, tagList: requestedTags },
  }
  console.log(requestBody)

  const body = await addArticle(requestBody, getStorageItem('currentUser').token)
  return body
}
