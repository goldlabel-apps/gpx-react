import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const navigateTo = (path: string, target?: string): AppThunk => async (dispatch: any) => {
  try {
    console.log ("action > navigateTo > ", path, target);
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "warning",
      message: `path ${path} target ${target}`,
    }}));
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}
