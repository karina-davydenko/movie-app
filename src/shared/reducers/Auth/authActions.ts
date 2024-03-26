import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../../app/firebase/firebase'

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
