import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"


export interface CreateItem {
  type: string,
  title: number | string
  icon: string
}

export const addItem = (payload:CreateItem): AppThunk => async (dispatch: any) => {
  try {
    // console.log ("addItem", payload);
    const {       
      type,
      title,
      icon, 
    } = payload
    dispatch(setSharedKey({ key: 'newItem', value: {
      type,
      title,
      icon,
    }}))
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'error', value: {
      severity: "error",
      code: "AI-101",
      message: error.toString()
    }}))
  }
}
