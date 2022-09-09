import * as React from 'react'
import {
  Box,
  Typography,
} from "@mui/material"
import { 
  HexColorPicker,
  HexColorInput,
} from "react-colorful"
// import {
//   Icon,
// } from "../"
import { useClickOutside } from "../../Shared"
  
export const EditableFieldColor = (props: any) => {

  const { field } = props
  const { label, value, onSelectColor } = field
  const popover = React.useRef()
  const [color, setColor] = React.useState( value )
  const [isOpen, toggle] = React.useState(false)
  const close = React.useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  const onNewColor = (val: any) => {
    setColor(val)
    onSelectColor(val)
  }

  return (
    <Box style={{ 
      position: "relative",
    }}>
      <Box sx={{ display: "flex" }}>
        <Box
          style={{ 
            margin: 8,
            width: 32,
            height: 32,
            backgroundColor: color,
            borderRadius: 8,
            boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
            border: "3px solid #fff",
            cursor: "pointer",
            zIndex: 100,
          }}
          onClick={() => toggle(true)}
        />
        <Box sx={{ cursor: "pointer" }} onClick={() => toggle(true)}>
          <Typography variant="body2" sx={{ m: 1, mt: 1.5 }}>
            { label }
          </Typography>
        </Box>
      </Box>

      {isOpen && (
        <Box
          style={{ 
            zIndex: 12345678,
            position: "absolute",
            top: "calc(100% + 2px)",
            left: 36,
            borderRadius: 9,
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          }}
          ref={ popover }>
          <HexColorPicker 
            color={ color } 
            onChange={ onNewColor } 
          />
          <HexColorInput style={{ 
            border: "none",
            outline: "none",
            textAlign: "center",
            width: "100%", 
            padding: "4px",
          }} 
          color={ color } 
          onChange={ onNewColor } 
          />
        </Box>
      )}
    </Box>
  )
}
