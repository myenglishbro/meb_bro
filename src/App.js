
import { Container} from '@mui/material';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import About from './Pages/About';
import Home from './Pages/Home';
import Store from './Pages/Store';

function App() {
  return (
    
   <>
    <NavBar></NavBar>
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
