import * as React from 'react';
import {
    Divider,
  Typography,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import {Icon} from "../../../Shared";

export default function MenuItems() {

    const handleMenuClose = () => {
        return false;
    }
    let isProd = true;
    const host = window.location.host;
    if (host !== process.env.REACT_APP_PROD_HOST) isProd = false;
    
    return (
        <React.Fragment>

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

            

            <Divider />

            
            
            <MenuItem sx={{width: 200}} onClick={() => {
                window.open("https://github.com/listingslab-software/gpx-react", "_blank")
                handleMenuClose()
            }}>
                <ListItemIcon>
                    <Icon icon="github" color="primary" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body2">
                        Open Source
                    </Typography>
                </ListItemText>
            </MenuItem>

            { !isProd ? <MenuItem sx={{width: 200}} onClick={() =>{
                window.open("https://gpx-react.web.app", "_blank")
                handleMenuClose()
            }}>
                <ListItemIcon>
                    <Icon icon="link" color="primary" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body2">
                        PROD
                    </Typography>
                </ListItemText>
            </MenuItem> : null }



                
        </React.Fragment>
    );
}
/*
<MenuItem sx={{width: 200}} onClick={() => {
                window.open("/diving", "_self")
                handleMenuClose()
            }}>
                <ListItemIcon>
                    <Icon icon="dive" color="primary" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body2">
                        Diving
                    </Typography>
                </ListItemText>
            </MenuItem>

            <MenuItem sx={{width: 200}} onClick={() => {
                window.open("/spearfishing", "_self")
                handleMenuClose()
            }}>
                <ListItemIcon>
                    <Icon icon="spearo" color="primary" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="body2">
                        Spearfishing
                    </Typography>
                </ListItemText>
            </MenuItem>
*/