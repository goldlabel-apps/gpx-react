import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const goTo = (payload: any): AppThunk => async (dispatch: any) => {
  try {
    const { renderAs, options } = payload;
    const { category, url, slug } = options;
    if(renderAs === "external"){
      window.open(url, "_blank");
    }
    if(renderAs === "internal"){
      window.open(slug, "_self");
    }
    if (category){
      dispatch(setSharedKey({ key: 'notifying', value: {
        severity: "success",
        message: `render ${category} as... ${renderAs} `,
      }}));
    }
    return true;
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}
