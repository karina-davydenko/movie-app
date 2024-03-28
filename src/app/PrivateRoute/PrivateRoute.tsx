import { getAuth } from 'firebase/auth'
import { useAppSelector } from '../store/store'
import { getIsAuth } from '../../shared/reducers/Auth/selectors'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const PrivateRoute = () => {
  const navigate = useNavigate()
  const isAuth = useAppSelector(getIsAuth)
  useEffect(() => {
    if (!isAuth) {
      navigate('/signin')
    }
  }, [isAuth, navigate])

  return <Outlet />
}
