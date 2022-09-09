import React from 'react'
import {
    useFeatureSelect,
    useFeatureDispatch,
} from "../../Shared/store/hooks"
import {
    selectShared,
    edit,
    EditableFieldString,
    SelectLogo,
    EditableFieldColor,
} from "../../Shared"
import {
    BannerPreview,
} from "../../Banners";
import { 
    Grid,
    Box,
} from '@mui/material';

export default function BannerForm() {
    
    const dispatch = useFeatureDispatch();
    const shared = useFeatureSelect(selectShared);
    const {editing} = shared;
    if (!editing) return null;
    const {item} = editing;
    const {meta, assets, text, colors, links} = item;
    const {affiliation, terms} = links;
    const {displayName} = meta;
    const {logo} = assets;
    const {
        CTAButtonText,
        offerHeader,
        termsText,
    } = text;
    const {
        ctaBorderBottomColor,
        ctaButtonBackgroundColor,
        ctaButtonTextColor,
    } = colors;

    return (
        <Box>

            <Box sx={{ m: 1}}>
                <BannerPreview banner={item} />
            </Box>
            
            <Box sx={{ m: 1, mb:2 }}>
                <EditableFieldString field={{
                    label: "Banner Name",
                    id: `displayName`,
                    value: displayName,
                    // variant: "standard",
                    onChange: (e: any) => {
                        e.preventDefault()
                        const {value} = e.target;
                        dispatch(edit({key: "displayName", value, subKey: "meta"}))
                    }
                }}/>
            </Box>
            
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box sx={{ m: 1, mb:2}}>
                        <SelectLogo field={{
                            label: "Logo",
                            id: `logo`,
                            value: logo,
                            onSelect: (value: string) => { 
                                dispatch(edit({key: "logo", value, subKey:"assets"}))
                            }
                        }}/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ m: 1, mb:2}}>
                        <EditableFieldString field={{
                            label: "Call To Action",
                            id: `CTAButtonText`,
                            value: CTAButtonText,
                            onChange: (e: any) => {
                                e.preventDefault()
                                const {value} = e.target;
                                dispatch(edit({key: "CTAButtonText", value, subKey: "text"}))
                            }
                        }}/>
                    </Box>
                </Grid>
            </Grid>
            
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box sx={{ m: 1, mb:2}}>
                        <EditableFieldString field={{
                            label: "Offer",
                            id: `offerHeader`,
                            value: offerHeader,
                            onChange: (e: any) => {
                                e.preventDefault()
                                const {value} = e.target;
                                dispatch(edit({key: "offerHeader", value, subKey: "text"}))
                            }
                        }}/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ m: 1, mb:2}}>
                        <EditableFieldString field={{
                            label: "Terms",
                            id: `termsText`,
                            value: termsText,
                            onChange: (e: any) => {
                                e.preventDefault()
                                const {value} = e.target;
                                dispatch(edit({key: "termsText", value, subKey: "text"}))
                            }
                        }}/>
                    </Box>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ mb: 2, display: "flex"}}>
                        <EditableFieldColor field={{
                            label: "Background",
                            id: `ctaBorderBottomColor`,
                            value: ctaBorderBottomColor,
                            onSelectColor: (color: string) => {
                                dispatch(edit({key: "ctaBorderBottomColor", value: color, subKey:"colors"}))
                            }
                        }}/> 
                        <EditableFieldColor field={{
                            label: "CTA",
                            id: `ctaButtonBackgroundColor`,
                            value: ctaButtonBackgroundColor,
                            onSelectColor: (color: string) => {
                                dispatch(edit({key: "ctaButtonBackgroundColor", value: color, subKey:"colors"}))
                            }
                        }}/> 
                        <EditableFieldColor field={{
                            label: "Label",
                            id: `ctaButtonTextColor`,
                            value: ctaButtonTextColor,
                            onSelectColor: (color: string) => {
                                dispatch(edit({key: "ctaButtonTextColor", value: color, subKey:"colors"}))
                            }
                        }}/>
                    </Box>
                </Grid>
                
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ m: 1}}>
                        <EditableFieldString field={{
                            label: "Affiliation link",
                            id: `affiliation`,
                            value: affiliation,
                            onChange: (e: any) => {
                                e.preventDefault()
                                const {value} = e.target;
                                dispatch(edit({key: "affiliation", value, subKey: "links"}))
                            }
                        }}/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ m: 1}}>
                        <EditableFieldString field={{
                            label: "Terms link",
                            id: `terms`,
                            value: terms,
                            onChange: (e: any) => {
                                e.preventDefault()
                                const {value} = e.target;
                                dispatch(edit({key: "terms", value, subKey: "links"}))
                            }
                        }}/>
                    </Box>
                </Grid>
            </Grid>

            

        </Box>
    )
}

/*
    <pre>{JSON.stringify(item, null, 2)}</pre>
    
    <Grid item xs={12} md={6}>
                    <Box sx={{ m: 1, mb:2}}>
                        <SelectBackground field={{
                            label: "Background",
                            id: `background`,
                            value: background,
                            onSelect: (value: string) => { 
                                dispatch(edit({key: "background", value, subKey:"assets"}))
                            }
                        }}/>
                    </Box>
                </Grid>

*/