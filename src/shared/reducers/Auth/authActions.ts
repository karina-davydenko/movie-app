import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../../../app/firebase/firebase'
import { setAuthorized, setLoading } from './authSlice'
import { getProfile } from '../Firestore/firestoreAction'

type User = {
  email: string
  password: string
}

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ email, password }: User, { rejectWithValue }) => {
    try {
      const registerResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      return registerResponse.user
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: User, { rejectWithValue }) => {
    try {
      const registerResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      return registerResponse.user
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await signOut(auth)
})

export const onAuth = createAsyncThunk(
  'auth/onAuth',
  async (_, { dispatch, rejectWithValue }) => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        dispatch(setAuthorized(user))
        dispatch(getProfile(user.uid))
      } else {
        dispatch(setLoading())
      }
    })
  },
)
