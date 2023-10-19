import { FC } from 'react'
import { Pagination } from 'antd'

import { IArticle } from '../../Types/formTypes'
import Article from '../Article/Article'
import useArticles from '../../hooks/useArticles'
import Spinner from '../../sideComponents/Spin/Spin'

import classes from './ArticlesList.module.scss'

const ArticlesList: FC = () => {
  const { articles, page, setPage, loading } = useArticles()

  const createArticles = () => {
    const list = articles?.articles.map((article: IArticle) => (
      <li key={article.slug} className={classes['articles-list-item']}>
        <Article {...article} />
      </li>
    ))
    return list
  }

  return (
    (loading && <Spinner />) || (
      <>
        <ul className={classes['articles-list']}>{createArticles()}</ul>
        <Pagination
          defaultCurrent={page}
          total={articles?.articlesCount}
          showSizeChanger={false}
          style={{ width: 'fit-content', margin: '1.6rem auto' }}
          onChange={(e) => {
            setPage(e)
          }}
        />
      </>
    )
  )
}

export default ArticlesList
