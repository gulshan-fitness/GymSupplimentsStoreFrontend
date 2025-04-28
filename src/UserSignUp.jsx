

import React, { useContext, useState } from "react";
import axios from "axios";

import { RiCloseLine } from "react-icons/ri";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Context } from "./Context_holder";


export default function UserSignUp() {
  const {  
setusertoken, setuser,notify ,setUserLoginPopUp,UserSignUpPopUp, setUserSignUpPopUp } = useContext(Context);


 
  const[Phone,setPhone]=useState(null)


 




  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = Phone.replace("+","");
    
   
   
    const password = e.target.password.value;
    const confirm_password = e.target.confirmpassword.value;
   

    const data = { name, email, phone, password, confirm_password };
   
    axios
    .post(
      `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_USER_URL}sign_up`,
      data
    )

    .then((success) => {
     
notify(success.data.msg,success.data.status)

      if (success.data.status == 1) {


        e.target.reset()

        localStorage.setItem("user",JSON.stringify(success.data.user))

        setuser(success.data.user)

       
        
        
        localStorage.setItem("usertoken",success.data.token)


        setusertoken(success.data.token)


     

        setUserSignUpPopUp(false)
        setPhone(null)
        
       




   
        
       
      }
    })
    .catch((error) => {});

    

    

  };

  return (
<div className={`${UserSignUpPopUp ? "block" : "hidden"} w-full z-50 fixed top-0 left-0 h-screen flex py-2 justify-center px-3 bg-[black] bg-opacity-[70%]`}>
  <div className="w-full max-w-md p-4 rounded-md shadow-md bg-[#f6fffa] relative">
    <h2 className="text-2xl font-bold mb-6 text-center text-[#17412D]">User Sign-Up</h2>

    <RiCloseLine
      className="absolute top-2 right-2 text-sm sm:text-base cursor-pointer"
      onClick={() => setUserSignUpPopUp(false)}
    />

    <form onSubmit={handleSubmit} className="grid grid-cols-1 px-1 gap-2 max-h-[60vh] overflow-y-auto">
      <div>
        <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border rounded-md p-1 sm:p-2 text-xs sm:text-sm focus:ring-1 focus:ring-[#17412D] focus:outline-none border-[#17412D] bg-[#f6fffa] placeholder:text-[#17412D]"
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border rounded-md p-1 sm:p-2 text-xs sm:text-sm focus:ring-1 focus:ring-[#17412D] focus:outline-none border-[#17412D] bg-[#f6fffa] placeholder:text-[#17412D]"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">Phone</label>

        <div className="custom-phone-input">
        <PhoneInput
          placeholder="Phone Number"
          value={Phone}
          onChange={setPhone}
          defaultCountry="IN"
          className="w-full border rounded-md p-1 sm:p-2 text-xs sm:text-sm focus:ring-1 focus:ring-[#17412D] focus:outline-none border-[#17412D]"
        />
      </div>

    
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">Password</label>
        <input
          type="password"
          name="password"
          className="w-full border rounded-md p-1 sm:p-2 text-xs sm:text-sm focus:ring-1 focus:ring-[#17412D] focus:outline-none border-[#17412D] bg-[#f6fffa] placeholder:text-[#17412D]"
          placeholder="Enter password"
          required
        />
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          className="w-full border rounded-md p-1 sm:p-2 text-xs sm:text-sm focus:ring-1 focus:ring-[#17412D] focus:outline-none border-[#17412D] bg-[#f6fffa] placeholder:text-[#17412D]"
          placeholder="Confirm password"
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="py-1 px-3 rounded-md text-white bg-[#17412D] transition-all duration-300 text-xs sm:text-sm"
        >
          Sign Up
        </button>
      </div>
    </form>

    <button
      className="mt-4 text-sm text-center justify-center items-center flex-wrap flex gap-1 text-[#17412D]"
      onClick={() => {
        setUserSignUpPopUp(false);
        setUserLoginPopUp(true);
      }}
    >
      <p>I already have an account</p>
      <p className="underline font-bold">Login</p>
    </button>
  </div>
</div>


  
  );
}
