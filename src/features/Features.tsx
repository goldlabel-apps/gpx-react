import * as React from 'react'
import {
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
} from "@mui/material"

export default function Features() {

  return (
    <Dialog 
      fullWidth
      maxWidth={"xs"}
      onClose={ () => {} } 
      open>
      <DialogTitle>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body1" sx={{ pt:0.5 }}>
            Features 
          </Typography>          
          <Box sx={{ flexGrow: 1 }}/>
        </Box>
      </DialogTitle>
      <DialogActions>
        <Button
          autoFocus
          color="primary"
          variant={ "contained" }
          sx={{ m: 1}}
          onClick={ () => {} }>
            Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}
