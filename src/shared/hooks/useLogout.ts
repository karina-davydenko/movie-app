import { useAppDispatch } from '../../app/store/store'
import { logout } from '../reducers/Auth/authActions'

export function useLogout() {
  const dispatch = useAppDispatch()
  return async () => {
    await dispatch(logout())
  }
}
