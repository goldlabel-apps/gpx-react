import * as React from 'react';
import {
  Box,
  Avatar,
  Card,
  CardHeader,
} from "@mui/material"

export default function GPXMap() {
  
  return (
    <Box sx={{m:1}}>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          avatar={<Avatar />}
          action={null}
          title="Maltese Islands"
          subheader="Map"
        />
        
      </Card>
    </Box>
  );
}
