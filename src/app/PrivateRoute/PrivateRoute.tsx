import { useAppSelector } from '../store/store'
import { getIsAuth } from '../../shared/reducers/Auth/selectors'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
  const isAuth = useAppSelector(getIsAuth)

  if (!isAuth) {
    return <Navigate to='/signin' replace />
  }

  return <Outlet />
}
