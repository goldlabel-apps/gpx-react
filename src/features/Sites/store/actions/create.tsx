import axios from "axios"
import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"
import { setSitesAsync, read } from "../../"
import { getFeaturesStore } from "../../../../"

const start = (dispatch: any) => {
  dispatch(setSitesAsync({ key: 'message', value: `creating...` }))
  dispatch(setSitesAsync({ key: 'creating', value: true }))
  dispatch(setSitesAsync({ key: 'created', value: false }))
}

const finish = (dispatch: any) => {
  dispatch(setSitesAsync({ key: 'message', value: "" }));
  dispatch(setSitesAsync({ key: 'creating', value: false }));
  dispatch(setSitesAsync({ key: 'created', value: true }));
  dispatch(read());
}

export const create = ( displayName: string ): AppThunk => async (dispatch: any) => {
  try {
    start(dispatch)

    const {sitesEndpoints} = getFeaturesStore().getState().shared.fakeData;
    const endpoint = sitesEndpoints.create.url

    axios
      .post(endpoint, {
        "sk": "site-sk-test",
        "title": displayName,
        "domain": "example.com",
        "region": "us-east-1",
        "logo": "https://wei-zang.com/logos/dt9_inv.png",
        "mainLogoColor": "#FFFFFF",
        "version": [0,0,3],
      })
      .then(function (res) {
        finish(dispatch)
        const {data} = res.data.response;
        const { pk } = data;
        if (pk){
          const {title} = data;
          dispatch(setSharedKey({ key: 'notifying', value: {
            severity: "success",
            message: `"${title}" created`,
          }}))
        } else {
          dispatch(setSharedKey({ key: 'notifying', value: {
            code: "CS-101",
            severity: "error",
            message: res.data,
          }}))
        }
      })
      
  } catch (error: any) {
    console.log("create site error", error)
    dispatch(setSharedKey({ key: 'notifying', value: {
      code: "CS-201",
      severity: "error",
      message: `createSite ${error.toString()}`
    }}))
  }
}
