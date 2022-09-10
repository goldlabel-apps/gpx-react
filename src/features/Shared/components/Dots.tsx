import * as React from 'react'
import {
  Box,
} from "@mui/material"

export default function Dots() {
  
  // const [ dots, setDots] = React.useState<string>( "..." )
  const dots = "..."
  // const [ dir, setDir] = React.useState<string>( "less" )
  // const [ started, setStarted] = React.useState<boolean>( false )
  


  return (
      <Box sx={{mt: 1.2, ml: 0.35}}>
        { dots }
      </Box>
  )
}
