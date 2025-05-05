import React, { useContext, useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { IoClose } from "react-icons/io5";

import FilterSection from "./FilterSection";
import { Context } from "../Context_holder";

import ProductBox from "../Products/ProductBox";


export default function Shop() {
  const {
    setselectedCategory,
    selectedCategory,
    selectedBrand,
    setselectedBrand,
    selectedProduct,
    setselectedProduct,
    Products,
    UserCountry,
  } = useContext(Context);

  const [filterPopUp, setfilterPopUp] = useState(false);



  const resetHandler = () => {
    setselectedBrand("");
    setselectedCategory(null);
    setselectedProduct("");
  };




  const filteredProducts = Products?.filter((product) => {
    const matchCategory = selectedCategory
      ? product.category === selectedCategory.value
      : true;

    const safeRegex = (input) => {
      try {
        return new RegExp(input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"); // escape special chars
      } catch {
        return null;
      }
    };

    const brandRegex = selectedBrand ? safeRegex(selectedBrand) : null;
    const productRegex = selectedProduct ? safeRegex(selectedProduct) : null;

    const matchBrand = brandRegex ? brandRegex.test(product.brand) : true;
    const matchProduct = productRegex ? productRegex.test(product.name) : true;

    const matchCountry = UserCountry
      ? product[UserCountry] && product[UserCountry].trim() !== ""
      : true;

    return matchCategory && matchBrand && matchProduct && matchCountry;
  });



  

  return (
    <div className=" relative min-h-screen py-8 font-sans overflow-hidden ">
     
     
     

      <section className=" flex justify-center  sm:hidden ">
        <button
          className=" relative top-[70px] left-1 text-[#facc15] font-bold rounded-md capitalize px-3 py-1 glow3 "
          onClick={() => setfilterPopUp(true)}
        >
          
          filter Section
        </button>
     
      </section>

      <div className="flex flex-col sm:flex-row mt-[80px] gap-4 ">
        
        {/* Filter Section */}
        <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/6 py-5 hidden sm:block">
          <FilterSection resetHandler={resetHandler} />
        </div>

        {/* Product Grid Section */}
        <div className="w-full rounded-md overflow-y-auto thin-scrollbar py-3 max-h-screen min-h-[50px]">
          {filteredProducts?.length === 0 ? (
            <div className="text-sm py-10 text-white text-center font-bold">
             Coming Soon...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-3">
              {filteredProducts?.map((product, index) => (
                <ProductBox key={index} item={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* hidden filter section */}
      <section
        className={`fixed  top-[55px] h-screen w-[95%] flex z-10 px-5  rounded-md justify-center bg-black/80 backdrop-blur-sm  transition-all duration-300 ease-in-out ${
          filterPopUp ? "left-0" : "left-[-150%] scale-95 pointer-events-none"
        }`}
      >
        <IoClose
          className="absolute top-[15px] z-10 right-2 text-2xl text-white cursor-pointer  transition"
          onClick={() => setfilterPopUp(false)}
        />

        {/* Filter Container */}
        <div className="  relative top-[35px] p-6 rounded-lg shadow-2xl w-full max-w-md  overflow-y-auto thin-scrollbar transition-all duration-300 ease-in-out">
          <FilterSection resetHandler={resetHandler}  setfilterPopUp={setfilterPopUp}/>
        </div>

        
      </section>

     
    </div>
  );
}
