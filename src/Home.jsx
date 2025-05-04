import React, {  useContext,  } from "react";
import NightSky from "./NightSky/NightSky";


import Slider from "./Slider/Slider";
import { Context } from "./Context_holder";

import CountriesPopUp from "./CountriesPopUp/CountriesPopUp";
import { Link } from "react-router-dom";
import HeadBar from "./HeadBar/HeadBar";



export default function Home(){

  const {Products}=useContext(Context)
 
  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      
      {/* Background Night Sky */}

      <NightSky />

      {/* Main Content */}

      <div className="relative z-10 text-white px-8 ">

 {/* Navbar */}

 <HeadBar/>


     

       {/* Hero Section */}
<section className="flex flex-col items-center text-center mt-28 mb-12 px-4">
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
    Fuel Your Strength
  </h1>
  <p className="text-base sm:text-lg md:text-2xl capitalize text-gray-400 mt-4 mb-8 max-w-2xl">
    Premium supplements for athletes, bodybuilders, and fitness enthusiasts.
  </p>
  <Link to={"/shop"} className="px-8 py-4 bg-yellow-400   text-black font-semibold rounded-full  transition-all duration-300 shadow-lg">
    Shop Now
  </Link>
</section>


        {/* Featured Products */}
        <section className="py-4">
          <h2 className="text-4xl font-bold  mb-8 text-center tracking-tight text-white">
            Best Sellers
          </h2>


          <h2 className="text-2xl font-bold   text-center tracking-tight text-white">
            Whey Protine
          </h2>

    <Slider products={Products?.filter(data=> data?.category=="Whey Protein" || data?.category=="Protein Powders")}/>


    <h2 className="text-2xl font-bold   text-center tracking-tight text-white">
            
Creatine
          </h2>

    <Slider products={Products?.filter(data=> data?.category=="Creatine" )}/>

        </section>

        {/* About Section */}
        <section className="flex flex-col md:flex-row items-center justify-center  rounded-xl">

          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="./image/cbumhomepageImage.jpg"
              alt="Supplements"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Gym Legion?</h2>
            <p className="text-gray-300 mb-6">
              We provide scientifically formulated supplements with clean ingredients to fuel your performance and recovery. Trusted by top athletes and fitness professionals.
            </p>
            <Link  to={"/shop"} className="px-8 py-4 bg-yellow-400   text-black font-semibold rounded-full  transition-all duration-300 shadow-lg">
    Shop Now
  </Link >
          </div>
        </section>  

        {/* Footer */}

        <footer className="text-center p-4 text-gray-500">
          © 2025 Gym Legion. All rights reserved.
        </footer>
        
      </div>

      <CountriesPopUp/>
    </div>
  );
};