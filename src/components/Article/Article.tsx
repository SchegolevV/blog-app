import { FC, useMemo } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'

import { textTrim } from '../../helpers/textTrim'
import { useAuth } from '../../hooks/useAuth'
import LikeButton from '../../sideComponents/Like/Like'
import { IArticle } from '../../Types/formTypes'
import Tags from '../../sideComponents/Tags/Tags'
import formatDate from '../../helpers/formatDate'
import EditDeleteButtons from '../../sideComponents/EditDeleteButtons/EditDeleteButtons'

import classes from './Article.module.scss'

interface ArticleProps extends Partial<IArticle> {}

const Article: FC<ArticleProps> = ({ ...props }) => {
  const articleData = useLoaderData() as IArticle
  const { slug, favorited, favoritesCount, author, createdAt, body } = articleData ? articleData : props
  let { title, description, tagList } = articleData ? articleData : props

  title = useMemo(() => textTrim(title, 60), [title])
  description = useMemo(() => textTrim(description, 60), [description])
  tagList = tagList?.map((tag) => {
    return textTrim(tag, 20)
  })

  const params = useParams()

  const { user } = useAuth()

  const isArticleOfUser = user?.username === author?.username && params.slug

  return (
    <div className={classes.article}>
      <div className={classes['article-header-wrapper']}>
        <div className={classes['article-info']}>
          <div className={classes.flex_aligner}>
            {(params.slug && <h2 className={`${classes.slug} ${classes.title_slug}`}>{title}</h2>) || (
              <Link to={`/articles/${slug}`} className={classes.slug}>
                {title}
              </Link>
            )}
            <LikeButton
              className={classes['like-btn']}
              slug={slug}
              favorited={favorited}
              currentLikes={favoritesCount}
              disabled={!user}
            />
          </div>

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

      <div className={classes.description_wrapper}>
        <p className={classes.description}>{description}</p>
        {isArticleOfUser && <EditDeleteButtons />}
      </div>

      {params.slug && (
        <article>
          <Markdown>{body}</Markdown>
        </article>
      )}
    </div>
  )
}

export default Article
