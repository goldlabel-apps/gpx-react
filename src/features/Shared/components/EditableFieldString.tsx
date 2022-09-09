import * as React from 'react'
import {
  Box,
  TextField
} from "@mui/material"

export default function EditableFieldString( props: any) {

  const { field } = props
  const { id, label, autoFocus, value, variant, helperText, onChange } = field
  let customVariant = 'standard'
  if (variant) customVariant = variant
  const [ fieldValue, setFieldValue] = React.useState<null | string>( value ? value : '' )

  const onValueChange = (e: any) => {
    setFieldValue( e.target.value)
    onChange(e)
  }
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField 
            fullWidth
            autoFocus={autoFocus}
            color="primary"
            id={id} 
            label={label} 
            helperText={helperText}
            value={fieldValue}
            onChange={ onValueChange }
            // @ts-ignore
            variant={ customVariant }
          />
    </Box>
  )
}
