import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { kinopoiskApi } from './kinopoiskApi'

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(kinopoiskApi.middleware)
  },
})

setupListeners(store.dispatch)

export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
