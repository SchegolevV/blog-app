import { IArticle, IArticlesData } from './Types/types'

export const getArticles = async (page: number = 1): Promise<IArticlesData | undefined> => {
  try {
    const response = await fetch(`https://blog.kata.academy/api/articles?limit=5&offset=${page * 5 - 5}`)
    if (!response.ok) {
      throw new Error('Error with fetching articles')
    }
    return await response.json()
  } catch (err) {
    console.error(err)
  }
}

export const getArticle = async (slug: string | undefined): Promise<IArticle | undefined> => {
  try {
    const response: { article: IArticle } = await fetch(`https://blog.kata.academy/api/articles/${slug}`).then(
      async (res) => await res.json()
    )

    return response.article
  } catch (err) {
    console.error(err)
  }
}
