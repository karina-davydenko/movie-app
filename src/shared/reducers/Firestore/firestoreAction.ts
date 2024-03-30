import { createAsyncThunk } from '@reduxjs/toolkit'
import type { User } from 'firebase/auth'
import type { DocumentData } from 'firebase/firestore'
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../../../app/firebase/firebase'

export const setProfile = createAsyncThunk(
  'firestore/setProfile',
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

export const getProfile = createAsyncThunk(
  'firestor/getProfile',
  async (userId: string, { rejectWithValue }) => {
    try {
      const userRef = doc(db, 'users', userId)
      const docSnap: DocumentData = await getDoc(userRef)

      return docSnap.data()
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

type dataFavorite = {
  userId: string
  filmId: number
}

export const addToFavorites = createAsyncThunk(
  'firestore/addToFavorites',
  async ({ userId, filmId }: dataFavorite, { dispatch, rejectWithValue }) => {
    try {
      const userRef = doc(db, 'users', userId)
      await updateDoc(userRef, { favorites: arrayUnion(filmId) })
      await dispatch(getProfile(userId))
      return filmId
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const removeFromFavorites = createAsyncThunk(
  'firestore/removeFromFavorite',
  async ({ userId, filmId }: dataFavorite, { dispatch, rejectWithValue }) => {
    try {
      const userRef = doc(db, 'users', userId)
      await updateDoc(userRef, {
        favorites: arrayRemove(filmId),
      })
      await dispatch(getProfile(userId))
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
