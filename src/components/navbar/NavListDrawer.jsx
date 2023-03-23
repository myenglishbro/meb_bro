import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import React from 'react'

const NavListDrawer = () => {
  return (
    <Box sx={{
        width:250
       
    }}
    > 
    <nav>
        <List>
            <ListItem>
                <ListItemIcon> <InboxIcon></InboxIcon></ListItemIcon>
                <ListItemText primary="Inbox"></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon> <DraftsIcon></DraftsIcon></ListItemIcon>
                <ListItemText primary="Drafts"></ListItemText>
            </ListItem>
        </List>
    </nav>
    <Divider/>
    <nav>
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#trash">
                    <ListItemText>Trash</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#spam">
                    <ListItemText>Spam</ListItemText>
                </ListItemButton>
            </ListItem>
           
        </List>
    </nav>
   
    </Box>
  )
}

export default NavListDrawer
