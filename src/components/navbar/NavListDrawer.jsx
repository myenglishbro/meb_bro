import {  List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'
import { NavLink } from 'react-router-dom'

const NavListDrawer = ({navLinks,setOpen}) => {
  return (
    <Box sx={{
        width:250
       
    }}
    > 
    {/* <nav>
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
    <Divider/> */}
    <nav>
        <List>
        {
            navLinks.map(item=>(
                <ListItem disablePadding key={item.title}>
                <ListItemButton component={NavLink}
                     to={item.path}
                     onClick={()=>setOpen(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                   
                </ListItemButton>
               
            </ListItem>
            ))
        }
            
           
           
        </List>
    </nav>
   
    </Box>
  )
}

export default NavListDrawer
