import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { kinopoiskApi } from './api/kinopoiskApi'
import firestoreSlice from '../../shared/reducers/Firestore/firestoreSlice'
import authSlice from '../../shared/reducers/Auth/authSlice'
/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useDispatch, useSelector } from 'react-redux'

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
        ignoredActions: [
          'auth/signup/fulfilled',
          'auth/signup/rejected',
          'auth/login/rejected',
          'auth/login/fulfilled',
        ],
      },
    }).concat(kinopoiskApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
