import { favoriteArticle } from '@/API/API'

import { getToken } from './getToken'

const _favoriteArticle = async (slug: string, method: 'POST' | 'DELETE') => {
  return await favoriteArticle(slug, getToken() as string, method)
}
export default _favoriteArticle
