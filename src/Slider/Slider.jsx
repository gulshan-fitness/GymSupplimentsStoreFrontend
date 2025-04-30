import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductBox from '../Products/ProductBox';

export default function Slider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(1);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  // Responsive visible product count
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

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleProducts >= products.length
        ? prev
        : prev + 1
    );
  };

  // Touch event handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const onTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = touchStartY.current - touchEndY.current;

    // Prevent accidental vertical scroll blocking
    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    const threshold = 50;
    if (deltaX > threshold) handleNext();
    else if (deltaX < -threshold) handlePrev();
  };

  const translateX = `-${(100 / visibleProducts) * currentIndex}%`;

  return (
    <div
      className="relative max-w-7xl mx-auto px-4 py-10 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${translateX})` }}
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
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-md z-10"
        >
          <FaChevronLeft className="text-black" />
        </button>
      )}
      {currentIndex + visibleProducts < products.length && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-md z-10"
        >
          <FaChevronRight className="text-black" />
        </button>
      )}
    </div>
  );
}
