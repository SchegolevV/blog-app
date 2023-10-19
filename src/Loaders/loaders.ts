import get from 'ky'

export const articleLoader = async ({ params }) => {
  if (params.slug) {
    const data = await get(`https://blog.kata.academy/api/articles/${params.slug}`).json()
    return data.article
  } else {
    return { title: '', tagList: [''] }
  }
}

export const articlesLoader = async ({ params }) => {
  const page = Number(params.page) || 1
  const address = `https://blog.kata.academy/api/articles?limit=5&offset=${page * 5 - 5}`

  const data = await get(address).json()
  return data
}
