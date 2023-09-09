// eslint-disable-next-line import/named
import { LoaderFunction } from 'react-router-dom'

import { getArticle } from '../API'

const loader: LoaderFunction = async ({ params }) => {
  const body = await getArticle(params.slug)
  return body
}

export default loader
