import { FC } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import LikeButton from '../../sideComponents/Like/Like'
import { IArticle } from '../../Types/types'
import Tags from '../../sideComponents/Tags/Tags'
import formatDate from '../../helpers/formatDate'

import classes from './Article.module.scss'

interface ArticleProps extends Partial<IArticle> {}

const Article: FC<ArticleProps> = ({ ...props }) => {
  const articleData = useLoaderData() as IArticle
  const { slug, title, favorited, favoritesCount, tagList, description, author, createdAt, body } = articleData
    ? articleData
    : props

  const params = useParams()

  const { user } = useAuth()

  return (
    <div className={classes.article}>
      <div className={classes['article-header-wrapper']}>
        <div className={classes['article-info']}>
          <Link to={`/articles/${slug}`} className={classes.slug}>
            {title}
          </Link>
          <LikeButton
            className={classes['like-btn']}
            isLiked={favorited}
            currentLikes={favoritesCount}
            disabled={user?.status}
          />
          <Tags tagList={tagList} />
        </div>

        <div className={classes['creator-info']}>
          <div>
            <div className={classes.name}>{author?.username}</div>
            <div className={classes.date}>{createdAt && formatDate(createdAt)}</div>
          </div>
          <div
            className={classes.avatar}
            style={{ background: `center / contain no-repeat url(${author?.image})` }}
          ></div>
        </div>
      </div>

      <p className={classes.description}>{description}</p>

      {params.slug && <div className={classes.body}>{body}</div>}
    </div>
  )
}

export default Article
