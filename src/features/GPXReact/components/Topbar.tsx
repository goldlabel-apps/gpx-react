import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Menu,
} from "@mui/material"
import {
  MenuItems,
  GPXIcon,
} from "../../GPXReact";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: -1,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Topbar() {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'topbar-search';
  const renderMenu = (
    <Menu
      sx={{mt:3, ml: 3}}  
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItems />
    </Menu>
  );

  return (
    <React.Fragment>
      <AppBar 
        position="static" 
        sx={{
          background: "none",
          boxShadow: "none",
        }}>
        <Toolbar>
          
          <Box sx={{ ml: -3 }}>
            <IconButton
              aria-label="user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={0} color="secondary">
                <GPXIcon icon="home" />
              </Badge>
            </IconButton>
          </Box>

          <Search>
            <SearchIconWrapper>
              <GPXIcon icon="search" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tracks"
              inputProps={{ 
                'aria-label': 'search',
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </React.Fragment>
  );
}
/*
<Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              display: { xs: 'none', sm: 'block' },
              ml:-2,
            }}>
            Maltese Islands Diving Guide
          </Typography>
*/
