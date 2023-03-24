
import { Container} from '@mui/material';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import About from './Pages/About';
import Home from './Pages/Home';
import Store from './Pages/Store';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
const navLinks=[
  {
      title:"Home" ,
      path:"/",
      icon:<InboxIcon/>
  },
  {
      title:"About" ,
      path:"/About",
      icon:<DraftsIcon/>

  },
  {
      title:"Store" ,
      path:"/Store",
      icon:<InboxIcon/>

  }
]







function App() {
  return (
    
   <>
    <NavBar navLinks={navLinks}></NavBar>
     <Container sx={{mt:5}}>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Store" element={<Store/>}></Route>
     </Routes>
    </Container> 
   </>
  );
}

export default App;
