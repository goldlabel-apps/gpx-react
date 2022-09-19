import * as React from 'react';
import {
    useFeatureDispatch,
  } from "../../../Shared/store/hooks";
import {
  Button,
  Box,
} from "@mui/material"
import {Icon} from "../../../Shared";
import {goTo} from "../../../GPXReact";

export default function InfiniteMenu() {
    const dispatch = useFeatureDispatch();
    let isProd = true;
    const host = window.location.host;
    if (host !== process.env.REACT_APP_PROD_HOST) isProd = false;
    
    return (
        <Box sx={{mb:1, mt:1}}>
            <Button
                fullWidth
                variant="contained"
                onClick={(e:React.MouseEvent) => {
                    e.preventDefault();
                    dispatch(goTo({
                        renderAs: "internal",
                        options: {
                            url: "/infinite-menu"
                        }
                    }));
                }}>
                <Icon icon="imenu" />
                <span style={{marginLeft:8,marginRight:8}}>
                    Menu
                </span>

            </Button>
        </Box>
    );
}
