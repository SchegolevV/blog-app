import { FC, useState, useEffect } from 'react'
// import debounce from 'lodash.debounce'

import favoriteArticle from '../../helpers/favoriteArticle'

import classes from './Like.module.scss'

interface LikeProps {
  slug?: string
  className?: string
  favorited?: boolean
  currentLikes?: number
  disabled: boolean | undefined
}

const Like: FC<LikeProps> = ({ currentLikes = 0, favorited = true, className, disabled, slug }) => {
  const [liked, setLiked] = useState(favorited)
  const [likes, setLikes] = useState(currentLikes)

  useEffect(() => {
    liked ? setLikes((state) => state + 1) : setLikes(currentLikes)
  }, [liked, currentLikes])

  const groupClass = className ? `${classes['like-group']} ${className}` : ` ${classes['like-group']}`

  const handleChange = () => {
    if (slug) {
      liked ? favoriteArticle(slug, 'DELETE') : favoriteArticle(slug, 'POST')
      setLiked((state) => !state)
    } else {
      console.error('some of params not found in changeHandler')
    }
  }

  return (
    <label className={groupClass}>
      <input
        type="checkbox"
        className={classes['like-button']}
        onChange={handleChange}
        disabled={disabled}
        checked={liked}
      ></input>
      <span className={classes['like-counter']}>{likes}</span>
    </label>
  )
}

export default Like
