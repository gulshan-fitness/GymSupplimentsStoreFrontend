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


function App() {
  const {setUserCountry,UserCountry,setCountrySelectPopUp,countries}=useContext(Context)

  const normalizeLon = (lon) => (lon < 0 ? 360 + lon : lon);

  const findCountryFromCoords = (latitude, longitude) => {
    const normalizedLon = normalizeLon(longitude);
  
    const country = countries.find((country) =>
      country.bounds.some(({ lat, lon }) => {
        const [minLat, maxLat] = lat;
        const [minLonRaw, maxLonRaw] = lon;
        const minLon = normalizeLon(minLonRaw);
        const maxLon = normalizeLon(maxLonRaw);

        if (minLon > maxLon) {
          return (
            latitude >= minLat &&
            latitude <= maxLat &&
            (normalizedLon >= minLon || normalizedLon <= maxLon)
          );
        }
  
        return (
          latitude >= minLat &&
          latitude <= maxLat &&
          normalizedLon >= minLon &&
          normalizedLon <= maxLon
        );

      })
    );
  
    return country?.code || null; // returns country code or null if not found
  };
  
  

  useEffect(
    ()=>{

      const selectedCountry=localStorage.getItem("UserCountry")

      if (selectedCountry){
        setUserCountry(selectedCountry);
      }

    else{
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
        
          const code=findCountryFromCoords(latitude,longitude)
          
          if(code){
            setUserCountry(code)
           
            
          }
        
          else{
            setCountrySelectPopUp(true)
          }
        
          },
          (err)=>{
            setCountrySelectPopUp(true)
          }
        )
      }
     
    }



       
  

   
      
   
      
      //  else{
      //   axios.get(`https://ipwho.is/`)
      //   .then((res) => {
      //   console(res.data.country_code);
        
      //     if (res.data.success){ 
      //       setUserCountry(res.data.country_code);
            
      //       localStorage.setItem("UserCountry",res.data.country_code)
      //     }
      //     else{setCountrySelectPopUp(true)}
      //   })
    
      //   .catch((error) => setCountrySelectPopUp(true)); 
      //  }


    },
    [UserCountry]
  )


  useEffect(() => {

    if (!UserCountry) return; // <-- guard clause
    const allowedCountries = ["IN", "US", "GB", "CA", "FR", "DE", "IT"];
    if (!allowedCountries.includes(UserCountry)) {
      setCountrySelectPopUp(true);
    }
  },[UserCountry]);
  

  


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
