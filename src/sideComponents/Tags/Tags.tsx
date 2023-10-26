import { FC } from 'react'

import classes from './Tags.module.scss'

interface TagsProps {
  tagList: string[] | undefined
}

const Tags: FC<TagsProps> = ({ tagList }) => {
  const createTags = () => {
    return tagList?.map((el, idx) =>
      idx < 3 ? (
        <li key={idx} className={classes.tag}>
          {el}
        </li>
      ) : null
    )
  }
  return <ul className={classes['tag-list']}>{createTags()}</ul>
}

export default Tags
