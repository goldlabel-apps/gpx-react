import * as React from 'react';
import {
    useFeatureDispatch,
  } from "../../../Shared/store/hooks";
import {
  Divider,
  Typography,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import {Icon} from "../../../Shared";
import {goTo} from "../../../GPXReact";

export default function MenuItems() {
    const dispatch = useFeatureDispatch();
    const handleMenuClose = () => {
        return false;
    }
    let isProd = true;
    const host = window.location.host;
    if (host !== process.env.REACT_APP_PROD_HOST) isProd = false;
    
    return (
        <React.Fragment>

            { !isProd ? <React.Fragment>
                <MenuItem sx={{width: 200}} onClick={() =>{
                    dispatch(goTo({
                        renderAs: "external",
                        options: {
                            url: "https://divemalta.app"
                        }
                    }));
                    handleMenuClose();
                }}>
                    <ListItemIcon>
                        <Icon icon="link" color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body2">
                            divemalta.app
                        </Typography>
                    </ListItemText>
                </MenuItem>
                <Divider />
            </React.Fragment> : null }

            <MenuItem sx={{width: 200}} onClick={() =>{            
                dispatch(goTo({
                    renderAs: "internal", 
                    options: {
                        url: "/",
                    },
                }));
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
            <MenuItem sx={{width: 200}} onClick={() => {
                dispatch(goTo({
                    renderAs: "external",
                    options: {
                        url: "https://github.com/listingslab-software/gpx-react"
                    }
                }));
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

        </React.Fragment>
    );
}
