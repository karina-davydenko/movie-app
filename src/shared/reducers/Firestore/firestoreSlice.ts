import { createSlice } from '@reduxjs/toolkit'
import { setProfileDb } from './firestoreAction'

type UserState = {
  user: {
    id: null | string
    favorites: string[]
    history: string[]
  }
  error: string | undefined
}

const firestoreSlice = createSlice({
  name: 'firestore',
  initialState: {
    user: {
      id: null,
      favorites: [],
      history: [],
    },
    error: undefined,
  } as UserState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setProfileDb.fulfilled, (state, action) => {
        state.user.id = action.payload.id
      })
      .addCase(setProfileDb.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default firestoreSlice
