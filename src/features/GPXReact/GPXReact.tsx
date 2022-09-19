import * as React from 'react';
import {
  useFeatureSelect,
} from "../Shared/store/hooks";
import {useLocation} from "react-router-dom";
import {
  // useMediaQuery,
  Box,
  Grid,
} from "@mui/material";
import {
  selectGPXReact,
  InfiniteMenu,
  Bottombar,
  Topbar,
  Generic,
  Advert,
} from "../GPXReact";

export default function GPXReact() {
  const gpxReact = useFeatureSelect( selectGPXReact );
  const location = useLocation();
  const {pathname} = location;
  const {tracks} = gpxReact;
  // console.log ("tracks",tracks );
  let track = null;
  let trackPath = pathname;
  for(let i =0; i < tracks.length; i++){
    if (trackPath.slice(1,trackPath.length) === tracks[i].value.slug){
      track = tracks[i];
      break;
    }
  }
  if(pathname === "/"){
    return (
      <React.Fragment>
        <Topbar />
        <Grid container sx={{mb:5}}>
          <Grid item xs={12} md={4}>  
            <InfiniteMenu defaultOpen />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{pr:1}}>
              <Advert />
            </Box>
          </Grid>
          </Grid>
        <Bottombar />
      </React.Fragment>
    )
  }

  return (<React.Fragment>
            <Topbar />
            <Grid container sx={{mb:10}}>
              <Grid item xs={12} md={4}>
                  <InfiniteMenu />
              </Grid>
              <Grid item xs={12} md={8}>
                <Generic track={track} setMode={"single"} />
              </Grid>
            </Grid>
            <Bottombar />
          </React.Fragment>);
};
/*
  <pre>{JSON.stringify(item, null, 2)}</pre>
*/