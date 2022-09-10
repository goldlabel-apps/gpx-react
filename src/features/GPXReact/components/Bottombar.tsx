import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import {Icon} from "../../Shared";

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function Bottombar() {
  return (
      <AppBar 
        position="fixed"
        sx={{ 
          top: 'auto', 
          bottom: 0,
          background: "none",
          boxShadow: "none",  
        }}>
        <Toolbar>
          
          <StyledFab color="primary">
            <Icon icon="dive" />
          </StyledFab>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <IconButton color="secondary">
            <Icon icon="up" />
          </IconButton>
        </Toolbar>
      </AppBar>);
}
