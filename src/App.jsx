import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import axios from "axios"
import { Context } from './Context_holder';
function App() {
  const {setUserCountry,UserCountry,setCountrySelectPopUp}=useContext(Context)


  useEffect(
    ()=>{
  const selectedCountry=localStorage.getItem("UserCountry")
  if (selectedCountry) {
    setUserCountry(selectedCountry);
  }
    },[]
  )

  useEffect(
    ()=>{
      if(UserCountry) return

      axios.get(`http://ip-api.com/json`)
      .then((res) => {
      
        if (res.data.status === "success"){ setUserCountry(res.data.countryCode);
          
          localStorage.setItem("UserCountry",res.data.countryCode)
        }
        else{setCountrySelectPopUp(true)}
      })
  
      .catch((error) => setCountrySelectPopUp(true));
    console.log("hey");
    
     
    },
    [UserCountry]
  )




  


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
