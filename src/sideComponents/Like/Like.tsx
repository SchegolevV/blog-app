import { FC, useState, useEffect } from 'react'

import classes from './Like.module.scss'

interface LikeProps {
  className?: string
  isLiked?: boolean
  currentLikes?: number
  disabled: boolean | undefined
}

const Like: FC<LikeProps> = ({ currentLikes = 0, isLiked = false, className, disabled }) => {
  const [liked, setLiked] = useState(isLiked)
  const [likes, setLikes] = useState(currentLikes)

  useEffect(() => {
    liked ? setLikes((state) => state + 1) : setLikes(currentLikes)
  }, [liked, currentLikes])

  const activeClass = liked ? `${classes['like-button']} ${classes.active} ` : `${classes['like-button']}`
  const groupClass = className ? `${classes['like-group']} ${className}` : ` ${classes['like-group']}`

  const handleChange = (e: React.MouseEvent) => {
    e.preventDefault()
    setLiked((state) => !state)
  }

  return (
    <div className={groupClass}>
      <button className={activeClass} onClick={handleChange} disabled={disabled}></button>
      <span className={classes['like-counter']}>{likes}</span>
    </div>
  )
}

export default Like
