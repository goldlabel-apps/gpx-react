import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const navigateTo = (track: any): AppThunk => async (dispatch: any) => {
  try {
      // console.log ("navigateTo > ", track);
      // dispatch(setSharedKey({ key: 'notifying', value: {
      //   severity: "success",
      //   message: `NAVIGATION > ${track.path}`,
      // }}));
      window.open(track.path, "_self");
      return true;

  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}
