import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB0cws9ZEXJkW3du0Sa_M2W4HmJfrq00GU',
  authDomain: 'movie-app-2d74a.firebaseapp.com',
  projectId: 'movie-app-2d74a',
  storageBucket: 'movie-app-2d74a.appspot.com',
  messagingSenderId: '767210714581',
  appId: '1:767210714581:web:2cfa86403786beb2bfb95c',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(getAuth(app), email, password)
}
