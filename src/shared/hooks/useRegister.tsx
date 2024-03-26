import { useNavigate } from 'react-router-dom'
import { createUser } from '../../app/firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../app/store/store'
import { setProfileDb } from '../reducers/Firestore/firestoreAction'
import { getUser } from '../reducers/Firestore/selectors'

export function useRegister() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const user = useSelector(getUser)
  return async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(user)
    const data = new FormData(event.currentTarget)
    const email = String(data.get('email'))
    const password = String(data.get('password'))

    try {
      const registerResponse = await createUser(email, password)
      const { user } = registerResponse

      navigate('/')

      await dispatch(setProfileDb(user))
    } catch (err: any) {
      console.log(err.message)
    }
  }
}
