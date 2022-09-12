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
                            url: "https://"
                        }
                    }));
                    handleMenuClose();
                }}>
                    <ListItemIcon>
                        <Icon icon="link" color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body2">
                            PROD
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
                        url: "dkasjdjl"
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