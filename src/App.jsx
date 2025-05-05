import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import axios from "axios"
import { Context } from './Context_holder';
import LinkkValidater from './LinkkValidater';
import Admin from './AdminPanal/Admin';
import Shop from './Shop/Shop';

function App() {
  const {setUserCountry,UserCountry,setCountrySelectPopUp}=useContext(Context)


  useEffect(
    ()=>{
     
      const selectedCountry=localStorage.getItem("UserCountry")
      if (selectedCountry) {
        setUserCountry(selectedCountry);
      }
       else{
        axios.get(`http://ip-api.com/json`)
        .then((res) => {
        
          if (res.data.status === "success"){ setUserCountry(res.data.countryCode);
            
            localStorage.setItem("UserCountry",res.data.countryCode)
          }
          else{setCountrySelectPopUp(true)}
        })
    
        .catch((error) => setCountrySelectPopUp(true));
        
        
       }

     
    },
    [UserCountry]
  )


  useEffect(() => {
    
    if (!UserCountry) return; // <-- guard clause
  
    const allowedCountries = ["IN", "US", "GB", "CA", "FR", "DE", "IT"];
    if (!allowedCountries.includes(UserCountry)) {
      setCountrySelectPopUp(true);
    }
  }, [UserCountry]);
  

  


  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element:<Home/>},
        {
          path: "/gulshanlinksvalidator",
          element:<LinkkValidater/>},
  
          {
            path: "/itsgulshanfitnesspointadmin",
            element:<Admin/>},

          
  
  
  
    
    ]
   )
  
  
  
  
   
    return (
  <RouterProvider router={routes}/>
  
      
  
    );
}

export default App
