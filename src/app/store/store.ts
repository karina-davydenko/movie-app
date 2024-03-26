import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { kinopoiskApi } from './kinopoiskApi'
import firestoreSlice from '../../shared/reducers/Firestore/firestoreSlice'
import authSlice from '../../shared/reducers/Firestore/Auth/authSlice'

const rootReducer = combineReducers({
  [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  firestore: firestoreSlice.reducer,
  auth: authSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['auth/signup/fulfilled', 'auth/signup/rejected'],
      },
    }).concat(kinopoiskApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
