import React, { useContext } from 'react'
import { Context } from '../Context_holder'
import Flag from 'react-world-flags';

export default function HeadBar({setshopPage}) {

  const{setCountrySelectPopUp,UserCountry}=useContext(Context)


  return (
    <header className="w-full fixed top-0 left-0 h-16 bg-black/50 backdrop-blur-md shadow-md shadow-white z-20 flex items-center  px-4 sm:px-6">
      
     {/* Centered Title */}
     <button  className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-2xl font-extrabold tracking-wider text-yellow-400 whitespace-nowrap" onClick={()=>setshopPage(false)}>
       GYM LEGION
     </button>
   
     {/* Right-aligned Country Code */}
     <button className=" fixed right-3 sm:right-5 flex items-center text-xs sm:text-sm font-medium gap-1"
     onClick={()=>setCountrySelectPopUp(true)}
     >

<Flag code={UserCountry} className='glow h-3 ' />

  
       <span className="text-white">{UserCountry}</span>

     </button>


   </header>
  )
  
}
