import React, { useContext } from 'react'
import { Context } from '../Context_holder'
import { IoIosGlobe } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function HeadBar({setshopPage}) {

  const{setCountrySelectPopUp,UserCountry,countries}=useContext(Context)
  const selectFlag= countries?.find(d=>d?.code==UserCountry)

  return (
    <header className="w-full fixed top-0 left-0 h-16 bg-black/50 backdrop-blur-md shadow-md shadow-white z-20 flex items-center  px-4 sm:px-6">
      
     {/* Centered Title */}
     <button  className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-2xl font-extrabold tracking-wider text-yellow-400 whitespace-nowrap" onClick={()=>setshopPage(false)}>
       GYM LEGION
     </button>
   
     {/* Right-aligned Country Code */}
     <button className="ml-auto flex items-center text-xs sm:text-sm font-medium gap-1"
     onClick={()=>setCountrySelectPopUp(true)}
     >
{selectFlag?.flagUrl&&
  <img src={`${selectFlag?.flagUrl}`} alt="" className='h-3 glow' />
}
    
       
     
       <span className="text-white">{UserCountry}</span>
     </button>
   </header>
  )
  
}
