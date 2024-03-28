import type { RootState } from '../../../app/store/store'

export const getIsAuth = (state: RootState) => state.auth.isAuth
export const getUserEmail = (state: RootState) => state.auth.email
export const getIsLoadingAuth = (state: RootState) => state.auth.isLoading
