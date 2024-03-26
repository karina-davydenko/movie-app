import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../app/firebase/firebase'

export const setProfileDb = createAsyncThunk(
  'firestore/setProfileDb',
  async (user: User) => {
    const dbUser = {
      id: user.uid,
      favorites: [],
      hisroty: [],
    }

    try {
      await setDoc(doc(db, 'users', user.email || ''), dbUser)

      return { email: user.email, id: user.uid }
    } catch (err) {
      throw new Error('База данных')
    }
  },
)
