import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../../../app/firebase/firebase'
import { setAuthorized, setLoading } from './authSlice'
import { getProfile } from '../Firestore/firestoreAction'
import { FirebaseError } from 'firebase/app'

type User = {
  email: string
  password: string
}

type AsyncThunkConfig = {
  rejectValue: FirebaseError
}

export const signup = createAsyncThunk<
  UserCredential['user'],
  User,
  AsyncThunkConfig
>('auth/signup', async ({ email, password }, { rejectWithValue }) => {
  try {
    const registerResponse = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    return registerResponse.user as UserCredential['user']
  } catch (error) {
    return rejectWithValue(error as FirebaseError)
  }
})

export const login = createAsyncThunk<
  UserCredential['user'],
  User,
  AsyncThunkConfig
>('auth/login', async ({ email, password }: User, { rejectWithValue }) => {
  try {
    const registerResponse = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    return registerResponse.user
  } catch (error) {
    return rejectWithValue(error as FirebaseError)
  }
})

export const logout = createAsyncThunk<void, void, AsyncThunkConfig>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth)
    } catch (error) {
      return rejectWithValue(error as FirebaseError)
    }
  },
)

export const onAuth = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/onAuth',
  async (_, { dispatch, rejectWithValue }) => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        dispatch(setAuthorized(user))
        dispatch(getProfile(user.uid))
      } else {
        dispatch(setLoading())
        return rejectWithValue('Authentication check error')
      }
    })
  },
)
