import { createSlice } from '@reduxjs/toolkit'
import { getProfile, setProfile } from './firestoreAction'

type UserState = {
  id: null | string
  favorites: number[]
  history: string[]
  error: string | undefined
  isBdLoading: boolean
}

const initialState: UserState = {
  id: null,
  favorites: [],
  history: [],
  isBdLoading: false,
  error: undefined,
}

const firestoreSlice = createSlice({
  name: 'firestore',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setProfile.fulfilled, (state, action) => {
        state.id = action.payload.id
      })
      .addCase(setProfile.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites
        state.history = action.payload.history
        state.id = action.payload.id
      })
  },
})

export default firestoreSlice
