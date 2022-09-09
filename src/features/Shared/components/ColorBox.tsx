import * as React from 'react'
import {
  Box,
} from "@mui/material"

export const ColorBox = (props: any) => {
    let { color } = props
    if ( !color ) {
        // console.warn( "Set ta color prop, goddammit :)")
        color = "rgba(47, 54, 74 ,1)"
    }
    return (
        <Box
            style={{ 
            width: 24,
            height: 24,
            backgroundColor: color,
            borderRadius: 8,
            boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
            border: "3px solid #fff",
            cursor: "pointer",
            }}
        />
    )
}
