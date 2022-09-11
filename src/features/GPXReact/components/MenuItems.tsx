import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material"
import {Icon} from "../../Shared";
import {
  ListItemIcon,
  ListItemText,
} from "@mui/material"

export default function MenuItems() {

    const handleMenuClose = () => {
        return false;
    }
    return (
        <React.Fragment>
            <MenuItem sx={{width: 200}} onClick={() =>{
                window.open("https://gpx-react.web.app/", "_blank")
                // handleMenuClose()
            }}>
            <ListItemIcon>
                <Icon icon="site" color="primary" />
            </ListItemIcon>
            <ListItemText>
                <Typography variant="body2">
                Prod
                </Typography>
            </ListItemText>
            </MenuItem>
            
            <MenuItem sx={{width: 200}} onClick={() =>{
            window.open("https://github.com/listingslab-software/gpx-react", "_blank")
            // handleMenuClose()
            }}>
            <ListItemIcon>
                <Icon icon="github" color="primary" />
            </ListItemIcon>
            <ListItemText>
                <Typography variant="body2">
                Git
                </Typography>
            </ListItemText>
            </MenuItem>

            <MenuItem sx={{width: 200}} onClick={() =>{            
                window.open("/", "_self")
                handleMenuClose()
                }}>
            <ListItemIcon>
                <Icon icon="refresh" color="primary"/>
            </ListItemIcon>
            <ListItemText>
                <Typography variant="body2">
                Reset
                </Typography>
            </ListItemText>
            </MenuItem>    
        </React.Fragment>
    );
}

/*
*/
