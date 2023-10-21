import { favoriteArticle } from '../API/API'

import { getLocalUser } from './getLocalUser'

const _favoriteArticle = async (slug: string, method: 'POST' | 'DELETE') => {
  const token = getLocalUser().token
  const body = await favoriteArticle(slug, token, method)
  return body
}
export default _favoriteArticle
