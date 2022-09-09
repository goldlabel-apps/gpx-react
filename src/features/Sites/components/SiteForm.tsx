import React from 'react'
import {
    useFeatureSelect,
    useFeatureDispatch,
} from "../../Shared/store/hooks"
import {
    selectShared,
    edit,
    EditableFieldColor,
    EditableFieldString,
    SelectAWSRegion,
    SelectLogo,
} from "../../Shared"
import { 
    Box,
    Grid,
} from '@mui/material'

export default function BannerForm() {
    const dispatch = useFeatureDispatch();
    const shared = useFeatureSelect(selectShared);
    const {editing} = shared
    if (!editing) return null
    const {item} = editing
    const {title, logo, mainLogoColor, region} = item;
    return (
        <Box>
            
            <Box sx={{ m: 1, mb:3 }}>
                <EditableFieldString field={{
                    label: "Title",
                    id: `title`,
                    value: title,
                    onChange: (e: any) => {
                        e.preventDefault()
                        const {value} = e.target;
                        dispatch(edit({key: "title", value}))
                    }
                }}/>
            </Box>

            <Grid container>
                <Grid item sx={{flexGrow: 1}}> 

                    <Box sx={{ m: 1, mb:2}}>
                        <SelectLogo field={{
                            label: "Logo",
                            id: `logo`,
                            value: logo,
                            onSelect: (value: string) => { 
                                dispatch(edit({key: "logo", value}));
                            }
                        }}/>
                    </Box>

                </Grid>    
                { logo !== "" && logo !== "none" ? <Grid item>
                            <Box sx={{ m: 1, mt:1.5, textAlign: "center", }}>
                                <img style={{ maxWidth: 60}} src={logo} alt={title} />
                            </Box></Grid> : null } 
                        </Grid>

            <Box sx={{ m: 1, mb:4 }}>
                <EditableFieldColor field={{
                    label: "Primary Color",
                    id: `mainLogoColor`,
                    value: mainLogoColor,
                    onSelectColor: (color: string) => {
                        dispatch(edit({key: "mainLogoColor", value: color}))
                    }
                }}/>          
            </Box>

            <Box sx={{ m: 1, mb:4 }}>
                <SelectAWSRegion field={{
                    label:"AWS Region", 
                    id: 'region', 
                    defaultValue: region, 
                    onSelect: (e: any) => {
                        const {value} = e.target;
                        dispatch(edit({key: "region", value}))
                    }
                }} />
            </Box>

        </Box>
    )
}
