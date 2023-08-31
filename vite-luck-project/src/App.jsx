import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import Register from './components/Register';
// import LuckyHoroscope from './components/LuckyHoroscope';








function App() {
  // const path = window.location.pathname;
  return (
  <div className='mainpagebkgrd'>
      <BrowserRouter>
      <NavbarHeader />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LuckyHoroscope" element={<Register />} />
          {/* Add other routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>  
    // ***************************LOGIN/ REGISTER TOGGLE****
   
    // *********************************NEED THE ABOve*****
  );
}

export default App;
