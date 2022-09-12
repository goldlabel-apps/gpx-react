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
  TrackListItem,
  Bottombar,
  Topbar,
  Generic,
} from "../GPXReact";

export default function GPXReact() {

  const gpxReact = useFeatureSelect( selectGPXReact );
  const {tracks} = gpxReact.gpxData;
  const location = useLocation();
  const {pathname} = location
  
  let track = null;
  let trackPath = pathname;
  for(let i =0; i < tracks.length; i++){
    if (trackPath === tracks[i].value.path){
      track = tracks[i];
      break;
    }
  }
  if(pathname === "/"){
    return (
      <React.Fragment>
        <Topbar />
        <Grid container sx={{mb:10}}>
          { !tracks.length ? null : <React.Fragment>
            { tracks.map((item: any, i: number) => {
              return (<Grid 
                        key={`track_${i}`}
                        item xs={12} sm={6} md={4}>
                        <TrackListItem track={item.value} setMode={"list"}/>
                      </Grid>)
            })}
            </React.Fragment>}
        </Grid>
        <Bottombar />
      </React.Fragment>
    )
  }

  return (<React.Fragment>
            <Topbar />
              <Generic track={track} setMode={"single"} />
            <Bottombar />
          </React.Fragment>);
};
/*
  <pre>{JSON.stringify(item, null, 2)}</pre>
*/