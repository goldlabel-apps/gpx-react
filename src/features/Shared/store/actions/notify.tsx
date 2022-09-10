import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const notify = (payload: any): AppThunk => async (dispatch: any) => {
  try {
    console.log ("notify", notify);

    // let editing: any = null
    // if (item) editing = {
    //   uid: item.uid,
    //   type,
    //   item,
    //   pristine: true,
    // }
    // dispatch(setSharedKey({ key: 'editing', value: editing }))

  } catch (error: any) {
    dispatch(setSharedKey({ key: 'error', value: {
      severity: "error",
      code: "N-101",
      message: error.toString()
    }}))
  }
}
