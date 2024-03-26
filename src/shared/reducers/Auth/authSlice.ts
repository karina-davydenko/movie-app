import { createSlice } from '@reduxjs/toolkit'
import { login, signup } from './authActions'

type AuthState = {
  isAuth: boolean
  email: string | null
  error: string | undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    isAuth: false,
    error: undefined,
  } as AuthState,
  reducers: {
    setAuthorized(state, action) {
      state.email = action.payload
      state.isAuth = true
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.isAuth = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.isAuth = true
      })
  },
})

export const { setAuthorized } = authSlice.actions
export default authSlice
