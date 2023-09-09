import { FC } from 'react'

import classes from './Tags.module.scss'

interface TagsProps {
  tagList: string[] | undefined
}

const Tags: FC<TagsProps> = ({ tagList }) => {
  const createTags = () => {
    return tagList?.map((el, idx) =>
      idx < 3 ? (
        <div key={el} className={classes.tag}>
          {el}
        </div>
      ) : null
    )
  }
  return <div className={classes['tag-list']}>{createTags()}</div>
}

export default Tags
