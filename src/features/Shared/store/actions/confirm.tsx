import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"
import {archive} from "../../../Banners"

export const confirm = (action: string, options?: any ): AppThunk => async (dispatch: any) => {
  try {
    const {displayName} = options.item.meta
    if (action === "banner_archive"){
      dispatch(setSharedKey({ key: 'confirming', value: {
        confirmText: `Archive "${displayName}"?`,
        action: "banner_archive",
        options,
      }}))
    }
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
  }
}

export const onConfirm = (confirmed: boolean, action: string, options?: any): AppThunk => async (dispatch: any) => {
    try {
      if (confirmed && action === "banner_archive"){
        const {pk} = options.item;
        dispatch(archive(pk));
      }
      dispatch(setSharedKey({ key: 'confirming', value: null }))
    } catch (error: any) {
      dispatch(setSharedKey({ key: 'notifying', value: {
        severity: "error",
        message: error.toString(),
      }}))
    }
  }
  