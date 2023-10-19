import ky from 'ky'

import { IArticle } from '../Types/formTypes'

import {
  TEditUserFunc,
  TGetArticlesFunc,
  TLoginUserFunc,
  TRegisterNewUserFunc,
  TAddArticleFunc,
  TDeleteArticleFunc,
  TEditArticleFunc,
} from './APItypes'

export const getArticles: TGetArticlesFunc = async (page) => {
  try {
    const address = `https://blog.kata.academy/api/articles?limit=5&offset=${page * 5 - 5}`
    const res = await ky.get(address)

    return res.json()
  } catch (err) {
    console.error(err)
  }
}

export const registerNewUser: TRegisterNewUserFunc = async (userData) => {
  try {
    await ky.post('https://blog.kata.academy/api/users', { json: userData })
  } catch (err) {
    console.error(err)
  }
}

export const loginUser: TLoginUserFunc = async (userData) => {
  try {
    const res = await ky.post('https://blog.kata.academy/api/users/login', { json: userData })

    return res.json()
  } catch (err) {
    console.error(err)
  }
}

export const editCurrentUser: TEditUserFunc = async (userData, token) => {
  try {
    const res = await ky.put('https://blog.kata.academy/api/user', {
      json: userData,
      headers: {
        Authorization: `Token ${token}`,
      },
    })

    return res.json()
  } catch (err) {
    console.error(err)
  }
}

export const favoriteArticle = async (slug: string, token: string, method: string): Promise<IArticle | undefined> => {
  try {
    const res = await fetch(`https://blog.kata.academy/api/articles/${slug}/favorite`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })

    if (!res.ok) {
      throw new Error(`Failed with ${res.status}: ${res.statusText}`)
    }

    const body = await res.json()
    return body.article
  } catch (err) {
    console.error(err)
  }
}

export const addArticle: TAddArticleFunc = async (request, token) => {
  try {
    const res = await ky.post('https://blog.kata.academy/api/articles', {
      json: request,
      headers: {
        Authorization: `Token ${token}`,
      },
    })

    return res.json()
  } catch (err) {
    console.error(err)
  }
}

export const deleteArticle: TDeleteArticleFunc = (token, slug) => {
  try {
    ky.delete(`https://blog.kata.academy/api/articles/${slug}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
  } catch (err) {
    console.error(err)
  }
}

export const editArticle: TEditArticleFunc = (request, token, slug) => {
  if (!slug) {
    throw new Error('Slug of article is lost, but required for delete')
  }
  try {
    ky.put(`https://blog.kata.academy/api/articles/${slug}`, {
      json: request,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
  } catch (err) {
    console.error(err)
  }
}
