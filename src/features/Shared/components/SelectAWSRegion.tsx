import * as React from 'react'

import {
  Box,
  InputLabel,
  MenuItem,
  ListItemText,
  FormControl,

} from "@mui/material"
import Select, { SelectChangeEvent } from '@mui/material/Select'
  
const regions = {
  "us-east-1": "US East (N. Virginia)",
  "us-east-2": "US East (Ohio)",
  "us-west-1": "US West (N. California)",
  "us-west-2": "US West (Oregon)",
  "ca-central-1": "Canada (Central)",
  "eu-west-1": "EU (Ireland)",
  "eu-central-1": "EU (Frankfurt)",
  "eu-west-2": "EU (London)",
  "eu-west-3": "EU (Paris)",
  "eu-north-1": "EU (Stockholm)",
  "ap-northeast-1": "Asia Pacific (Tokyo)",
  "ap-northeast-2": "Asia Pacific (Seoul)",
  "ap-southeast-1": "Asia Pacific (Singapore)",
  "ap-southeast-2": "Asia Pacific (Sydney)",
  "ap-south-1": "Asia Pacific (Mumbai)",
  "sa-east-1": "South America (São Paulo)",
  "us-gov-west-1": "US Gov West 1",
  "us-gov-east-1": "US Gov East 1"
}
const choices: any = []
for (const prop in regions) {
  choices.push({
    // @ts-ignore
    label: regions[prop], value: prop
  })
}

export default function SelectAWSRegion( props: any ) {

    const { field } = props
    const { label, id, defaultValue, onSelect } = field
    const [selectedValue, setSelectedValue] = React.useState( defaultValue )

    const handleChange = (e: SelectChangeEvent) => {
      const { value } = e.target
      setSelectedValue(value as string)
      onSelect(e)
    }

    if (!choices) return null
  
    return (
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel id={`${id}-label`}>
            { label }
          </InputLabel>
          <Select
            labelId={`${id}-label`}
            id={ id }
            value={ selectedValue }
            label={ label }
            onChange={ handleChange }>
              
            { choices.map((item: any, i: number) => {
              const { label, value } = item
              return <MenuItem 
                        key={`region_${i}`}
                        value={ value }>
                          <ListItemText 
                            primary={ label }
                            secondary={ value }
                          />
                      </MenuItem>
            })}
          </Select>
        </FormControl>
      </Box>
    )
}

/**/