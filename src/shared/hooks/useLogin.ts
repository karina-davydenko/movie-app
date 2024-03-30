import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../app/store/store'
import { login } from '../reducers/Auth/authActions'
import type { User } from 'firebase/auth'
import { getProfile } from '../reducers/Firestore/firestoreAction'

type UserPayload = {
  payload: User
  type: string
}

export function useLogin() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const user = {
      email: String(data.get('email')),
      password: String(data.get('password')),
    }

    try {
      const registerUser = (await dispatch(login(user))) as UserPayload

      if (registerUser.type === 'auth/login/fulfilled') {
        navigate('/')
        await dispatch(getProfile(registerUser.payload.uid))
      }
    } catch (err) {
      throw new Error('ошибка запроса')
    }
  }
}
