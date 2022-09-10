import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../../featuresStore"

export interface SharedSlice {
  error: any
  editing: any
  notifying: any
  confirming: any
  newItem: any
  newItemValue: string
  route: any
}

const initialState: SharedSlice = {
  error: null,
  route: {
    shouldUpdate: false,
    this: 123,
  },
  editing: null,
  confirming: null,
  notifying: null,
  newItem: null,
  newItemValue: "",
}

export const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<any>) => {
      const { key, value, subKey } = action.payload
      if (subKey){
        // @ts-ignore
        state.editing.item[subKey][key] = value
      } else {
        // @ts-ignore
        state.editing.item[key] = value
      }
      state.editing.pristine = false
    },
    setSharedKey: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectShared = (state: RootState) => state.shared
export const { 
  setSharedKey,
  edit,
} = sharedSlice.actions
export default sharedSlice.reducer
