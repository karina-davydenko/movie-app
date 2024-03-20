import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import MainPage from '../../pages/MainPage/MainPage'
import SearchPage from '../../pages/SearchPage/SearchPage'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
    ],
  },
])
