import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import { ROUTES } from '../../utils/constans'
import { lazy } from 'react'

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'))
const SearchPage = lazy(() => import('../../pages/SearchPage/SearchPage'))
const FilmPage = lazy(() => import('../../pages/FilmPage/FilmPage'))
const SingUpPage = lazy(() => import('../../pages/SingUpPage/SingUpPage'))

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.MAIN,
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
      { path: '/singup', element: <SingUpPage /> },
    ],
  },
])
