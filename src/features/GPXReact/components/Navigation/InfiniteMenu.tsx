import * as React from 'react';
import {
    useFeatureSelect,
    useFeatureDispatch,
} from "../../../Shared/store/hooks";
import {
    Icon,
} from "../../../Shared";
import {
    goTo,
    selectGPXReact,
} from "../../";
import {
    useMediaQuery,
    Button,
    Box,
    List,
    Paper,
    MenuItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import {
    InfiniteMenuShape, 
    WierdShape,
} from "../../types";

export default function InfiniteMenu(props:InfiniteMenuShape) {
    let open = true;
    let isProd = true;
    const dispatch = useFeatureDispatch();
    const gpxReact = useFeatureSelect( selectGPXReact );
    const {tracks} = gpxReact;
    // if (showInfiniteMenu) open = showInfiniteMenu;
    
    const host = window.location.host;
    if (host !== process.env.REACT_APP_PROD_HOST) isProd = false;
    const isMobile = !useMediaQuery("(min-width:900px)");
    console.log ("isMobile", isMobile);
    if(isMobile) open = false;

    const handleMenuClick = (slug: string) => {
        dispatch(goTo({
            renderAs: "internal",
            options: {
              slug,
              isProd,
            },
        }));
    };

    return (
        <Box sx={{m:0.5}}>

            <Button
                fullWidth
                color="primary"
                variant="contained"
                id="infinite-button"
                aria-controls={open ? 'infinite-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                }}>
                <Icon icon="imenu" />
                <span style={{marginLeft:8,marginRight:8}}>
                    Menu
                </span>
            </Button>


            { open ? <Paper>
                <List id="infinite-menu">
                    { tracks.map((item:WierdShape, i: number) => {
                        const {
                            title,
                            icon,
                            slug,
                            tags,
                            category,
                        } = item.value;
                        if (i > 4) return null
                        let secondaryText = <React.Fragment>
                                                {category ? category.toString() : null}
                                                
                                                {tags ? tags.toString() : null}
                                            </React.Fragment>;

                        if(tags){
                            secondaryText = tags.toString();
                        };
                        return (<MenuItem 
                                    key={`track_${i}`}
                                    onClick={() => {
                                        handleMenuClick(slug);
                                    }}>
                                    <ListItemIcon>
                                        <Icon icon={icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={title}
                                        secondary={secondaryText}
                                    />
                                </MenuItem>);
                    })}
                </List>
            </Paper> : null }
            
            <Button
                fullWidth
                color="primary"
                variant="contained"
                id="infinite-button"
                aria-controls={open ? 'infinite-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                }}>
                <Icon icon="imenu" />
                <span style={{marginLeft:8,marginRight:8}}>
                    More...
                </span>
            </Button>
        </Box>
    );
}
