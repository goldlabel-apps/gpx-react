import React from 'react'
import {
    useFeatureDispatch,
} from "../../Shared/store/hooks"
import {
    Box,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
} from "@mui/material"
import {
    useFeatureSelect,
} from "../../Shared/store/hooks"
import {
    selectSites,
} from "../"
import {
    select,
} from "../../Shared"

export default function SitesList() {
    const dispatch = useFeatureDispatch()
    const sites = useFeatureSelect(selectSites)
    const { 
        siteList,
    } = sites
    if ( typeof siteList === "string" ) return null

    return (
        <List dense>
            { siteList.map(( item: any, i: number ) => {
                const { title, logo, archived } = item
                let hidden = archived;
                if (!hidden) hidden = false;
                return <React.Fragment key={ `site_${i}` }>
                            <Box sx={{display:"flex"}}>
                                <ListItem 
                                    button
                                    onClick={( e: React.MouseEvent ) => {
                                        e.preventDefault()
                                        dispatch(select(item, "site"))
                                    }}>
                                    {logo !== "" && logo !== "none" ? <ListItemAvatar>
                                        <Avatar src={logo} />
                                    </ListItemAvatar> : <Box sx={{width: 56}}/> }
                                    <ListItemText
                                        primary={ title }
                                    />
                                </ListItem>
                            </Box>
                        </React.Fragment>
                        
            })}
        </List>
    )
}
