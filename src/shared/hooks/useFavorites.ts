import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/store/store'
import { getIsAuth, getUserId } from '../reducers/Auth/selectors'

import { useCallback } from 'react'
import { getUserBd } from '../reducers/Firestore/selectors'
import {
  addToFavoritesDb,
  removeFromFavoritesDb,
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
      userId && dispatch(addToFavoritesDb({ userId, filmId }))
    } else {
      userId && dispatch(removeFromFavoritesDb({ userId, filmId }))
    }
  }, [isFavorites, dispatch, filmId, userId, isAuth, navigate])

  return { isFavorites, handleFavorites }
}
