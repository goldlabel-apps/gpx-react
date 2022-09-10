import * as React from 'react';
import {
  // useFeatureSelect,
  useFeatureDispatch,
} from "../../Shared/store/hooks";
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography
} from "@mui/material"
import {
  Icon,
  navigateTo,
} from "../../Shared";
import {
  next,
  share,
} from "../../GPXReact";

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

export default function Track(props:any) {
  const dispatch = useFeatureDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {track} = props;
  if (!track) return null;

  const {
    uid,
    title,
    subheader,
    image,
    icon,
    body,
  } = track;

  return (
    <Box sx={{m:1}}>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          avatar={<Icon icon={icon} color="primary" />}
          action={<IconButton 
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(navigateTo(uid));
                    }}>
                    <Icon icon="right" />
                  </IconButton>}
          title={title}
          subheader={subheader}
        />
        <CardMedia
          component="img"
          height="256"
          image={image}
          alt={title}
        />
        
        <CardActions disableSpacing>
          <IconButton
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(share(uid));
            }}>
            <Icon icon="share" />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Icon icon="acc" color="secondary" />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">
              {body}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}
