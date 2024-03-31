import type { RootState } from '../../../app/store/store'

export const getUserBd = (state: RootState) => state.firestore
export const getUserFavorites = (state: RootState) => state.firestore.favorites
export const getUserHistory = (state: RootState) => state.firestore.history
