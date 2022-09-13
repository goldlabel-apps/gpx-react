import * as React from 'react';
import {
  // useFeatureSelect,
  useFeatureDispatch,
} from "../../../Shared/store/hooks";
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ReactMarkdown from 'react-markdown';

import {
  Box,
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material"
import {
  Icon,
  navigateTo,
} from "../../../Shared";

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

export default function Generic(props:any) {
  let mode = "list";
  const dispatch = useFeatureDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const {track, setMode} = props;

  if (!track) return null;

  const {
    title,
    subheader,
    image,
    icon,
    body,
    bodyFormat,
  } = track.value;
  let hasImage = false;
  if(image && image !== "") hasImage = true;
  
  if (setMode) mode = setMode;

  return (
    <Box sx={{m:1}}>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          avatar={<React.Fragment>

            { mode === "single" ? <IconButton
                    onClick={() => {
                      window.open("/", "_self");
                    }}
                  >
                    <Icon icon={"left"} color="primary" />
                  </IconButton> : null }

                  <IconButton
                    disabled={ mode === "single" ? true : false }
                    onClick={() => {
                      dispatch(navigateTo(track));
                    }}
                  >
                    <Icon icon={icon} color="primary" />
                  </IconButton>
                </React.Fragment>}

          action={ mode !== "single" ? <React.Fragment>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <Icon icon="acc" color="secondary" />
                    </ExpandMore>
                    </React.Fragment> : null}
          title={ title }
          subheader={subheader}
        />

        { hasImage ? <CardMedia
                      component="img"
                      height={ mode === "single" ? 350 : 175 }
                      image={image}
                      alt={title}
                    /> : null }
        
          <CardContent>
            {bodyFormat === "text" ? <Typography variant="body2">
              {body}
            </Typography> : null }

            {bodyFormat === "html" ? <Typography variant="body1">
              {<span dangerouslySetInnerHTML={{ __html: body }}></span>}
            </Typography> : null }

            {bodyFormat === "md" ? <ReactMarkdown children={body} /> : null }

          </CardContent>
          <CardActions>
            
          </CardActions>
      </Card>
    </Box>
  );
}

/*
*/
