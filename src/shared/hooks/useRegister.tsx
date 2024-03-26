import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../app/store/store'
import { setProfileDb } from '../reducers/Firestore/firestoreAction'
import { signup } from '../reducers/Firestore/Auth/authActions'
import { User } from 'firebase/auth'
export type UserPayload = {
  payload: User
  type: string
}
export function useRegister() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  return async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const userSingup = {
      email: String(data.get('email')),
      password: String(data.get('password')),
    }

    try {
      const registerUser = (await dispatch(signup(userSingup))) as UserPayload

      if (registerUser.type === 'auth/signup/fulfilled') {
        navigate('/')
        await dispatch(setProfileDb(registerUser.payload))
      }
    } catch (err) {
      throw new Error('ошибка запроса')
    }
  }
}
