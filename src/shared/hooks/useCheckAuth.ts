import { useEffect } from 'react'
import { useAppDispatch } from '../../app/store/store'
import { onAuth } from '../reducers/Auth/authActions'

export const useCheckAuth = (): void => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(onAuth())
  }, [dispatch])
}
