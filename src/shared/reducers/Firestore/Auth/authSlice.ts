import { createSlice } from '@reduxjs/toolkit'
import { signup } from './authActions'

type AuthState = {
  isAuth: boolean
  email: string | null
  error: string | undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState: <AuthState>{
    email: null,
    isAuth: false,
    error: undefined,
  },
  reducers: {
    setAuthorized(state, action) {
      state.email = action.payload
      state.isAuth = true
    },
  },
  extraReducers: builder => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.email = action.payload.email
      state.isAuth = true
    })
  },
})

export const { setAuthorized } = authSlice.actions
export default authSlice
