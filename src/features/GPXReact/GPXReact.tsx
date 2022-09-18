import * as React from 'react';
import {
  useFeatureSelect,
} from "../Shared/store/hooks";
import {useLocation} from "react-router-dom";
import {
  useMediaQuery,
  Box,
  Grid,
} from "@mui/material";
import {
  selectGPXReact,
  TrackListItem,
  Bottombar,
  Topbar,
  Generic,
  Advert,
} from "../GPXReact";

export default function GPXReact() {
  const isMobile = useMediaQuery("(min-width:900px)");
  const gpxReact = useFeatureSelect( selectGPXReact );
  const {tracks} = gpxReact;
  const location = useLocation();
  const {pathname} = location;
  
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
          
          { isMobile ? <Grid item xs={12} md={4}>
              <Grid container>
                { !tracks.length ? null : <React.Fragment>
                { tracks.map((item: any, i: number) => {
                  return (<Grid 
                            key={`track_${i}`}
                            item xs={12}>
                            <TrackListItem track={item.value} setMode={"list"}/>
                          </Grid>)
                })}
                </React.Fragment>}
              </Grid>
            </Grid> : null }

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
                <Grid container sx={{mt:0.5}}>
                { !tracks.length ? null : <React.Fragment>
                  { tracks.map((item: any, i: number) => {
                            return (<Grid 
                                      key={`track_${i}`}
                                      item xs={12}>
                                      <TrackListItem track={item.value} setMode={"list"}/>
                                    </Grid>)
                          })}
                          </React.Fragment>}
                </Grid>
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