import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AuthProvider } from './hoc/AuthProvider'
import articleLoader from './Loaders/articleLoader'
import HomePage from './components/HomePage/HomePage'
import GlobalError from './components/Errors/GlobalError'
import ArticlesList from './components/ArticlesList/ArticlesList'
import Article from './components/Article/Article'
import SignUpForm from './components/Forms/SignUpForm'
import './assets/styles/main.css'
import SignInForm from './components/Forms/SignInForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    ),
    errorElement: <GlobalError />,
    children: [
      {
        index: true,
        element: <ArticlesList />,
      },
      {
        path: 'sign-in',
        element: <SignInForm />,
      },
      {
        path: 'sign-up',
        element: <SignUpForm />,
      },
      {
        path: 'articles',
        element: <ArticlesList />,
      },
      {
        path: 'articles/:slug',
        element: <Article />,
        loader: articleLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
