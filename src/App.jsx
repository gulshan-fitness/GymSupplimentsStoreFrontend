import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';

function App() {
  


  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element:<Home/>},
  

  
  
  
    
    ]
   )
  
  
  
  
   
    return (
  <RouterProvider router={routes}/>
      
  
    );
}

export default App
