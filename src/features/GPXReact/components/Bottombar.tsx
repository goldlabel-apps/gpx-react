import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {
  Tooltip,
} from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';

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
          <Tooltip title="Add Content">
            <StyledFab color="primary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              console.log ("New GPX");
            }}>
              <Icon icon="add" />
            </StyledFab>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>);
}

/*
*/