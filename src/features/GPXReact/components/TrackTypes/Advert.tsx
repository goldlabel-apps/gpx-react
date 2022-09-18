import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Link,
  CardMedia,
  Grid,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Advert() {
  
  return (
    <Card sx={{ width: "100%", m:0.5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Featured Dive Shop
        </Typography>
        <Typography variant="h5" component="div">
          A{bull}B{bull}C{bull} Diving, Malta
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Link>abcdivingmalta.com</Link>
        </Typography>

        <Grid container>
          <Grid item xs={12} md={6}>
          <Typography variant="body2" component="span">
          Are you planning on Diving in Malta Comino & Gozo? 
          Choosing the dive centre which is right for you
          can be a difficult task with so many to choose from. 
          That's where ABC Diving Malta comes in
          <ul>
          <li>+356 77 333 112</li>
          <li>The Boathouse, Triq il-Fekruna, Turtle Bay, St. Paul's Bay, SPB 4813, Malta.</li>
        </ul>
        </Typography>
          </Grid>
          <Grid item xs={12} md={6}>

            <CardMedia
              sx={{p:2, cursor: "pointer"}}
              component="img"
              height="256"
              image="jpg/Adverts/abcdivingmalta.jpg"
              alt="ABC Diving, Malta"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                window.open("https://www.abcdivingmalta.com", "_blank");
              }}/>
          </Grid>

        </Grid>      
      </CardContent>
      <CardActions>
        <Button 
          variant="contained"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            window.open("https://www.abcdivingmalta.com", "_blank");
          }}>
          Web
        </Button>
      </CardActions>
    </Card>
  );
}
