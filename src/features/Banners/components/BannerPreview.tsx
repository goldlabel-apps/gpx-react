import React from 'react'
import {
    Box, 
    Button,
    Typography,
} from "@mui/material"

export default function BannerPreview(props: any) {
    const {banner} = props
    const { meta, links, assets, colors, text } = banner;
    let {
        displayName,
    } = meta
    let {
        affiliation,
    } = links
    let {
        logo,
        background,
    } = assets
    let {
        ctaButtonTextColor,
        ctaButtonBackgroundColor,
        ctaBorderBottomColor,
    } = colors
    let {
        CTAButtonText,
        offerHeader,
        termsText,
    } = text
    
    return (
            <Box sx={{ 
                display: "relative",
                background: `url("${ background }")`,
                backgroundColor: ctaBorderBottomColor,
                backgroundSize: `cover`, 
                width: "100%",
                mb: 3,
            }}>
                <Box  sx={{ display: "flex", cursor: "pointer", height: 85 }}
                    onClick={ () => {
                        window.open( affiliation, "_blank")
                    }}>
                    
                    { logo !== "" && logo !== "none" ? <Box sx={{ m: 1 }}>
                        <img 
                            style={{ height: 55, margin: 5 }}
                            src={ logo } 
                            alt={ displayName }
                        />  
                    </Box> : null }
                    
                    <Box sx={{ m:1, mt:2}} >
                        <Typography variant={`body1`} sx={{color: "white"}}>
                            { offerHeader }
                        </Typography>
                        <Typography variant={`body2`} sx={{color: "white"}}>
                            { termsText }
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />
                    
                    <Box sx={{ m:1 }}>
                        <Button
                            variant={`contained`}
                            sx={{ 
                                m: 1, 
                                background: ctaButtonBackgroundColor,
                                color: ctaButtonTextColor, 
                            }}>
                            { CTAButtonText }
                        </Button>
                    </Box>
                        
                </Box>          
            </Box>
    )
}
