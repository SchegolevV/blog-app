import { useEffect, useState } from 'react'

import { IArticlesData } from '../Types/formTypes'
import { getArticles } from '../API/API'

const usePagination = () => {
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState<IArticlesData>()

  useEffect(() => {
    getArticles(page).then((data) => {
      setArticles(data)
    })
  }, [page])

  return { page, setPage, articles }
}

export default usePagination
