import type { RootState } from '../../../app/store/store'

export const getUserBd = (state: RootState) => state.firestore
