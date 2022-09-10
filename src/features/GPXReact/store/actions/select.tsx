import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const select = (item: any, type: string): AppThunk => async (dispatch: any) => {
  try {
    let editing: any = null
    if (item) editing = {
      uid: item.uid,
      type,
      item,
      pristine: true,
    }
    dispatch(setSharedKey({ key: 'editing', value: editing }))
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}
