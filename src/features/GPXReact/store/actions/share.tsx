import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const share = (uid: string): AppThunk => async (dispatch: any) => {
  try {
    console.log ("action > share > ", uid);
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "warning",
      message: `Open share menu for ${uid}`,
    }}));
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}
