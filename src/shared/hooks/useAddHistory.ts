import { addToHistory } from '../reducers/Firestore/firestoreAction'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/store/store'
import { getIsAuth, getUserId } from '../reducers/Auth/selectors'
import { ResultFilms } from '../../app/store/api/transformResponses/types'

export function useHistory() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isAuth = useAppSelector(getIsAuth)
  const userId = useAppSelector(getUserId)

  return async (
    _e: any,
    value: string | ResultFilms | null,
    reason: string,
  ) => {
    if (reason === 'clear' || !value) {
      return
    }
    const keyword = typeof value === 'string' ? value : value.nameRu
    navigate('/search/' + keyword)

    if (isAuth) {
      await dispatch(addToHistory({ userId, keyword: keyword }))
    }
  }
}
