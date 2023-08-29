import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import NavbarHeader from './components/NavbarHeader';
import WelcomePage from './components/WelcomePage';
import { Login } from './components/Login';
import Register from './components/Register';


function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };


  return (
    <>
    <div className='mainpagebkgrd'>
    <NavbarHeader />
    <WelcomePage />
    <Register />


    {/* <div className='App'> */}
      
    {/* </div> */}
    
    </div>
    
    </>
    // ***************************LOGIN/ REGISTER TOGGLE****
   
    // *********************************NEED THE ABOve*****
  );
}

export default App;


// <NavbarHeader setCurrentForm={toggleForm} /> {/* Pass setCurrentForm as a prop */}
//       {currentForm === 'login' ? (
//         <Login onFormSwitch={toggleForm} />
//       ) : (
//         <Register onFormSwitch={toggleForm} />
//       )}






















//   const renderContent = () => {
//     switch (currentRoute) {
//       case 'welcome':
//         return <WelcomePage />;
//       case 'login':
//         return <Login />;
//       case 'register':
//         return <Register />;
//       default:
//         return <WelcomePage />;
//     }
//   };

//   return (
//     <div className="App">
//       <NavbarHeader />
//       {renderContent()}
//     </div>
//   );
// }

// export default App;










// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//    setCurrentForm(formName) 
//   }



//   return (
//   <div className='App'>
//     <NavbarHeader />
//     <>
//     </>
//     {
//       currentForm === "login" ? (
//       <Login onFormSwitch={toggleForm} />
//       ) : (
//       <Register onFormSwitch={toggleForm} />
//     )}
      
//       </div>                               
//   );
// }

// export default App;
























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
