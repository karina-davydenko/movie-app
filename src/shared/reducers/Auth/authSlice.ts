import { createSlice } from '@reduxjs/toolkit'
import { login, logout, onAuth, signup } from './authActions'

type AuthState = {
  id: string
  isAuth: boolean
  isLoading: boolean
  email: string | null
  error: string | undefined
}

const initialState: AuthState = {
  isLoading: true,
  id: '',
  email: null,
  isAuth: false,
  error: undefined,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorized(state, action) {
      state.email = action.payload.email
      state.id = action.payload.uid
      state.isAuth = true
      state.isLoading = false
    },
    setLoading(state) {
      state.isLoading = false
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.uid
        state.email = action.payload.email
        state.isAuth = true
      })
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.uid
        state.email = action.payload.email
        state.isAuth = true
      })
      .addCase(logout.pending, state => {
        state.isLoading = true
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false
        state.email = null
        state.isAuth = false
      })
      .addCase(onAuth.pending, state => {
        state.isLoading = true
      })
  },
})

export const { setAuthorized, setLoading } = authSlice.actions
export default authSlice
