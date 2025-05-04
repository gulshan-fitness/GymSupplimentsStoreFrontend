import React, { useContext } from 'react'
import { Context } from '../Context_holder'

export default function ProductBox({item}){
  
  const{UserCountry}=useContext(Context)

  return (
<a
  href={item?.[UserCountry]}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full  p-2"
>
  <div className="group relative bg-white/5 backdrop-blur-lg p-2 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg  overflow-hidden transition-all duration-300 hover:scale-105   glow">
    
    {/* Product Image */}
    <div className="h-32 sm:h-40 md:h-56 bg-white rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 overflow-hidden">
      <img
        src={`./image/Products/${item?.image}`}
        alt="Product"
        className="group-hover:scale-110 transition-transform duration-300 object-contain max-h-full"
      />
    </div>

    {/* Product Info */}
    <h3 className=" text-sm   text-white mb-2 tracking-wide text-center sm:text-left line-clamp-3">
  {item?.name}
</h3>


    {/* Price and Button */}
    <div className="flex justify-center sm:justify-end">
    <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#FFD700] text-black font-semibold text-sm sm:text-base tracking-wide rounded-full shadow-[0_0_16px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 ease-in-out">
  View
</button>

    </div>

  
   
  </div>
</a>

  )
}
