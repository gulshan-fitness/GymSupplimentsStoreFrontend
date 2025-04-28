import React from 'react'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function InputsWithOutOtp({handleSubmit,loginMethod,phone,setPhone}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
  {loginMethod === "email" && (
    <div>
      <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">
        Email
      </label>
      <input 
        type="email" 
        name="email" 
        className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#17412D] focus:outline-none border-[#17412D] bg-[#f6fffa] placeholder:text-[#17412D] text-xs sm:text-sm" 
        placeholder="Enter your email" 
        required 
      />
    </div>
  )}

  {loginMethod === "phone" && (
    <div>
      <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">
        Phone Number
      </label>
      <div className="custom-phone-input">
        <PhoneInput
          placeholder="Phone Number"
          value={phone}
          onChange={setPhone}
          defaultCountry="IN"
          className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#17412D] focus:outline-none border-[#17412D] bg-[#f6fffa] text-xs sm:text-sm"
        />
      </div>
    </div>
  )}

  <div>
    <label className="block text-xs sm:text-sm font-medium mb-1 text-[#17412D]">
      Password
    </label>
    <input 
      type="password" 
      name="password" 
      className="w-full border rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-[#17412D] focus:outline-none border-[#17412D] bg-[#f6fffa] placeholder:text-[#17412D] text-xs sm:text-sm" 
      placeholder="Enter your password" 
      required 
    />
  </div>

  <button 
    type="submit" 
    className="w-full py-2 sm:py-3 px-4 rounded-md text-[#f6fffa] bg-[#17412D] hover:bg-opacity-90 text-xs sm:text-sm"
  >
    Login
  </button>
</form>

  )
}
