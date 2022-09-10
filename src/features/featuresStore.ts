import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sharedReducer from '../features/Shared/store/slice'
import gpxreactReducer from '../features/GPXReact/store/slice'

export const featuresStore = configureStore({
  reducer: {
    shared: sharedReducer,
    gpxreact: gpxreactReducer,
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