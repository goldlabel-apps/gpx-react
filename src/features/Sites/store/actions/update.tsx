import axios from "axios"
import { AppThunk } from "../../../featuresStore"
import {getFeaturesStore} from "../../../../"
import { read } from "../../"
import {
  setSharedKey,
  select,
} from "../../../Shared";
import { setSitesAsync } from "../../";

const start = (dispatch: any) => {
  dispatch(setSitesAsync({ key: 'message', value: `updating...` }))
  dispatch(setSitesAsync({ key: 'updating', value: true }))
  dispatch(setSitesAsync({ key: 'updated', value: false }))
}

const finish = (dispatch: any) => {
  dispatch(setSitesAsync({ key: 'message', value: "" }));
  dispatch(setSitesAsync({ key: 'updating', value: false }));
  dispatch(setSitesAsync({ key: 'updated', value: true }));
  dispatch(read());
}

export const update = (editing: any): AppThunk => async (dispatch: any) => {
  try {
    start(dispatch);
    const {shared} = getFeaturesStore().getState()
    const {sitesEndpoints} = shared.fakeData;
    const {editing} = shared;
    const endpoint = sitesEndpoints.update.url
    const {title} = editing.item
    dispatch(select(null, ""));
    axios
      .post(endpoint, editing.item)
      .then(function (res) {
        dispatch(setSharedKey({ key: 'notifying', value: {
          severity: "success",
          message: `"${title}" updated`,
        }}))
        finish(dispatch);
      })
      .catch(function (error) {
        dispatch(setSharedKey({ key: 'notifying', value: {
          severity: "error",
          message: error.toString(),
        }}))
      })
      .then( function() {
        finish(dispatch);
      })
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: error.toString(),
    }}))
    finish(dispatch);
  }
}
