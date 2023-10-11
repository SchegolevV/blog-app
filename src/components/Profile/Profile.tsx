import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IResponseUser } from '../../Types/formTypes'
import { getStorageItem } from '../../helpers/getStorageItem'

import classes from './Profile.module.scss'

interface IProfileProps extends IResponseUser {
  linkTo: string
}

const Profile: FC<IProfileProps> = ({ user, linkTo }) => {
  const defaultImg = 'src/assets/images/defaultUserAvatar.svg'
  const { username } = user
  const localImg = getStorageItem('currentUser').image
  return (
    <>
      <label>
        <Link to={`${linkTo}`} className={classes['profile-link']}>
          {username ? username : 'unknown'}
        </Link>
        <img src={localImg || defaultImg} alt="avatar" className={classes['profile-image']} />
      </label>
    </>
  )
}

export default Profile
