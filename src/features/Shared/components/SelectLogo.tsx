import * as React from 'react';
import {
    useFeatureSelect,
} from "../../Shared/store/hooks";
import {selectShared} from "../../Shared";
import {
  Avatar,
  Box,
  InputLabel,
  MenuItem,
  ListItemText,
  ListItemAvatar,
  FormControl,
} from "@mui/material";
// import {Icon} from "../../Shared";
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLogo( props: any ) {

    const shared: any = useFeatureSelect( selectShared )
    const {logos} = shared;
    const choices: any = []
    for (let i=0; i<logos.length; i++ ){
        choices.push({
            // @ts-ignore
            label: logos[i].label, value: logos[i].value
        });
    }

    const { field } = props
    const { label, id, value, onSelect } = field
    const [selectedValue, setSelectedValue] = React.useState( value )

    const handleChange = (e: SelectChangeEvent) => {
      const { value } = e.target
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
              const { label, value } = item;
              return <MenuItem 
                        key={`logo_${i}`}
                        sx={{display:"flex"}}
                        value={ value }>
                          { value !== "none" ? <ListItemAvatar>
                            <Avatar 
                              sx={{ width: 24, height: 24}}
                              src={value} />
                          </ListItemAvatar> : null }
                        <ListItemText primary={ label }/>
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