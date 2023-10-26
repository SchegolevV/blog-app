import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import defaultAvatar from '../../images/defaultUserAvatar.svg'
import { TUser } from '../../hooks/useUser'

import classes from './Profile.module.scss'

interface IProfileProps {
  linkTo: string
  user: TUser
}

const Profile: FC<IProfileProps> = memo(function Profile({ user, linkTo }) {
  const { username, image } = user
  return (
    <>
      <label>
        <Link to={`${linkTo}`} className={classes['profile-link']}>
          {username ? username : 'unknown'}
        </Link>
        <img src={image || defaultAvatar} alt="avatar" className={classes['profile-image']} />
      </label>
    </>
  )
})

export default Profile
