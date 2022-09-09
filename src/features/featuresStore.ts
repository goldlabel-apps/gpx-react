import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sharedReducer from '../features/Shared/store/slice'
import bannersReducer from '../features/Banners/store/slice'
import sitesReducer from '../features/Sites/store/slice'

export const featuresStore = configureStore({
  reducer: {
    shared: sharedReducer,
    banners: bannersReducer,
    sites: sitesReducer,
  },
})

export type AppDispatch = typeof featuresStore.dispatch
export type RootState = ReturnType<typeof featuresStore.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>