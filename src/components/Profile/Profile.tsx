import { FC } from 'react'
import { Link } from 'react-router-dom'

import { getLocalUser } from '../../helpers/getLocalUser'
import defaultAvatar from '../../images/defaultUserAvatar.svg'

import classes from './Profile.module.scss'

interface IProfileProps {
  linkTo: string
  user: { username: string }
}

const Profile: FC<IProfileProps> = ({ user, linkTo }) => {
  const { username } = user
  const localImg = getLocalUser().image
  return (
    <>
      <label>
        <Link to={`${linkTo}`} className={classes['profile-link']}>
          {username ? username : 'unknown'}
        </Link>
        <img src={localImg || defaultAvatar} alt="avatar" className={classes['profile-image']} />
      </label>
    </>
  )
}

export default Profile
