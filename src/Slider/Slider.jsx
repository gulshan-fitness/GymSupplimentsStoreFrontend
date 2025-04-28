import React, { useState } from 'react'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductBox from '../Products/ProductBox';

export default function Slider({products}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
      const visibleProducts = 1; // Show 1 product at a time on mobile
    
      const handlePrev = () => {
        setCurrentIndex((prev) =>
          prev === 0 ? products.length - visibleProducts : prev - 1
        );
      };
    
      const handleNext = () => {
        setCurrentIndex((prev) =>
          prev === products.length - visibleProducts ? 0 : prev + 1
        );
      };

  return (
     <div className="relative max-w-7xl mx-auto px-2 py-[43px] overflow-hidden">
          {/* Slider */}
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {products.map((item) => (
            //   <div
            //     key={item}
            //     className="min-w-full md:min-w-[33.3333%] p-2"
            //   >
            //     <div className="group relative bg-white/5 backdrop-blur-lg p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/30 hover:shadow-2xl">
            //       {/* Product Image */}
            //       <div className="h-40 md:h-56 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 overflow-hidden">
            //         <img
            //           src="https://via.placeholder.com/150"
            //           alt="Product"
            //           className="group-hover:scale-110 transition-transform duration-300"
            //         />
            //       </div>
    
            //       {/* Product Info */}
            //       <h3 className="text-lg md:text-2xl font-bold text-white mb-2 tracking-wide">
            //         Whey Protein
            //       </h3>
            //       <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
            //         High-quality protein to boost muscle recovery and growth.
            //       </p>
    
            //       {/* Price and Button */}
            //       <div className="flex items-center justify-between">
            //         <span className="text-yellow-400 font-bold text-base md:text-lg">$49.99</span>
            //         <button className="px-4 py-1.5 md:px-5 md:py-2 bg-yellow-400 text-black font-bold text-sm md:text-base rounded-full hover:bg-yellow-500 transition">
            //           View
            //         </button>
            //       </div>
    
            //       {/* Glowing Border Animation on Hover */}
            //       <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg rounded-2xl md:rounded-3xl"></div>
            //     </div>
            //   </div>
            <ProductBox item={item}/>
            ))}
          </div>
    
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-md"
          >
            <FaChevronLeft className="text-black" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= products.length - visibleProducts}
    
            className={` absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-md`}
          >
            <FaChevronRight className="text-black" />
          </button>
        </div>
  )
}
