import React from 'react'
import { Link } from 'react-router-dom'
import {
    useFeatureSelect,
    useFeatureDispatch,
} from "../Shared/store/hooks"
import {
    BannersList,
    selectBanners,
    read,
} from "./"
import {
    InlineAlert,
    Icon,
    addItem,
    SearchInput,
} from "../Shared"
import {
    Box,
    Button,
    Card,
    Grid,
    CardHeader,
    LinearProgress,
    IconButton,
    Typography,
} from "@mui/material"


export default function Banners(props: any) {

    const {mode} = props;
    const dispatch = useFeatureDispatch()
    const banners = useFeatureSelect(selectBanners)
    const { error, async, bannerList } = banners
    const { creating, reading, updating, deleting, message } = async;
    let subheader = message
    if (subheader === "") subheader = `${bannerList.length} banner${bannerList.length !== 1 ? "s" : "" }`
    let showSearch = false;
    if (bannerList.length > 2) showSearch = true;
    React.useEffect(() => {
        const { initted } = async;
        if (!initted){
            dispatch(read());
        }
    }, [async, dispatch])

    const onAddClick = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(addItem({
            type: "banner",
            title: "Create Banner",
            icon: "banners", 
        }));
    }
    
    return (
        <Box>
            <Card sx={{ m:1 }}>
                { creating || reading || updating || deleting ? <LinearProgress color="primary"/> 
                : <Box sx={{ height: 4 }} /> }
                <CardHeader 
                    sx={{ mt: 1 }}
                    title={<Typography variant="body1">Banners</Typography>}
                    // subheader={<Box sx={{display: "flex"}}>
                    //                 <Typography variant="body2">{ subheader }</Typography>
                    //             </Box>}
                    avatar={ mode === "widget" ? <Link to="/banners">
                                <IconButton color="primary">
                                    <Icon icon="banners"/>
                                </IconButton>
                            </Link> : <Box sx={{m:1}}><Icon icon="banners"/></Box> }

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
                            </React.Fragment>}/>

                { error ? <InlineAlert slice="banners" /> : null }
                <Grid container>
                    <Grid item xs={ 12 }>
                        <BannersList />
                        {!bannerList.length && !creating && !reading && !updating && !deleting && !error ? <Box sx={{display:"flex"}}>
                                        <Button
                                            sx={{m:2}}
                                            fullWidth
                                            variant='contained'
                                            onClick={onAddClick}>
                                                <span style={{ marginLeft: 6, marginRight: 6 }}>
                                                    Create first banner
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
<pre>bannersList {JSON.stringify(bannerList, null, 2)}</pre>
*/