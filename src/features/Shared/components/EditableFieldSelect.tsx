import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
  
  export default function EditableFieldSelect(props: any) {
    const { field } = props
    const { 
      label, 
      id,
      defaultValue,
      choices,
    } = field
    const [value, setValue] = React.useState( defaultValue )

    const handleChange = (e: SelectChangeEvent) => {
      const { value } = e.target
      setValue(value as string)
    }

    if (!choices) return null
  
    return (
      <Box sx={{ minWidth: 100, mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel id={`${id}-label`}>
            { label }
          </InputLabel>
          <Select
            labelId={`${id}-label`}
            id={ id }
            value={ value }
            label={ label }
            onChange={handleChange}
          >
            { choices.map((item: any, i: number) => {
              const { label, value } = item
              return <MenuItem 
                        key={`id_${i}`}
                        value={ value }
                      >
                          { label }
                      </MenuItem>
            })}       
          </Select>
        </FormControl>
      </Box>
    )
  }
