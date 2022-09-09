import axios from "axios"
import { AppThunk } from "../../../featuresStore"
import { setSitesKey, setSitesAsync } from "../slice"
import {getFeaturesStore} from "../../../../"

const start = (dispatch: any) => {
  dispatch(setSitesAsync({ key: 'initted', value: true }))
  dispatch(setSitesAsync({ key: 'message', value: "loading..." }))
  dispatch(setSitesAsync({ key: 'reading', value: true }))
  dispatch(setSitesAsync({ key: 'read', value: false }))
}

const finish = (dispatch: any) => {
  dispatch(setSitesAsync({ key: 'message', value: "" }))
  dispatch(setSitesAsync({ key: 'reading', value: false }))
  dispatch(setSitesAsync({ key: 'read', value: true }))
}

export const read = (): AppThunk => async (dispatch: any) => {
  try {
    start(dispatch)
    const {sitesEndpoints} = getFeaturesStore().getState().shared.fakeData;
    const endpoint = sitesEndpoints.read.url
    axios
      .get(endpoint)
      .then(function ( res ) {
        const { response } = res.data;
        if ( response ){
          const { code } = response;
          if (code === 1054){
            dispatch(setSitesKey({ key: 'error', value: {
              ...response,
            }}))
          }
          const items = response.data["Items"];
          if (items) dispatch(setSitesKey({ key: 'siteList', value: items }))
        }
        finish(dispatch)
      })
      .catch(function (error) {
        dispatch(setSitesKey({ key: 'error', value: {
          severity: "info",
          code: "SR-101",
          message: error.toString(),
        }}))
        finish(dispatch)
      })
  } catch (error: any) {
    dispatch(setSitesKey({ key: 'error', value: {
      severity: "error",
      code: "SR-102",
      message: error.toString()
    }}))
    finish(dispatch)
  }
}
