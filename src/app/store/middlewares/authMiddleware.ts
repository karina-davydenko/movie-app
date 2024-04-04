/* eslint-disable no-console */
import type { TypedStartListening } from '@reduxjs/toolkit'
import { createListenerMiddleware } from '@reduxjs/toolkit'
import type { AppDispatch, RootState } from '../store'

export const authMiddleware = createListenerMiddleware()

const startTypedListening =
  authMiddleware.startListening as TypedStartListening<RootState, AppDispatch>

startTypedListening({
  type: 'auth/signup/fulfilled',
  effect: (_, { getState }) => {
    const email = getState().auth.email
    alert(`Регистрация прошла успешно, ваш email: ${email}`)
  },
})

startTypedListening({
  type: 'auth/signup/rejected',
  effect: (_, { getState }) => {
    const error = getState().auth.error
    console.log(`Произошла ошибка регистрации: ${error}`)
  },
})

startTypedListening({
  type: 'auth/signup/pending',
  effect: () => {
    console.log(`Пробуем зарегстрировать вашими данные, загрузка`)
  },
})

startTypedListening({
  type: 'auth/login/rejected',
  effect: (_, { getState }) => {
    const error = getState().auth.error
    console.log(`При входе произошла ошибка регистрации: ${error}`)
  },
})

startTypedListening({
  type: 'auth/login/fulfilled',
  effect: (_, { getState }) => {
    const email = getState().auth.email
    console.log(`Вход прошел успешно, ваш email: ${email}`)
  },
})

startTypedListening({
  type: 'auth/login/pending',
  effect: (_, { getState }) => {
    const loading = getState().auth.isLoading
    console.log(`Пробуем зайти с вашими данными, загрузка: ${loading}`)
  },
})

startTypedListening({
  type: 'auth/logout/rejected',
  effect: (_, { getState }) => {
    const error = getState().auth.error
    console.log(`При выходе из аккаунта произошла ошибка : ${error}`)
  },
})

startTypedListening({
  type: 'auth/logout/fulfilled',
  effect: () => {
    console.log(`Вы успешно вышли из аккуанта`)
  },
})

startTypedListening({
  type: 'auth/logout/pending',
  effect: () => {
    console.log(`Выход из системы, загрузка`)
  },
})

startTypedListening({
  type: 'auth/onAuth/pending',
  effect: (_, { getState }) => {
    const loading = getState().auth.isLoading
    console.log(`Проверяем авторизованы ли вы, загрузка: ${loading}`)
  },
})

startTypedListening({
  type: 'auth/onAuth/rejected',
  effect: (_, { getState }) => {
    const error = getState().auth.error
    console.log(`При входе произошла ошибка регистрации: ${error}`)
  },
})
