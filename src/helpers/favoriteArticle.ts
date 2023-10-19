import { favoriteArticle } from '../API/API'

import { getStorageItem } from './getStorageItem'

const _favoriteArticle = async (slug: string, method: 'POST' | 'DELETE') => {
  const token = getStorageItem('currentUser').token
  const body = await favoriteArticle(slug, token, method)
  return body
}
export default _favoriteArticle
