// import axios from "axios"
import { AppThunk } from "../../../featuresStore"
import { setSitesKey } from "../slice"
// import { read } from "../"

export const del = (site: any): AppThunk => async (dispatch: any) => {
  try {
    console.log ( "del" , site)
    // const { pk, sk , meta} = banner
    // const { displayName } = meta
    // const endpoint = `http://localhost:3000/dynamic-banners/delete`
    // const payload: any = {
    //   displayName,
    //   pk,
    //   sk,
    // }
    // // console.warn( "payload", payload )

    // dispatch(setSitesKey({ key: 'loading', value: true }))
    // dispatch(setSitesKey({ key: 'error', value: null }))
    // dispatch(setSitesKey({ key: 'pk', value: null }))
    // dispatch(setSitesKey({ key: 'loadingText', value: `Deleting "${ displayName }" ...` }))

    // axios
    // .delete(endpoint, payload)
    //   .then(function ( res ) {
    //     const response = res.data.response
    //     console.warn("response", response)
    //     const { code } = response
    //     if (code === 200){
    //       dispatch(setSitesKey({ key: 'feedback', value: {
    //           ...response,
    //       }}))
    //       // dispatch(read())
    //     }
        
    //   })
    //   .catch(function (error) {
    //     // console.warn("error", error)
    //     dispatch(setSitesKey({ key: 'feedback', value: { 
    //       severity: "error",
    //       message: error.toString() 
    //     }}))
    //   })
    //   .then(function () {
    //     dispatch(setSitesKey({ key: 'loading', value: false }))
    //     dispatch(setSitesKey({ key: 'loaded', value: true }))
    //     dispatch(setSitesKey({ key: 'loadingText', value: `` }))
    //     // dispatch(setSitesKey({ key: 'error', value: null }))
    //     dispatch(read())
    //   })
  } catch (error: any) {
    dispatch(setSitesKey({ key: 'error', value: { 
      severity: "error",
      message: error.toString() 
    } 
  }))
  }
}
