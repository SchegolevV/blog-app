import { IArticle, IArticlesData, IRequestedUser, IResponseUser, ILoginData } from './Types/types'

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

export const registerNewUser = async (userData: IRequestedUser) => {
  try {
    const response = await fetch('https://blog.kata.academy/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    if (response.status > 500) {
      throw new Error(`Failed with ${response.status}: ${response.body}`)
    }

    const body: IResponseUser = await response.json()
    return body
  } catch (err) {
    console.error(err)
  }
}

export const loginUser = async (userData: ILoginData) => {
  try {
    const response = await fetch('https://blog.kata.academy/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    if (response.status > 500) {
      throw new Error(`Failed with ${response.status}: ${response.body}`)
    }

    const body: IResponseUser = await response.json()
    return body
  } catch (err) {
    console.error(err)
  }
}
