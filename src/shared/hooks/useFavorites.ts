import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/store/store'
import { getIsAuth, getUserId } from '../reducers/Auth/selectors'

import { useCallback } from 'react'
import { getUserBd } from '../reducers/Firestore/selectors'
import {
  addToFavorites,
  removeFromFavorites,
} from '../reducers/Firestore/firestoreAction'

export function useFavorites(filmId: number) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isAuth = useAppSelector(getIsAuth)
  const userId = useAppSelector(getUserId)
  let { favorites } = useAppSelector(getUserBd)
  const isFavorites = favorites.includes(filmId)

  const handleFavorites = useCallback(() => {
    if (!isAuth) {
      navigate('/signin')
      return
    }

    if (!isFavorites) {
      dispatch(addToFavorites({ userId, filmId }))
    } else {
      dispatch(removeFromFavorites({ userId, filmId }))
    }
  }, [isFavorites, dispatch, filmId, userId, isAuth, navigate])

  return { isFavorites, handleFavorites }
}
