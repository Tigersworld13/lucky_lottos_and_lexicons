// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage'
// import LearnMore from '/components/LearnMore';
// import Welcome from '/components/welcome_page';
import React, { useState } from 'react';
import NavbarHeader from './components/NavbarHeader';
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
   setCurrentForm(formName) 
  }



  return (
  <div className='App'>
    <NavbarHeader />
    <>
    </>
    {
      currentForm === "login" ? (
      <Login onFormSwitch={toggleForm} />
      ) : (
      <Register onFormSwitch={toggleForm} />
    )}
      
      </div>                               
  );
}

export default App;
























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/Navbar'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <Navbar/>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
