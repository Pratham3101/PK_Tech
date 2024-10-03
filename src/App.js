import React from 'react';

import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/others/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Footer from './Components/others/Footer';
import PageNotFound from './Components/pages/other/PageNotFound';
import Services from './Components/pages/Services';

function App  () {
  return (
   <>

     <Router>

     <Navbar/>

     <Routes>
      
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={ <About/>}></Route> 
       <Route path='/contact' element={ <Contact/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>

       <Route path='*' element={<PageNotFound/>}></Route>

     </Routes>
    <Footer/>

    </Router>
   </>
  )
}

export default App;
