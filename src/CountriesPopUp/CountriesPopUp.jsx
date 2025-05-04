import React from 'react'
import { useContext } from 'react';
import { Context } from '../Context_holder';

export default function CountriesPopUp() {
    const{setUserCountry,UserCountry,setCountrySelectPopUp,CountrySelectPopUp}=useContext(Context)

    const countries = [
      { name: "India", code: "IN", flagUrl: "https://flagcdn.com/in.svg" },
      { name: "United States", code: "US", flagUrl: "https://flagcdn.com/us.svg" },
      { name: "United Kingdom", code: "GB", flagUrl: "https://flagcdn.com/gb.svg" },
      { name: "Canada", code: "CA", flagUrl: "https://flagcdn.com/ca.svg" },
      { name: "France", code: "FR", flagUrl: "https://flagcdn.com/fr.svg" },
      { name: "Germany", code: "DE", flagUrl: "https://flagcdn.com/de.svg" },
      { name: "Italy", code: "IT", flagUrl: "https://flagcdn.com/it.svg" },
    ];
    
      
      if(CountrySelectPopUp)  return (
            <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ">
            <div className="relative w-full max-w-sm  rounded-xl p-6 shadow-lg border border-white text-white">
              {/* Close Button */}
              <button
                onClick={() => setCountrySelectPopUp(false)}
                className="absolute top-3 right-3 text-white  text-lg"
              >
                ✕
              </button>
        
              {/* Title */}
              <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">Select Your Country</h2>
        
              {/* Select Dropdown */}
              <label className="block mb-2 text-sm font-medium text-white">Country</label>
              <div className="relative">
                <select
                  value={UserCountry}
                  onChange={(e) => {setUserCountry(e.target.value)
                    localStorage.setItem("UserCountry",e.target.value)
                    setCountrySelectPopUp(false)
                  }}
                  className="w-full px-4 py-2 bg-black border border-white text-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  {countries?.map(({ name, code }) => (
                    <option key={code} value={code}>
                      {name} ({code})
                    </option>
                  ))}
                </select>
        
                {/* Custom Dropdown Arrow */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
        
            
            </div>
          </div>
        
          )
      

}
