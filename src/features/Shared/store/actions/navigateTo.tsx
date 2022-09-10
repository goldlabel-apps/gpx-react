import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const navigateTo = (item: any, target?: string): AppThunk => async (dispatch: any) => {
  try {
    if (!target){
      console.log ("navigateTo > ", item, target);
      dispatch(setSharedKey({ key: 'notifying', value: {
        severity: "info",
        message: `external ${item.uid} target ${target}`,
      }}));
    } else {
      window.open(item.url,target);
    }
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}
