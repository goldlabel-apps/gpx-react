import * as React from 'react'
// @ts-ignore
// import { useHistory } from 'react-router-dom'
import {
  Box,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material'
import { Icon } from "../"

export default function NavItem(props: any) {
  
  // const history = useHistory()
  const { label, icon/*, route */} = props.navItem

  const NavItemClick = (e: any) => {
    e.preventDefault()
    // history.push(route)
  }

  return (
    <Box>
      <ListItemButton 
        sx={{ color: '#FFF' }}
        onClick={ NavItemClick }>
        <ListItemIcon sx={{ color: '#FFF' }}>
            <Icon icon={icon} />
        </ListItemIcon>
        <ListItemText primary={label}/>
      </ListItemButton>
    </Box>
  )
}
