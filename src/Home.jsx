import React, {  useContext, useEffect, useState,  } from "react";
import NightSky from "./NightSky/NightSky";


import Slider from "./Slider/Slider";
import { Context } from "./Context_holder";

import CountriesPopUp from "./CountriesPopUp/CountriesPopUp";
import { Link } from "react-router-dom";
import HeadBar from "./HeadBar/HeadBar";
import Shop from "./Shop/Shop";



export default function Home(){

  const {Products,UserCountry,setselectedCategory}=useContext(Context)
  const [shopPage,setshopPage]=useState(false)

  useEffect(() => {
    window.scrollTo(0, 0); 
     
  },[shopPage]); 

  
 
 
  return (
    <div className="relative min-h-screen font-sans  overflow-hidden">
      
      {/* Background Night Sky */}

      <NightSky />

      {/* Main Content */}

      <div className="relative z-10 text-white px-8">

 {/* Navbar */}

 <HeadBar  setshopPage={setshopPage}/>

{/* home sectction */}

{
  shopPage?(
<Shop/>  )
  :(


  <section>
      {
   (
    UserCountry === "IN" ||
    UserCountry === "US" ||
    UserCountry === "GB" ||
    UserCountry === "CA" ||
    UserCountry === "FR" ||
    UserCountry === "DE" ||
    UserCountry === "IT"
  )&&(
    <div>
    {/* Hero Section */}
    <section className="flex flex-col items-center text-center mt-28 mb-12 px-4">
 <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
   Fuel Your Strength
 </h1>
 <p className="text-base sm:text-lg md:text-2xl capitalize text-gray-400 mt-4 mb-8 max-w-2xl">
   Premium supplements for athletes, bodybuilders, and fitness enthusiasts.
 </p>
 <button  className="px-8 py-4 bg-yellow-400   text-black font-semibold rounded-full  transition-all duration-300 shadow-lg" onClick={()=> setshopPage(true)}>
   Shop Now
 </button>
</section>


       {/* Featured Products */}

       <section className="py-4">
         <h2 className="text-4xl font-bold  mb-8 text-center tracking-tight text-white">
           Best Sellers
         </h2>


         <h2 className="text-2xl font-bold   text-center tracking-tight text-yellow-400">
           Whey Protine <span className="text-white ">  ({Products?.filter(data=> data?.category=="Whey Protein" && data?.[UserCountry]).length})</span>
         </h2>

   <Slider products={Products?.filter(data=> data?.category=="Whey Protein" && data?.[UserCountry])}/>

   <div className="flex justify-center font-semibold text-yellow-400 mb-[50px] "> <button className="border px-3 rounded-md glow3 border-yellow-400"
   onClick={()=>{
     setselectedCategory({label:"Whey Protein",value:"Whey Protein"})
     setshopPage(true)
   }}
   >View All</button> </div>


   <h2 className="text-2xl font-bold   text-center tracking-tight text-yellow-400">
   Creatine <span className="text-white ">  ({Products?.filter(data=> data?.category=="Creatine" && data?.[UserCountry]).length})</span>
         </h2>

  

   <Slider products={Products?.filter(data=> data?.category=="Creatine" &&  data?.[UserCountry] )}/>


   <div className="flex justify-center font-semibold text-yellow-400 mb-[50px] "> <button className="border px-3 rounded-md glow3 border-yellow-400"
   onClick={()=>{
     setselectedCategory({label:"Creatine",value:"Creatine"})
     setshopPage(true)
   }}
   >View All</button> </div>







   <h2 className="text-2xl font-bold   text-center tracking-tight text-yellow-400">
   Pre Workout <span className="text-white ">  ({Products?.filter(data=> data?.category=="Pre Workout" && data?.[UserCountry]).length})</span>
         </h2>

  

   <Slider products={Products?.filter(data=> data?.category=="Pre Workout" &&  data?.[UserCountry] )}/>

     
   <div className="flex justify-center font-semibold text-yellow-400 mb-[50px] " onClick={()=>{
     setselectedCategory({label:"Pre Workout",value:"Pre Workout"})
     setshopPage(true)
   }}> <button className="border px-3 rounded-md glow3 border-yellow-400">View All</button> </div>

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
           <button  className="px-8 py-4 bg-yellow-400   text-black font-semibold rounded-full  transition-all duration-300 shadow-lg" 
           onClick={()=> setshopPage(true)}>
   Shop Now
 </button >
         </div>
       </section>  

 </div>)
  }

 
   
</section>


)
}

     

   

        {/* Footer */}




        <footer className="   text-center p-4 text-gray-500">
          © 2025 Gym Legion. All rights reserved.
        </footer>
        
      </div>

      <CountriesPopUp/>
    </div>
  );
};