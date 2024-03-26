import type { RootState } from '../../../app/store/store'

export const getUser = (state: RootState) => state.firestore.user
export const getBdError = (state: RootState) => state.firestore.error
