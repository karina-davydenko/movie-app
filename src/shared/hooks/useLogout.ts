import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../app/store/store'
import { logout } from '../reducers/Auth/authActions'

export function useLogout() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return async () => {
    const res = await dispatch(logout())
    console.log(res)
  }
}
