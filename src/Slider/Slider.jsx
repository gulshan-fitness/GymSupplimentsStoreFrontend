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
     <div className="relative max-w-7xl mx-auto px-8 py-[43px] overflow-hidden">
          {/* Slider */}
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {products?.map((item) => (
        
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
