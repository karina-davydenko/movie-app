import { createAsyncThunk } from '@reduxjs/toolkit'
import type { User } from 'firebase/auth'
import type { DocumentData} from 'firebase/firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../../app/firebase/firebase'

export const setProfileDb = createAsyncThunk(
  'firestore/setProfileDb',
  async (user: User) => {
    const dbUser = {
      email: user.email,
      id: user.uid,
      favorites: [],
      hisroty: [],
    }

    try {
      await setDoc(doc(db, 'users', user.uid || ''), dbUser)

      return { email: user.email, id: user.uid }
    } catch (err) {
      throw new Error('База данных')
    }
  },
)

export const getProfileDb = createAsyncThunk(
  'firestor/getProfileDb',
  async (id: string, { rejectWithValue }) => {
    try {
      const userRef = doc(db, 'users', id)
      const docSnap: DocumentData = await getDoc(userRef)

      return docSnap.data()
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
