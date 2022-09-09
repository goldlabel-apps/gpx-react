import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../../featuresStore"

export interface SysError {
  severity: string,
  code: number | string
  message: string
}

export interface Sites {
  error: SysError | null
  endpoints: any
  async: any
  siteList: (any)[]
  filter: string
}

const initialState: Sites = {
  error: null,
  endpoints: {
    create: {
      url: `${process.env.REACT_APP_BASE_URL}site`,
      method: "POST",
      example:{
        "domain":"testing54.com",
        "logo":"logo.png",
        "title": "tg53",
        "mainLogoColor":"#FFF",
        "version":[0,0,0],
        "region": "us-east-1"
      },
    },
    read: {
      url: `${process.env.REACT_APP_BASE_URL}sites`,
      method: "GET"
    },
    update: {
      url: `${process.env.REACT_APP_BASE_URL}site/update`,
      method: "PUT"
    },
    del: {
      url: `${process.env.REACT_APP_BASE_URL}site/delete`,
      method: "DELETE"
    }
  },
  async: {
    initted: false,
    message: "",
    creating: false,
    created: false,
    reading: false,
    read: false,
    updating: false,
    updated: false,
    deleting: false,
    deleted: false,
  },
  siteList: [],
  filter: "",
}

export const sitesSlice = createSlice({
  name: 'sites',
  initialState,
  reducers: {
    setSitesAsync: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload
      state.async[key] = value
    },
    setSitesKey: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectSites = (state: RootState) => state.sites
export const { setSitesKey, setSitesAsync } = sitesSlice.actions
export default sitesSlice.reducer
