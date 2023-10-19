import { useEffect, useState } from 'react'

import { IArticlesData } from '../Types/formTypes'
import { getArticles } from '../API/API'

const useArticlesLoading = () => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState<IArticlesData>()

  useEffect(() => {
    setLoading(true)
    getArticles(page).then((data) => {
      setArticles(data)
      setLoading(false)
    })
  }, [page, setLoading])

  return { page, setPage, articles, loading }
}

export default useArticlesLoading
