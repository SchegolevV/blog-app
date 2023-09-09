import { FC, useState, useEffect } from 'react'
import { Pagination } from 'antd'

import { IArticle, IArticlesData } from '../../Types/types'
import Article from '../Article/Article'
import { getArticles } from '../../API'

import classes from './ArticlesList.module.scss'

const ArticlesList: FC = () => {
  const [articles, setArticles] = useState<IArticlesData>()
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    getArticles(page).then((body) => setArticles(body))
  }, [page])

  const createArticles = () => {
    const list = articles?.articles.map((article: IArticle) => (
      <li key={article.slug} className={classes['articles-list-item']}>
        <Article {...article} />
      </li>
    ))
    return list
  }

  return (
    <>
      <ul className={classes['articles-list']}>{createArticles()}</ul>
      <Pagination
        defaultCurrent={1}
        total={articles?.articlesCount}
        showSizeChanger={false}
        style={{ width: 'fit-content', margin: '1.6rem auto' }}
        onChange={(e) => setPage(e)}
      />
    </>
  )
}

export default ArticlesList
