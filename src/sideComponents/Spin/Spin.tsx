import { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const antIcon = <LoadingOutlined style={{ fontSize: 50, position: 'absolute', right: '50px', bottom: '100px' }} spin />

const Spinner: FC = () => <Spin indicator={antIcon} />

export default Spinner
