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
import {Icon} from "../../../Shared";

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
          A{bull}B{bull}C Diving, Malta
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Link 
            sx={{cursor:"pointer"}}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
                window.open("https://www.abcdivingmalta.com", "_blank");
            }}>
            Diving Malta, Comino &amp; Gozo
          </Link>
        </Typography>

        <Grid container>

          <Grid item xs={12} md={6}>
            <CardMedia
              sx={{p:1, cursor: "pointer"}}
              component="img"
              height="275"
              image="jpg/Adverts/abcdivingmalta.jpg"
              alt="ABC Diving, Malta"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                window.open("https://www.abcdivingmalta.com", "_blank");
              }}/>
            
          </Grid>

          <Grid item xs={12} md={6} sx={{pr:1, pl:1}}>

            <Typography variant="h6" gutterBottom>
              Best diving experience ever!
            </Typography>
            <Typography variant="body1" gutterBottom sx={{m:1}}>
              "The staff are extremely friendly and available for anything you need. 
              Marcus, Neil, John are the absolutley best! 
              They treat you like family"
            </Typography>
            <Typography variant="body2" gutterBottom sx={{m:1}}>
              Elena Sofia Raineri, Dec 2021
            </Typography>
            
            <Typography variant="h6" gutterBottom>
              Snorkelling
            </Typography>
            <Typography variant="body2" gutterBottom>
            Explore the coastline around Malta and see what the Mediterranean has to offer
            </Typography>
          </Grid>

          <Grid item xs={12}>
          <Typography variant="body1" gutterBottom sx={{m:1}}>
            ABC Diving is a small, bespoke PADI dive centre set in an idyllic waterfront location at Turtle Bay just up from St Paul’s Bay in Malta.
          </Typography>
          
        </Grid>

        </Grid>      
      </CardContent>
      <CardActions>
        <Button 
          variant="text"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            window.open("https://api.whatsapp.com/send?phone=35677333112&text=%F0%9F%9A%80", "_blank");
          }}>
            <Icon icon="whatsapp"/>
          <span style={{marginLeft: "8px", marginRight: "8px", textTransform:"none"}}>
            WhatsApp
          </span>
        </Button>
        <Button 
          variant="text"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            window.open("https://www.abcdivingmalta.com", "_blank");
          }}>
            <Icon icon="site"/>
          <span style={{marginLeft: "8px", marginRight: "8px", textTransform:"none"}}>
            Website
          </span>
        </Button>
        <Button 
          variant="text"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            window.open("mailto:info@abcdivingmalta.com", "_blank");
          }}>
            <Icon icon="email"/>
          <span style={{marginLeft: "8px", marginRight: "8px", textTransform:"none"}}>
            Email
          </span>
        </Button>
      </CardActions>
    </Card>
  );
}
