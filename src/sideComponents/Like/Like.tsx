import { FC, useState, useCallback } from 'react'

import favoriteArticle from '@/helpers/favoriteArticle'

import classes from './Like.module.scss'

interface LikeProps {
  slug?: string
  className?: string
  favorited?: boolean
  currentLikes?: number
  disabled?: boolean
}

const Like: FC<LikeProps> = ({ currentLikes = 0, favorited, className, disabled, slug = '' }) => {
  const [liked, setLiked] = useState(favorited)
  const [likes, setLikes] = useState(currentLikes)

  const addFavorite = useCallback(() => {
    favoriteArticle(slug, 'POST')
  }, [slug])
  const removeFavorite = useCallback(() => favoriteArticle(slug, 'DELETE'), [slug])

  const handleChange = useCallback(() => {
    setLiked((state) => !state)
    if (liked) {
      setLikes((state) => state - 1)
      removeFavorite()
    } else {
      setLikes((state) => state + 1)
      addFavorite()
    }
  }, [liked, addFavorite, removeFavorite])

  return (
    <label className={`${classes['like-group']} ${className}`}>
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
