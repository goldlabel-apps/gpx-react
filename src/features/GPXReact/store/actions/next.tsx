import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const next = (uid: string): AppThunk => async (dispatch: any) => {
  try {
    console.log ("action > next > ", uid);
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "info",
      message: uid,
    }}));
    // dispatch(setSharedKey({ key: 'next', value: editing }))
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}
