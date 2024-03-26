import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { kinopoiskApi } from './kinopoiskApi'
import firestoreSlice from '../../shared/reducers/Firestore/firestoreSlice'

const rootReducer = combineReducers({
  [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  firestore: firestoreSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(kinopoiskApi.middleware)
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
