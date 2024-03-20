import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import MainPage from '../../pages/MainPage/MainPage'
import SearchPage from '../../pages/SearchPage/SearchPage'
import { ROUTES } from '../../utils/constans'

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
    ],
  },
])
