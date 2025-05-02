import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductBox from '../Products/ProductBox';
import { Context } from '../Context_holder';

export default function Slider({ products }) {
  const{UserCountry}=useContext(Context)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(1);
  const [dragTranslate, setDragTranslate] = useState(0);
  const sliderRef = useRef(null);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const isDragging = useRef(false);

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
      prev + visibleProducts >= products.length ? prev : prev + 1
    );
  };

  // Touch event handlers for drag effect
  const onTouchStart = (e) => {
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setDragTranslate(0);
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    const deltaX = touchEndX.current - touchStartX.current;
    setDragTranslate(deltaX);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = touchStartY.current - touchEndY.current;

    const threshold = 50;

    setDragTranslate(0);

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
      if (deltaX > 0) handleNext(); // swipe left
      else handlePrev();            // swipe right
    }
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
        className="flex"
        style={{
          transform: `translateX(calc(${translateX} + ${dragTranslate}px))`,
          transition: isDragging.current ? 'none' : 'transform 0.5s ease-in-out',
        }}
          // filter(d=>d?.bestseller&&d?.[UserCountry])?
      >
        {products?.map((item, index) => (
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
          disabled={!(currentIndex > 0 )}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-4 rounded-full shadow-md z-10"
        >
          <FaChevronLeft className="text-black" />
        </button>
     
        <button
          onClick={handleNext}
          disabled={!(currentIndex + visibleProducts < products.length)}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-4 rounded-full shadow-md z-10"
        >
          <FaChevronRight className="text-black" />
        </button>
    
    </div>
  );
}
