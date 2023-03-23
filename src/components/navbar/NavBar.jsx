import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NavListDrawer from './NavListDrawer'
import { useState } from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';
const NavBar = () => {

    const [open,setOpen]=useState(false);
  return (
    
     <>
     <AppBar position="static">
        <Toolbar >
            <IconButton 
            color="inherit"
            size="large"
            onClick={()=>setOpen(true)}>
            <WidgetsIcon></WidgetsIcon>
            </IconButton>
            <Typography variant="h6" sx={{flexGrow:1}}>Ucollege</Typography>
            <Button color="inherit" >Home</Button>
            <Button color="inherit" >About</Button>
            <Button color="inherit" >Store</Button>

        </Toolbar>
     </AppBar>

     <Drawer open={open} anchor="left" onClose={()=>setOpen(false)}>
      <NavListDrawer></NavListDrawer> 
     </Drawer>
         
     </>
    
  )
}

export default NavBar
