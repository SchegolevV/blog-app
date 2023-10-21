import { editArticle } from '../API/API'

import { getLocalUser } from './getLocalUser'

type TRequestedData = {
  body: string
  title: string
  description: string
  tagList: { name: string }[]
}

const _editArticle = async (data: TRequestedData, slug: string) => {
  const { tagList } = data
  const requestedTags = tagList.filter((tag) => tag.name).map((tag) => tag.name)

  const requestBody = {
    article: { ...data, tagList: requestedTags },
  }

  editArticle(requestBody, getLocalUser().token, slug)
}

export default _editArticle
