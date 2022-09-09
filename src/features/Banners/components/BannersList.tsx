import React from 'react'
import {
    Box,
    Checkbox,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    IconButton,
    Typography,
} from "@mui/material"
import {
    useFeatureSelect,
    useFeatureDispatch,
} from "../../Shared/store/hooks"
import { 
    // archive,
    selectBanners,
} from "../../Banners"
import {
    confirm,
    bubbleSort,
    select,
    Icon,
    filterBanners,
} from "../../Shared"
       
export default function BannerList() {
    
    const dispatch = useFeatureDispatch()
    const banners = useFeatureSelect(selectBanners)
    const { 
        bannerList,
        filter,
    } = banners
    let filteredDocs = []
    if ( !bannerList ) return null 
    if (bannerList.length) filteredDocs = filterBanners(bannerList, filter);
    
    let ordered = bubbleSort(filteredDocs, "meta.updated");

    const showSelect = false;
    const showPreview = false;
    const showArchive = true;

    return (
            <List dense>
                { ordered.map(( item: any, i: number ) => {

                    let data = {
                        displayName: "", 
                        logo: "", 
                        updated: 0, 
                        archived: false,
                        offerHeader: "",
                        termsText: "",
                        CTAButtonText: "",
                    };
                    const {meta, assets, text} = item;
                    const {archived} = meta;
                    if (archived) return null;
                    if (meta){
                        const {displayName, updated, archived} = meta;
                        if (displayName) data.displayName = displayName;
                        if (updated) data.updated = updated;
                        if (archived) data.archived = archived;
                    }
                    if (text){
                        const {
                            offerHeader,
                            termsText,
                            CTAButtonText,
                        } = text;
                        if (offerHeader) data.offerHeader = offerHeader;
                        if (termsText) data.termsText = termsText;
                        if (CTAButtonText) data.CTAButtonText = CTAButtonText;
                    }
                    if (assets){
                        const {logo} = assets;
                        if (logo) data.logo = logo;
                    }

                    return <React.Fragment key={ `banner_${i}` }>
                                <Box sx={{display:"flex"}}>
                                    
                                    <ListItem 
                                        button
                                        onClick={( e: React.MouseEvent ) => {
                                            e.preventDefault()
                                            dispatch(select(item, "banner"))
                                        }}>
                                        { data.logo !== "none" ? <ListItemAvatar>
                                            <Avatar src={data.logo} />
                                        </ListItemAvatar> : <Box sx={{width: 55}} /> }
                                        
                                        
                                        <Box sx={{display:"block"}}>
                                            <Typography variant="body1">
                                                { data.displayName }
                                            </Typography>
                                            
                                        </Box>
                                       
                                    </ListItem>

                                    <Box sx={{mr:2}}>
                                        { showPreview ? <IconButton sx={{pr:1, pl:1}}>
                                                            <Icon icon="preview" color="primary"/>
                                                        </IconButton> : null }
                                        { showArchive ? <IconButton 
                                                            sx={{pr:1, pl:1}}
                                                            onClick={( e: React.MouseEvent ) => {
                                                                e.preventDefault()
                                                                dispatch(confirm("banner_archive", {item}))
                                                            }}>
                                                            <Icon icon="archive" color="primary" />
                                                        </IconButton> : null }
                                        { showSelect ? <Checkbox color="primary"/> : null }
                                    </Box>
                                
                                </Box>
                            </React.Fragment>
                })}
            </List>
    )
}

/*
<Typography variant="body2" sx={{ color: "#ddd" }}>
                                                {data.offerHeader} {data.termsText}, {data.CTAButtonText}
                                            </Typography>
<Typography sx={{ color: avatarTxtColor}}>
    { data.displayName.substring(0,1) }{ data.displayName.substring(1,2).toLowerCase() }
</Typography>
*/
