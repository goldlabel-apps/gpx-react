import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material/';
import Fab from '@mui/material/Fab';
import {Icon} from "../../../Shared";

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -16,
  right: 32,
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
            <StyledFab color="primary"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                // console.log ("New GPX");
              }}>
              <Icon icon="up" />
            </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>);
}

/*
*/