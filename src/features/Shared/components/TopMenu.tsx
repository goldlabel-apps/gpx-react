import * as React from 'react'
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import { Link } from 'react-router-dom' 
import {
  Icon,
} from "../"

export default function TopMenu() {
  
  const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null)
  const open = Boolean( anchorEl )
    
  const menuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorEl(null)
  }

  return (
      <Box sx={{ display: "flex", mt:3, mb:1}}>  
          <Link to="/">
            <IconButton
              color="primary"
              sx={{ mr: 1, mt:-1.5 }}
            >
              <Icon icon="home"/>
            </IconButton>
          </Link>
          
          <Link to="/banners">
            <IconButton
                color="primary"
                sx={{ mr: 1, mt:-1.5 }}
              >
              <Icon icon="banners"/>
            </IconButton>
          </Link>
        
          <Link to="/sites">
            <IconButton
              color="primary"
              sx={{ mr: 0, mt:-1.5 }}
            >
              <Icon icon="sites"/>
            </IconButton>
          </Link>
        
        <Box sx={{ flexGrow: 1 }} />

        <IconButton
          color="primary"
          sx={{ mr: 1, mt:-1.5 }}
          onClick={ menuClick }>
          <Icon icon="menu" />
        </IconButton>

        <Menu
          id="menu"
          anchorEl={ anchorEl }
          open={open}
          onClose={ closeMenu }>

        <MenuItem sx={{width: 200}} onClick={() =>{
            window.open("https://github.com/DT9Media/dt9-workspace/tree/release/0.1.9/frontend", "_blank")
            closeMenu()
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
            window.open("http://localhost:3000/dynamic-banners", "_blank")
            closeMenu()
          }}>
            <ListItemIcon>
              <Icon icon="code" color="primary"/>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">
              Lambda API
              </Typography>
            </ListItemText>
          </MenuItem>
          
          

          <MenuItem sx={{width: 200}} onClick={() =>{
            window.open("http://localhost:8001/", "_blank")
            closeMenu()
          }}>
            <ListItemIcon>
              <Icon icon="table" color="primary"/>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2">
                Dynamo DB
              </Typography>
            </ListItemText>
          </MenuItem>

          <MenuItem sx={{width: 200}} onClick={() =>{            
            window.open("/", "_self")
            closeMenu()
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
      </Box>
  )
}
