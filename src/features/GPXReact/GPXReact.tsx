import * as React from 'react'
import {
  Box,
  Grid,
} from "@mui/material"
import {Track} from "../GPXReact"

export default function GPXReact() {
  return (
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Track track={{
            title: "Maltese Islands",
            subheader: "Diving Guide",
            route: "/track-title",
            avatar: "/png/logo32.png",
            image: "/jpg/Maltese-Islands-Diving-Guide/Maltese-Islands-Diving-Guide_400.jpg",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices iaculis justo, vel ultrices sem sollicitudin eget.",
            moreInfo: "Ut blandit lacinia leo, eget faucibus lectus finibus volutpat. Mauris consectetur commodo sodales.",
          }}/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Track track={{
            title: "The Tugboat Rozi",
            subheader: "Diving Guide",
            route: "/track-title",
            avatar: "/png/logo32.png",
            image: "/jpg/The-Tugboat-Rozi/The-Tugboat-Rozi_400.jpg",
            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices iaculis justo, vel ultrices sem sollicitudin eget.",
            info: "Ut blandit lacinia leo, eget faucibus lectus finibus volutpat. Mauris consectetur commodo sodales.",
          }}/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Track track={{
            title: "The Tugboat Rozi",
            subheader: "Diving Guide",
            route: "/track-title",
            avatar: "/png/logo32.png",
            image: "/jpg/The-Tugboat-Rozi/The-Tugboat-Rozi_400.jpg",
            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices iaculis justo, vel ultrices sem sollicitudin eget.",
            info: "Ut blandit lacinia leo, eget faucibus lectus finibus volutpat. Mauris consectetur commodo sodales.",
          }}/>
        </Grid>
        
      </Grid>
  )
};
