import React, { useContext, useState } from "react";
import axios from "axios";

import { RiCloseLine } from "react-icons/ri";
import InputsWithOutOtp from "./InputsWithOutOtp";
import InputsWithOtp from "./InputsWithOtp";

import { Context } from "./Context_holder";




export default function UserLogin() {
  const {
    setusertoken,
    setuser,
    notify,
    
    UserLoginPopUp,
    setUserLoginPopUp,
    setUserSignUpPopUp,
 
    
    
  } = useContext(Context);

  const [loginMethod, setLoginMethod] = useState("phone");


 

  const [phone, setPhone] = useState(null);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  


  const loginOptions = [
    { method: "otp", label: "Login with OTP" },
    { method: "phone", label: "Login with Phone" },
    { method: "email", label: "Login with Email" },
   
  ];


  const handleSendOtp = () => {

    if (!phone) return notify("Please enter your phone number", 0);

    axios.post(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_OTP_URL}/otp_send`, { phone:phone })
      .then((res) => {
        notify(res.data.msg, res.data.status);
        if (res.data.status === 1) setOtpSent(true);
      })
      .catch((error) => notify("Error sending OTP", 0));
  };

  const handleVerifyOtp = () => {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_USER_URL}loginWithOtp`, { phone:phone.replace("+", ""), otp })
      .then((res) => {
        notify(res.data.msg, res.data.status);
        if (res.data.status === 1) {
          setuser(res.data.user);
          setusertoken(res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("usertoken", res.data.token);
          setUserLoginPopUp(false);
          setOtpSent(false)
          setPhone(null)
         
        }
      })
      .catch(() => notify("OTP verification failed", 0));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const data = { password };
    if (loginMethod === "phone") data.phone = phone.replace("+","");
    else data.email = e.target.email.value;

    axios.post(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_USER_URL}/login`, data)
      .then((success) => {
       
        
        notify(success.data.msg, success.data.status);
        if (success.data.status === 1) {
          e.target.reset();
          setuser(success.data.user);
          setusertoken(success.data.token);
          localStorage.setItem("user", JSON.stringify(success.data.user));
          localStorage.setItem("usertoken", success.data.token);
          setUserLoginPopUp(false);
          
          setPhone(null)

        }
      })
      .catch(() => notify("Login failed", 0));
  };

  return (
    <div className={`${UserLoginPopUp ? "block" : "hidden"}  px-3 z-50 w-full fixed top-0 left-0 h-screen flex justify-center items-center bg-black bg-opacity-70`}>
      <div className="w-full max-w-md p-8 bg-[#f6fffa] rounded-lg shadow-lg relative">
        <RiCloseLine className="absolute top-3 right-3 text-2xl cursor-pointer" onClick={() => setUserLoginPopUp(false)} />
        <h2 className="text-2xl font-bold mb-6 text-center text-[#17412D]">User Login</h2>
        <div className="flex flex-wrap justify-center gap-2 text-xs font-semibold mb-3">


        {loginOptions?.map(({ method, label }) => (
        <button
          key={method}
          onClick={() => { 
            setLoginMethod(method); 
            setOtpSent(false); 
          }}
          className={`px-2 py-1 rounded ${loginMethod === method ? "bg-[#17412D] text-white" : "bg-gray-200 text-[#17412D]"}`}
        >
          {label}
        </button>
      ))}

        </div>
        {loginMethod==="otp"?(

<InputsWithOtp otpSent={otpSent} phone={phone} setOtp={setOtp} handleSendOtp={handleSendOtp} otp={otp} handleVerifyOtp={handleVerifyOtp} setOtpSent={setOtpSent} setPhone={setPhone} />



        ) : (

<InputsWithOutOtp handleSubmit={handleSubmit}loginMethod={loginMethod}phone={phone}setPhone={setPhone}/>


        )}


        <button
         
         className="mt-4 text-sm text-center justify-center items-center flex-wrap flex gap-1 text-[#17412D]"
         onClick={()=>{
           setUserSignUpPopUp(true)
           setUserLoginPopUp(false)
         }}
       >
         Don't have an account?{" "}
         <p  className="underline font-bold">
           Sign Up
         </p>
       </button>
      </div>
    </div>
  );
}
