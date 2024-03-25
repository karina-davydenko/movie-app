import { initializeApp } from 'firebase/app'
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB0cws9ZEXJkW3du0Sa_M2W4HmJfrq00GU',
  authDomain: 'movie-app-2d74a.firebaseapp.com',
  projectId: 'movie-app-2d74a',
  storageBucket: 'movie-app-2d74a.appspot.com',
  messagingSenderId: '767210714581',
  appId: '1:767210714581:web:2cfa86403786beb2bfb95c',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(getAuth(app), email, password)
}

export const setProfile = async (user: User) => {
  try {
    await setDoc(doc(db, 'users', user.email || ''), {
      id: user.uid,
      favorites: [],
      hisroty: [],
    })
  } catch (err) {
    throw new Error('База данных')
  }
}
