import * as React from 'react';
import {
  useFeatureSelect,
  // useFeatureDispatch,
} from "../Shared/store/hooks";
import {useLocation} from "react-router-dom";
import {
  selectGPXReact,
} from "../GPXReact";
import {
  Grid,
} from "@mui/material";
import {
  Track,
  Bottombar,
  Topbar,
} from "../GPXReact";

export default function GPXReact() {

  const gpxReact = useFeatureSelect( selectGPXReact );
  const {tracks} = gpxReact.gpxData;
  const location = useLocation();
  const {pathname} = location
  console.log ("pathname", pathname)
  
  return (
    <React.Fragment>
      <Topbar />
      <Grid container>
        { !tracks.length ? null : <React.Fragment>
          { tracks.map((item: any, i: number) => {
            return (<Grid 
                      key={`track_${i}`}
                      item xs={12} sm={6}>
                      <Track track={item.value}/>
                    </Grid>)
          })}
          </React.Fragment>}
      </Grid>
      <Bottombar />
    </React.Fragment>
  )
};
/*
<pre>{JSON.stringify(item, null, 2)}</pre>
*/