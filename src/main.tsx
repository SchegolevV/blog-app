import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AuthProvider } from './hoc/AuthProvider'
import AuthRequired from './hoc/AuthRequired'
import { articleLoader } from './Loaders/loaders'
import Layout from './components/Layout/Layout'
import GlobalError from './components/Errors/GlobalError'
import ArticlesList from './components/ArticlesList/ArticlesList'
import Article from './components/Article/Article'
import SignUpForm from './components/UserForms/SignUpForm'
import SignInForm from './components/UserForms/SignInForm'
import EditForm from './components/UserForms/EditForm'
import ArticleForm from './components/UserForms/ArticleForm'

import './assets/styles/main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    errorElement: <GlobalError />,
    children: [
      {
        index: true,
        element: <ArticlesList />,
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
      {
        path: 'articles/:slug/:edit',
        element: <ArticleForm />,
        loader: articleLoader,
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
        path: 'profile',
        element: <EditForm />,
      },
      {
        path: 'new-article',
        element: (
          <AuthRequired>
            <ArticleForm />
          </AuthRequired>
        ),
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
