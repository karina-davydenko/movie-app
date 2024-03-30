import { addToHistory } from '../reducers/Firestore/firestoreAction'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/store/store'
import { getIsAuth, getUserId } from '../reducers/Auth/selectors'

export function useHistory() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isAuth = useAppSelector(getIsAuth)
  const userId = useAppSelector(getUserId)

  return async (_e: any, value: string | null, reason: string) => {
    if (reason === 'clear' || !value) {
      return
    }

    navigate('/search/' + value)

    if (isAuth) {
      await dispatch(addToHistory({ userId, keyword: value }))
    }
  }
}
