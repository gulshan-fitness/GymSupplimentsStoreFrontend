import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductBox from '../Products/ProductBox';

export default function Slider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(1);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Detect screen size and update number of visible products
  useEffect(() => {
    const updateVisibleProducts = () => {
      if (window.innerWidth >= 1024) setVisibleProducts(3);
      else if (window.innerWidth >= 640) setVisibleProducts(2);
      else setVisibleProducts(1);
    };
    updateVisibleProducts();
    window.addEventListener('resize', updateVisibleProducts);
    return () => window.removeEventListener('resize', updateVisibleProducts);
  }, []);

  // Navigation functions
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

  // Touch Events
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    if (distance > threshold) {
      handleNext();
    } else if (distance < -threshold) {
      handlePrev();
    }
  };

  return (
    <div
      className="relative max-w-7xl mx-auto px-4 py-10 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(100 / visibleProducts) * currentIndex}%)`,
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2 box-border"
          >
            <ProductBox item={item} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-md z-10"
      >
        <FaChevronLeft className="text-black" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-md z-10"
      >
        <FaChevronRight className="text-black" />
      </button>
    </div>
  );
}
