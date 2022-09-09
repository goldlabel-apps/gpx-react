import React from 'react'
import { Link } from 'react-router-dom'
import {
    useFeatureSelect,
    useFeatureDispatch,
} from "../Shared/store/hooks"
import { 
    SitesList,
    selectSites,
    read,
} from "./"
import {
    Box,
    Button,
    IconButton,
    Card,
    CardHeader,
    Grid,
    LinearProgress,
    Typography,
} from "@mui/material"
import {
    InlineAlert,
    Icon,
    addItem,
    SearchInput,
} from "../Shared"

export default function Sites(props: any) {
    const {mode} = props;
    const dispatch = useFeatureDispatch()
    const sites = useFeatureSelect(selectSites)
    const { async, error, siteList } = sites
    const { creating, reading, updating, deleting, message } = async
    let subheader = message
    if (subheader === "") subheader = `${siteList.length} site${siteList.length !== 1 ? "s" : "" }`
    let showSearch = false;

    React.useEffect(() => {
        const { initted } = async
        if (!initted){
            dispatch(read())
        }
    }, [async, dispatch])

    const onAddClick = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(addItem({
            type: "site",
            title: "Create Site",
            icon: "sites", 
        }))
    }
    
    return (
        <Box>
            <Card sx={{ m:1 }}>
                { creating || reading || updating || deleting ? <LinearProgress color="primary"/> 
                : <Box sx={{ height: 4 }} /> }
                <CardHeader 
                    sx={{ mt:1 }}
                    title={<Typography variant="body1">Sites</Typography>}
                    // subheader={<Box sx={{display: "flex"}}>
                    //                 <Typography variant="body2">{ subheader }</Typography>
                    //             </Box>}

                    avatar={ mode === "widget" ? <Link to="/sites">
                            <IconButton color="primary">
                                <Icon icon="sites"/>
                            </IconButton>
                            </Link> : <Box sx={{m:1}}><Icon icon="sites"/></Box> }

                    action={<React.Fragment>
                                <Box sx={{ display: "flex", mt:0.3 }}>
                                    {showSearch? <SearchInput /> : null}
                                    <IconButton 
                                        sx={{ mr:1, ml:2 }} 
                                        color="primary"
                                        onClick={onAddClick}>
                                            <Icon icon="add" />
                                    </IconButton>
                                </Box>
                            </React.Fragment>}
                />

                { error ? <InlineAlert slice="sites" /> : null }
                <Grid container>
                    <Grid item xs={ 12 }>
                        <SitesList />
                        {!siteList.length && !creating && !reading && !updating && !deleting && !error ? <Box sx={{display:"flex"}}>
                            <Button
                                sx={{m:2}}
                                fullWidth
                                variant='contained'
                                onClick={onAddClick}>
                                    <span style={{ marginLeft: 6, marginRight: 6 }}>
                                        Create first site
                                    </span>
                                    <Icon icon="add"/>
                            </Button>
                        </Box> : null }
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}

/*
<pre>siteList {JSON.stringify(siteList, null, 2)}</pre>
*/
