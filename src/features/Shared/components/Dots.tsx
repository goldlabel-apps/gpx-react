import * as React from 'react'
import {
  Box,
} from "@mui/material"

export default function Dots() {
  
  // const [ dots, setDots] = React.useState<string>( "..." )
  const dots = "..."
  // const [ dir, setDir] = React.useState<string>( "less" )
  // const [ started, setStarted] = React.useState<boolean>( false )
  
  // React.useEffect(() => {
  //   if (!started){
      
  //     setInterval(() => {
  //       console.log("dir", dir)
  //       if (dir === "less"){
  //         if (dots === "") {
  //           setDots(".")  
  //           setDir("more")
  //         } else{
  //           console.log("dots", dots)
  //           if (dots === "...") {
  //             console.log ("setDots")
  //           }
  //           if (dots === "..") setDots(".")
  //           if (dots === ".") setDots("")
  //         }
  //       }
  //       if (dir === "more"){
  //         if (dots === "...") {
  //           setDots("..")      
  //           setDir("less")
  //         } else{
  //           if (dots === "") setDots(".")
  //           if (dots === ".") setDots("..")
  //           if (dots === "..") setDots("...")
  //         }
  //       }
  //     }, 1000) 
  //   }
  //   setStarted(true)
  // })

  return (
      <Box sx={{mt: 1.2, ml: 0.35}}>
        { dots }
      </Box>
  )
}
