import * as React from 'react'
import { 
    Box,
    FormGroup,
    FormControlLabel,
    Checkbox,   
    IconButton, 
    Menu,
    MenuItem,
} from '@mui/material'
import { Sort } from "@mui/icons-material"

export default function Filters(props: any) {

    const { dataFilters, onFilterChange } = props
    const filtersArr = []
    for (let slug in dataFilters) {
        filtersArr.push(dataFilters[slug])
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const openFilters = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>

            <IconButton
                color="primary"
                onClick={openFilters}>
                <Sort />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <FormGroup>
                    { filtersArr.map((item: any, i: number) => {
                        const { 
                            slug, 
                            description,
                            value,
                        } = item
                        return (
                            <FormControlLabel 
                                sx={{ p:1.5 }}
                                key={`filter_${i}`}
                                control={<Checkbox 
                                            checked={ value }
                                            onClick={(e) => {
                                                e.preventDefault()
                                                onFilterChange(slug, !value)
                                                handleClose()
                                            }}
                                        />} 
                                label={ description } />
                        )
                    })}
                </FormGroup>
            </Menu>
        </React.Fragment>
    )
}
