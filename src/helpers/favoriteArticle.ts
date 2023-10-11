import { favoriteArticle } from '../API/API'

import { getStorageItem } from './getStorageItem'

const _favoriteArticle = (slug: string, method: 'POST' | 'DELETE'): void => {
  try {
    const token = getStorageItem('currentUser').token
    if (!token) {
      throw new Error('Can not access current token')
    }
    favoriteArticle(slug, token, method)
  } catch (err) {
    console.log(err.message)
  }
}
export default _favoriteArticle
