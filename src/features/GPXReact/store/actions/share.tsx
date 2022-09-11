import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const share = (track: string): AppThunk => async (dispatch: any) => {
  try {
    console.log ("track", track);
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "success",
      message: `Opening "Share Menu" for ${JSON.stringify(track, null, 2)}`,
    }}));
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}
