import axios from 'axios' // переписать с axios на ky

import { IArticle } from '../Types/formTypes'

import { TRegisterNewUserFunc, TGetArticlesFunc, TLoginUserFunc, TEditUserFunc, TAddArticleFunc } from './APItypes'

export const getArticles: TGetArticlesFunc = async (page) => {
  try {
    const address = `https://blog.kata.academy/api/articles?limit=5&offset=${page * 5 - 5}`
    const { data } = await axios.get(address)

    return data
  } catch (err) {
    console.error(err)
  }
}

export const registerNewUser: TRegisterNewUserFunc = async (userData) => {
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

    const body = await response.json()
    return body
  } catch (err) {
    console.error(err)
  }
}

export const loginUser: TLoginUserFunc = async (userData) => {
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

    const body = await response.json()
    return body
  } catch (err) {
    console.error(err)
  }
}

export const editCurrentUser: TEditUserFunc = async (userData, token) => {
  try {
    const response = await fetch('https://blog.kata.academy/api/user', {
      method: 'PUT',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    console.log(token)
    if (response.status > 500) {
      throw new Error(`Failed with ${response.status}: ${response.body}`)
    }

    const body = await response.json()
    return body
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
    const res = await fetch('https://blog.kata.academy/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(request),
    })

    if (!res.ok) {
      throw new Error(`Failed with ${res.status}: ${res.statusText}`)
    }

    const body = await res.json()
    return body
  } catch (err) {
    console.error(err)
  }
}
