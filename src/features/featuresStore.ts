import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sharedReducer from '../features/Shared/store/slice'

export const featuresStore = configureStore({
  reducer: {
    shared: sharedReducer,
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