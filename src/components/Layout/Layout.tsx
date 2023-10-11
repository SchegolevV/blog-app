import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'

const Layout: FC = () => {
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

export default Layout
