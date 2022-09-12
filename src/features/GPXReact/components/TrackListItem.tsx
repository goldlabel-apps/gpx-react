import * as React from 'react';
import {
  useFeatureDispatch,
} from "../../Shared/store/hooks";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import {
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  Typography
} from "@mui/material"
import {
  Icon,
  navigateTo,
} from "../../Shared";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TrackListItem(props:any) {

  const dispatch = useFeatureDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const {track} = props;
  if (!track) return null;

  const {
    title,
    subheader,
    image,
    icon,
    body,
    path,
  } = track;

  let hasImage = false;
  if(image && image !== "") hasImage = true;
  
  return (
    <Box sx={{m:1}}>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          avatar={<IconButton
                    color="secondary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      console.log("navigateToCategory(category)");
                      // dispatch(navigateToCategory("category"));
                    }}>
                    <Icon icon={icon}  />
                  </IconButton>}
          action={<IconButton
                    color="secondary"
                    onClick={() => {
                      dispatch(navigateTo(track));
                    }}>
                    <Icon icon="right"  />
                  </IconButton>}
          title={<Link to={path} style={{textDecoration: "none", color: "#222",}}>
                  {title}
                </Link>}
          subheader={subheader}
        />

        {hasImage ? <CardMedia
                      sx={{ 
                        cursor: "pointer", 
                      }}
                      onClick={() => {
                        dispatch(navigateTo(track));
                      }}
                      component="img"
                      height="140"
                      image={image}
                      alt={title}
                    /> : null }
                      
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
            <Typography variant="body2">
              {body}
            </Typography>
          </CardContent>
        </Collapse>

        <CardActions>
          <Box sx={{flexGrow:1}}/>
          
          <React.Fragment>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Icon icon="acc" color="secondary" />
            </ExpandMore>
          </React.Fragment>
        </CardActions>

      </Card>
    </Box>
  );
}

/*
<IconButton 
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                dispatch(navigateTo(track));
              }}>
              <Icon icon="meta" />
            </IconButton>

            <IconButton
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                dispatch(share(track));
              }}>
              <Icon icon="share" />
            </IconButton>


            <Button
            sx={{m:1}}
            color="primary"
            variant="text"
            onClick={(e) => {
              e.preventDefault();
              dispatch(navigateTo(track));
            }}>
              <span style={{ marginLeft: 8, marginRight: 8,}}>
                Read
              </span>
              <Icon icon="right" /> 
          </Button>



*/