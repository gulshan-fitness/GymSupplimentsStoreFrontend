import React from 'react'

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function InputsWithOtp({otpSent,phone,setOtp,handleSendOtp,otp,handleVerifyOtp,setOtpSent,setPhone}){
  return (
    <div>
    {!otpSent ? (
      <div>
        <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">
          Phone Number
        </label>
        <div className="flex space-x-2">
          {/* Country Code Dropdown */}
          <div className="custom-phone-input w-full">
            <PhoneInput
              placeholder="Phone Number"
              value={phone}
              onChange={setPhone}
              defaultCountry="IN"
              className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#17412D] focus:outline-none border-[#17412D] bg-[#f6fffa] text-xs sm:text-sm"
            />
          </div>
        </div>
  
        <button 
          onClick={handleSendOtp} 
          className="w-full mt-3 py-2 sm:py-3 px-4 rounded-md text-white bg-[#17412D] hover:bg-opacity-90 text-xs sm:text-sm"
        >
          Send OTP
        </button>
      </div>
    ) : (
      <div>
        <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">
          Enter OTP
        </label>
        <input 
          type="number" 
          value={otp} 
          onChange={(e) => setOtp(e.target.value)} 
          className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#17412D] focus:outline-none border-[#17412D] bg-[#f6fffa] text-xs sm:text-sm" 
          placeholder="Enter OTP" 
          required 
        />
        
        <button 
          onClick={handleVerifyOtp} 
          className="w-full mt-3 py-2 sm:py-3 px-4 rounded-md text-white bg-[#17412D] hover:bg-opacity-90 text-xs sm:text-sm"
        >
          Verify OTP
        </button>
        
        <button 
          className="font-bold text-xs sm:text-sm mt-2 text-[#17412D]" 
          onClick={() => setOtpSent(false)}
        >
          Change Number
        </button>
      </div>
    )}
  </div>
  

  )
}
