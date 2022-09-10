import * as React from 'react'
import {
  Alert,
  Typography,
  AlertColor,
} from "@mui/material"

export default function InlineAlert(props: any) {
  const { slice } = props;
  console.log ("slice", slice);
  let sliceData = null

  if ( !sliceData ) return null
  // @ts-ignore
  const { error } = sliceData
  // @ts-ignore
  const{ severity, code, message } = error
  let currentSeverity: AlertColor = "success"
  // @ts-ignore
  if (severity) currentSeverity = severity
  
  return (
      <Alert
        sx={{m:1}}
        severity={ currentSeverity }>
          <Typography variant="body1">
            { currentSeverity.toUpperCase() } { code }
          </Typography>
          <Typography variant="body2" sx={{ mt: 1}}>
            { message }
          </Typography>
      </Alert>
  )

}

/*
<List>
            
            <ListItem button
              onClick={( e: React.MouseEvent ) => {
                e.preventDefault()
                window.open ("http://localhost:8001", "_blank")
              }}>
              <ListItemIcon>
                <Icon icon="link" />
              </ListItemIcon>
              <ListItemText 
                primary="DynamoDB"
              />
            </ListItem>

            <ListItem button
              onClick={( e: React.MouseEvent ) => {
                e.preventDefault()
                dispatch(createTable())
              }}
            >
              <ListItemIcon>
                <Icon icon="table" />
              </ListItemIcon>
              <ListItemText 
                primary="Seed table"
              />
            </ListItem>
            

            <ListItem button
              onClick={( e: React.MouseEvent ) => {
                e.preventDefault()
                dispatch(seedDb())
              }}
            >
              <ListItemIcon>
                <Icon icon="table" />
              </ListItemIcon>
              <ListItemText 
                primary="Seed database"
              />
            </ListItem>            

          </List>
          
*/