import * as React from 'react'
import {
  useFeatureSelect,
  useFeatureDispatch,
} from "../../Shared/store/hooks"
import {
  Icon,
  selectShared,
  setSharedKey,
  onConfirm,
} from "../"
import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
} from "@mui/material"

export default function Confirm() {

  const shared = useFeatureSelect(selectShared)
  const dispatch = useFeatureDispatch()
  const {confirming} = shared;
  const {confirmText, action, options} = confirming;
  
  const handleClose = () => {
    dispatch(setSharedKey({key: "confirming", value: null }))
  }

  const handleYes = () => {
    dispatch(onConfirm(true, action, options ))
    handleClose()
  }

  const handleNo = () => {
    dispatch(onConfirm(false, action, options))
    handleClose()
  }

  return (
    <Dialog 
      fullWidth
      maxWidth={"xs"}
      onClose={ handleClose } 
      open>
      <DialogTitle>
        <Box sx={{ display: "flex" }}>
          <Typography variant="body1" sx={{ pt:0.5 }}>
            { confirmText }
          </Typography>          
          <Box sx={{ flexGrow: 1 }}/>
        </Box>
      </DialogTitle>
      <DialogActions>
        <Box sx={{}}>
            
            <Button
              autoFocus
              color="primary"
              variant={ "contained" }
              sx={{ m: 1}}
              onClick={ handleYes }>
              <span style={{ marginLeft: 6, marginRight: 6 }}>
                Yes
              </span>
              <Icon icon="tick" />
            </Button>
            <IconButton
              color="primary"
              sx={{ m: 1}}
              onClick={ handleNo }>
              <Icon icon="close" />
              
            </IconButton>
        </Box>
      </DialogActions>
    </Dialog>
  )
}
