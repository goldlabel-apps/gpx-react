import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const goTo = (payload: any): AppThunk => async (dispatch: any) => {
  try {
    console.log("goTo", payload);
    const { renderAs, options } = payload;
    const { category, url } = options;
    
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "success",
      message: `render ${category} as... ${renderAs} `,
    }}));
    return true;
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}