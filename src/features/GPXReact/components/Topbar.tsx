import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Icon} from "../../Shared";

import {
  ListItemIcon,
  ListItemText,
} from "@mui/material"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'topbar-search';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{width: 200}} onClick={() =>{
        window.open("https://gpx-react.web.app/", "_blank")
        handleMenuClose()
      }}>
        <ListItemIcon>
          <Icon icon="site" color="primary" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">
            Prod
          </Typography>
        </ListItemText>
      </MenuItem>
      
      <MenuItem sx={{width: 200}} onClick={() =>{
        window.open("https://github.com/listingslab-software/gpx-react", "_blank")
        handleMenuClose()
      }}>
        <ListItemIcon>
          <Icon icon="github" color="primary" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">
            Git
          </Typography>
        </ListItemText>
      </MenuItem>

      <MenuItem sx={{width: 200}} onClick={() =>{            
            window.open("/", "_self")
            handleMenuClose()
          }}>
        <ListItemIcon>
          <Icon icon="refresh" color="primary"/>
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">
            Reset
          </Typography>
        </ListItemText>
      </MenuItem>


    </Menu>
  );

  const mobileMenuId = 'topbar-search-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      
      <MenuItem sx={{width: 200}} onClick={() =>{
        window.open("https://gpx-react.web.app/", "_blank")
        handleMenuClose()
      }}>
        <ListItemIcon>
          <Icon icon="site" color="primary" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">
            Prod
          </Typography>
        </ListItemText>
      </MenuItem>
      
      <MenuItem sx={{width: 200}} onClick={() =>{
        window.open("https://github.com/listingslab-software/gpx-react", "_blank")
        handleMenuClose()
      }}>
        <ListItemIcon>
          <Icon icon="github" color="primary" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">
            Git
          </Typography>
        </ListItemText>
      </MenuItem>

      <MenuItem sx={{width: 200}} onClick={() =>{            
            window.open("/", "_self")
            handleMenuClose()
          }}>
        <ListItemIcon>
          <Icon icon="refresh" color="primary"/>
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">
            Reset
          </Typography>
        </ListItemText>
      </MenuItem>

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
          
          <Box sx={{ flexGrow: 1 }} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tracks"
              inputProps={{ 
                'aria-label': 'search',
              }}
            />
          </Search>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              edge="end"
              aria-label="user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={0} color="secondary">
                <Icon icon="menu" />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Icon icon="menu" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </React.Fragment>
  );
}
