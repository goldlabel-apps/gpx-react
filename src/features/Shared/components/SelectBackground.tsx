import * as React from 'react'
import {
    useFeatureSelect,
} from "../../Shared/store/hooks"
import {selectShared} from "../../Shared"
import {
  Box,
  InputLabel,
  MenuItem,
  ListItemText,
  FormControl,
} from "@mui/material"
// import {Icon} from "../../Shared";
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function SelectBackground( props: any ) {

    const shared: any = useFeatureSelect( selectShared )
    const {backgroundImages} = shared;
    const choices: any = []
    for (let i=0; i<backgroundImages.length; i++ ){
        choices.push({
            // @ts-ignore
            label: backgroundImages[i].label, value: backgroundImages[i].value
        });
    }

    const { field } = props
    const { label, id, value, onSelect } = field
    const [selectedValue, setSelectedValue] = React.useState( value )

    const handleChange = (e: SelectChangeEvent) => {
      const { value } = e.target
      // console.log ("handleChange", value)
      setSelectedValue(value as string)
      onSelect( value )
    }

    if (!choices) return null
  
    return (
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel id={`${id}-label`}>
            { label }
          </InputLabel>
          <Select
            id={id}
            labelId={`${id}-label`}
            value={selectedValue}
            label={label}
            onChange={ handleChange }>
            { choices.map((item: any, i: number) => {
              const { label, value } = item
              return <MenuItem 
                        key={`LOGO${i}`}
                        sx={{display:"flex"}}
                        value={ value }>
                        <ListItemText 
                          primary={ label }
                        />
                    </MenuItem>
            })}
          </Select>
        </FormControl>
      </Box>
    )
}

/*

<Box sx={{}}>
                          <Avatar src={value} />
                        </Box>
                        */