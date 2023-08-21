import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import Learn from "./components/LearnMore";
import Welcome from "./components/welcome_pagePage";


const router = createBrowserRouter([
  
// ABSOLUTE PATHS
  // For external resources, such as third-party libraries,
  // CSS frameworks, images, and APIs, you should use absolute
  // paths. Absolute paths provide a fixed reference to 
  // resources that are hosted elsewhere. Here's an example
  // of using an absolute path to link to a third-party CSS
  // framework
  // EXAMPLE: <link
            //   rel="stylesheet"
            //   href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
// />

  
  
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <Learn />,
      },
      {
        path: "Welcome",
        element: <Welcome />,
      },
    ],
  },
]);

export default router;