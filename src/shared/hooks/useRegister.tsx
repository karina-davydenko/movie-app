import { useNavigate } from 'react-router-dom'
import { createUser, setProfile } from '../../app/store/firebase/firebase'

export function useRegister() {
  const navigate = useNavigate()
  return async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = String(data.get('email'))
    const password = String(data.get('password'))

    try {
      const registerResponse = await createUser(email, password)
      const { user } = registerResponse

      navigate('/')

      await setProfile(user)
    } catch (err: any) {
      console.log(err.message)
    }
  }
}
