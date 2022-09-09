import axios from "axios"
import { AppThunk } from "../../../featuresStore"
import { setBannerKey } from "../slice"
import { setSharedKey } from "../../../Shared"
import { setBannersAsync, read } from "../../"
import { getFeaturesStore } from "../../../../"

const start = (dispatch: any) => {
    dispatch(setBannersAsync({ key: 'message', value: `creating...` }))
    dispatch(setBannersAsync({ key: 'creating', value: true }))
    dispatch(setBannersAsync({ key: 'created', value: false }))
}

const finish = (dispatch: any) => {
  dispatch(setBannersAsync({ key: 'message', value: "" }))
  dispatch(setBannersAsync({ key: 'creating', value: false }))
  dispatch(setBannersAsync({ key: 'created', value: true }))
  dispatch(read());
}

export const create = ( displayName: string ): AppThunk => async (dispatch: any) => {
  try {
    start(dispatch)
    const {bannersEndpoints} = getFeaturesStore().getState().shared.fakeData;
    const endpoint = bannersEndpoints.create.url
    axios
      .post( endpoint, {
        "sk": "sk_value",
        "meta":{ displayName },
        updated: Date.now(),
      })
      .then(function (res) {
        const {data} = res.data.response;
        const { pk } = data;
        if (pk){
          const {displayName} = data.meta;
          dispatch(setSharedKey({ key: 'notifying', value: {
            severity: "success",
            message: `"${displayName}" created`,
          }}))
        } else {
          dispatch(setSharedKey({ key: 'notifying', value: {
            severity: "error",
            message: res.data,
          }}))
        }
        finish(dispatch)
      })
      .catch(function (error) {
        dispatch(setBannerKey({ key: 'error', value: {
          severity: "error",
          code: "BC-101",
          message: error.toString(),
        }}))
        finish(dispatch)
      })
  } catch (error: any) {
    dispatch(setBannerKey({ key: 'error', value: {
      severity: "error",
      code: "BC-102",
      message: error.toString()
    }}))
    finish(dispatch)
  }
}
