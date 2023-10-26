import { FC } from 'react'
import { Popconfirm, message } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'

import Button from '../Button/Button'
import './EditDeleteButtons.scss'
import { deleteArticle } from '../../API/API'
import { getToken } from '../../helpers/getToken'

interface EditDeleteButtonsProps {}

const EditDeleteButtons: FC<EditDeleteButtonsProps> = () => {
  const navigate = useNavigate()

  const { slug } = useParams()
  const token = getToken()

  const confirm = () => {
    if (slug && token) {
      deleteArticle(token, slug)
    }
    navigate('/')
    message.success('Article deleted')
  }
  return (
    <div className="edit-delete_group">
      <Popconfirm
        title="Delete the article"
        description="Are you sure to delete this article?"
        onConfirm={confirm}
        onCancel={() => null}
        okText="Yes"
        cancelText="No"
        placement="right"
      >
        <Button style="warning">delete</Button>
      </Popconfirm>

      <Button linkTo="./edit" style="creative">
        edit
      </Button>
    </div>
  )
}

export default EditDeleteButtons
