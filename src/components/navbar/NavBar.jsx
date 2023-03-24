import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NavListDrawer from './NavListDrawer'
import { useState } from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';

import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';






const NavBar = ({navLinks}) => {

    const [open,setOpen]=useState(false);
  return (
    
     <>
     <AppBar position="static">
        <Toolbar >
            <IconButton 
            color="inherit"
            size="large"
            onClick={()=>setOpen(true)}
            sx={{display:{xs:"flex" ,sm:"none"}}}
            edge="start">
            <WidgetsIcon></WidgetsIcon>
            </IconButton>
            <Typography variant="h6" sx={{flexGrow:1}}>Ucollege</Typography>
            <Box sx={{display:{xs:"none" ,sm:"block"}}}>
            {
                navLinks.map((item)=>(
                     <Button color="inherit" key={item.title} component={NavLink}
                     to={item.path}>{item.title}</Button>
                ))
            }
            </Box>
            
           

        </Toolbar>
     </AppBar>

     <Drawer open={open} anchor="left" onClose={()=>setOpen(false)}
     sx={{display:{xs:"flex" ,sm:"none"}}}>
      <NavListDrawer navLinks={navLinks} setOpen={setOpen}></NavListDrawer> 
     </Drawer>
         
     </>
    
  )
}

export default NavBar
