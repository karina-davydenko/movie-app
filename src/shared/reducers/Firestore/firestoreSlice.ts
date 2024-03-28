import { createSlice } from '@reduxjs/toolkit'
import { getProfileDb, setProfileDb } from './firestoreAction'

type UserState = {
  user: {
    id: null | string
    favorites: number[]
    history: string[]
  }
  error: string | undefined
}

const initialState: UserState = {
  user: {
    id: null,
    favorites: [],
    history: [],
  },
  error: undefined,
}

const firestoreSlice = createSlice({
  name: 'firestore',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setProfileDb.fulfilled, (state, action) => {
        state.user.id = action.payload.id
      })
      .addCase(getProfileDb.fulfilled, (state, action) => {
        state.user.favorites = action.payload.favorites
        state.user.history = action.payload.history
        state.user.id = action.payload.id
      })
      .addCase(setProfileDb.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default firestoreSlice
