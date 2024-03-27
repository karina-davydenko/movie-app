import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import { ROUTES } from '../../utils/constans'
import { lazy } from 'react'

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'))
const SearchPage = lazy(() => import('../../pages/SearchPage/SearchPage'))
const FilmPage = lazy(() => import('../../pages/FilmPage/FilmPage'))
const SignUpPage = lazy(() => import('../../pages/SignUpPage/SingUpPage'))
const SignInPage = lazy(() => import('../../pages/SignInPage/SignInPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: `${ROUTES.SEARCH}/:search`,
        element: <SearchPage />,
      },
      {
        path: `${ROUTES.FILM}/:film`,
        element: <FilmPage />,
      },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/signin', element: <SignInPage /> },
    ],
  },
])
