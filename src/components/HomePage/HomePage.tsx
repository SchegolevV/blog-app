import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'

const HomePage: FC = () => {
  return (
    <>
      <div className="content-wrapper">
        <Header />
      </div>
      <main>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default HomePage
