import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../app/store/store'
import { setProfile } from '../reducers/Firestore/firestoreAction'
import { signup } from '../reducers/Auth/authActions'
import type { User } from 'firebase/auth'

type UserPayload = {
  payload: User
  type: string
}

export function useRegister() {
  const dispatch = useAppDispatch()
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
        await dispatch(setProfile(registerUser.payload))
      }
    } catch (err) {
      throw new Error('ошибка запроса')
    }
  }
}
