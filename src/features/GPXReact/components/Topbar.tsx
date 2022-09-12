import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  ButtonBase,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Menu,
  Typography,
  Tooltip,
} from "@mui/material"
import {
  MenuItems,
} from "../../GPXReact";
import {
  Icon,
} from "../../Shared";

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

  const showSearch = false;
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
          <ButtonBase
            onClick={()=>{
              window.open("/", "_self");
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ 
                display: { xs: 'none', sm: 'block' },
                ml:-2,
                mr: 2,
              }}>
              Maltese Islands Diving Guide
            </Typography>
          </ButtonBase>
          <Box sx={{}}>
            <Tooltip title="Diving">
              <IconButton
                aria-label="diving"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={()=>{
                  window.open("/diving", "_self");
                }}
                color="inherit">
                  <Icon icon="diving" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Spearfishing">
              <IconButton
                aria-label="user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={()=>{
                  window.open("/spearfishing", "_self");
                }}
                color="inherit">
                  <Icon icon="spearo" />
              </IconButton>
            </Tooltip>

          </Box>
          <Box sx={{flexGrow:1}}/>

          { showSearch ? <Search>
            <SearchIconWrapper>
              <Icon icon="search" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 
                'aria-label': 'Search',
              }}
            />
          </Search> : null }

          <Tooltip title="Menu">
            <IconButton
            sx={{mr:-2}}
              aria-label="diving"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit">
              <Badge badgeContent={0} color="primary">
                <Icon icon="menu" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>

      </AppBar>
      {renderMenu}
    </React.Fragment>
  );
}
/*
*/
