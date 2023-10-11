import axios from 'axios'
// import { LoaderFunction } from 'react-router-dom'

export const articleLoader: LoaderFunction = async ({ params }) => {
  const { data } = await axios.get(`https://blog.kata.academy/api/articles/${params.slug}`)
  console.log(data)
  return data.article
}

export const articlesLoader: LoaderFunction = async ({ params }) => {
  const page = Number(params.page) || 1
  const address = `https://blog.kata.academy/api/articles?limit=5&offset=${page * 5 - 5}`

  const { data } = await axios.get(address)
  console.log(data)
  return data
}
