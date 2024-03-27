import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../../app/firebase/firebase'
import { setAuthorized } from './authSlice'
import { getUser } from '../Firestore/selectors'
import { getProfileDb } from '../Firestore/firestoreAction'

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

export const onAuth = createAsyncThunk(
  'auth/onAuth',
  async (_, { dispatch, rejectWithValue }) => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        dispatch(setAuthorized(user.uid))
        dispatch(getProfileDb(user.uid))
      } else {
        return rejectWithValue('Error auth check')
      }
    })
  },
)
