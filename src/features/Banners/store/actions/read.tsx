import axios from "axios"
import { AppThunk } from "../../../featuresStore"
import { setBannerKey, setBannersAsync } from "../slice"
import { getFeaturesStore } from "../../../../"

const start = (dispatch: any) => {
  dispatch(setBannersAsync({ key: 'initted', value: true }))
  dispatch(setBannersAsync({ key: 'message', value: "loading..." }))
  dispatch(setBannersAsync({ key: 'reading', value: true }))
  dispatch(setBannersAsync({ key: 'read', value: false }))
}

const finish = (dispatch: any) => {
  dispatch(setBannersAsync({ key: 'message', value: "" }))
  dispatch(setBannersAsync({ key: 'reading', value: false }))
  dispatch(setBannersAsync({ key: 'read', value: true }))
}

export const read = (): AppThunk => async (dispatch: any) => {
  try {
    start(dispatch)
    const {bannersEndpoints} = getFeaturesStore().getState().shared.fakeData;
    const endpoint = bannersEndpoints.read.url
    axios
      .get(endpoint)
      .then(function (res) {
        const response = res.data.response
        const { code } = response
        if ( typeof res.data === "string" ){
          dispatch(setBannerKey({ key: 'error', value: {
            severity: "warning",
            code: "Database Error",
            message: res.data,
          }}))
        }else{
          if (code === 200){
            const data = res.data.response.data.Items;
            // const transformedData: any = [];
            // for (let i=0; i<data.length; i++){
            //   console.log ("updated", data[i].meta.updated);
            //   transformedData.push({
            //     updated: data[i].meta.updated,
            //     ...data[i],
            //   });
            // }
            dispatch(setBannerKey({ key: 'bannerList', value: data }));
          }
          if (code === 1054){
            dispatch(setBannerKey({ key: 'error', value: {
              ...response,
            }}))
          }
        }
        finish(dispatch)
        
      })
      .catch(function (error) {
        let message = error.toString()
        if (error.code === "ERR_NETWORK"){
          message = `Endpoint "${endpoint}" not found`
        }
        dispatch(setBannerKey({ key: 'error', value: {
          severity: "error",
          code: "BR-101",
          message,
        }}))
        finish(dispatch)
      })
  } catch (error: any) {
    dispatch(setBannerKey({ key: 'error', value: {
      severity: "error",
      code: "BR-102",
      message: error.toString()
    }}))
    finish(dispatch)
  }
}

