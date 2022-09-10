import * as React from 'react'
import {
  Grid,
} from "@mui/material"
import {
  Track,
  Bottombar,
  Topbar,
} from "../GPXReact"

export default function GPXReact() {
  return (
    <React.Fragment>
      <Topbar />
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Track track={{
            title: "Maltese Islands",
            // subheader: "Diving Guide",
            route: "/track-title",
            icon: "doc",
            image: "/jpg/Maltese-Islands-Diving-Guide/Maltese-Islands-Diving-Guide_400.jpg",
            body: "Maltese Islands Diving Guide Paperback – July 31, 1997 by Ned Middleton",
          }}/>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Track track={{
            title: "The Tugboat Rozi",
            // subheader: "Diving Guide",
            route: "/track-title",
            icon: "dive",
            image: "/jpg/The-Tugboat-Rozi/The-Tugboat-Rozi_400.jpg",
            body: "Rozi is one of the two wrecks in Cirkewwa on the northwest side of Malta, and one of the most popular dive sites in the Maltese islands. Rozi was a former tugboat that operated in Grand Harbour of Valletta. She was scuttled in 1992 as an underwater tourist attraction for submarine tours, and also became an artificial reef for scuba divers. Tugboat Rozi wreck is easily dived from the shore, and is located close to Patrol Boat P29 wreck.",
          }}/>
        </Grid>
        
      </Grid>
      <Bottombar />
    </React.Fragment>
  )
};
