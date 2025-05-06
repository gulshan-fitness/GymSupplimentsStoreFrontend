import React, { useContext, useEffect, useState } from "react";

import { FaChevronDown } from "react-icons/fa";

import Select from "react-select";
import { Context } from "../Context_holder";


export default function FilterSection({resetHandler,setfilterPopUp}){


    const {Categories,selectedCategory,setselectedCategory,selectedBrand,setselectedBrand,selectedProduct,setselectedProduct,Brands
     
    }=useContext(Context);
  
    const [openDropdown, setOpenDropdown] = useState([]);

   useEffect(()=>{
    const dropDownSetter=(id)=>{
      setOpenDropdown(
        predata=>{
          const newarr=[...predata,id]
          return newarr
        }
      )
    }

    if(selectedCategory){
      dropDownSetter(7)
    }

    if(selectedBrand){
      dropDownSetter(9)
    }

    if(selectedProduct){
      dropDownSetter(10)
    }

  

   },[setselectedCategory,selectedBrand,selectedProduct])

  
    const toggleDropdown = (index) => {
      if (openDropdown.includes(index)) {
        setOpenDropdown(openDropdown.filter((i) => i !== index));
      } else {
        setOpenDropdown([...openDropdown, index]);
      }
    };

 
   
    
   
  
    return (
    <>
       <div className=" text-white py-2 rounded-xl border glow2 border-white px-2 max-h-screen thin-scrollbar overflow-y-auto">
      <h2 className="text-lg  px-3 pb-4 text-center font-semibold rounded-t-xl shadow-md text-[#f6fffa]">
       Filters
      </h2>
      
      {[ 
        { id: 7, label: "Categories", value: selectedCategory, setter: setselectedCategory, options: Categories },
        { id: 9, label: "Brand Name",  value: selectedBrand && selectedBrand, setter: setselectedBrand ,options: Brands }
       
      ]?.map(({ id, label, value, setter, options }) => (
        <div key={id} className="mb-3">
          <button onClick={() => toggleDropdown(id)} className="w-full flex justify-between items-center border border-white  p-3 rounded-lg shadow-sm transition-all">
            <span className="text-sm font-medium">{label}</span>
            <FaChevronDown className={`w-3 h-3 transition-transform ${openDropdown.includes(id) ? "rotate-180" : ""}`} />
          </button>
          {openDropdown.includes(id) && (
            <div className=" glow3  mt-2 rounded-lg shadow-md">
           <Select
  value={value}
  onChange={(e) => setter(e)}
  options={options?.map((data) => ({ value: data.name, label: data.name }))}
  styles={{
    control: (base, state) => ({
      ...base,
      padding: "2px 8px",
      backgroundColor: "transparent",
      color: "white",
      borderColor: "#facc15",
      boxShadow: state.isFocused ? "0 0 0 1px #facc15" : "none",
      "&:hover": {
        borderColor: "#facc15",
      },
      fontSize: "12px",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
    input: (base) => ({
      ...base,
      color: "white",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#000", // Optional: dark menu background for contrast
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "rgba(255,255,255,0.1)" : "transparent",
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "white",
    }),
  }}
/>

            </div>
          )}
        </div>
      ))}

      {[ 
        { id: 10, label: "Product Name",  value: selectedProduct && selectedProduct, setter: setselectedProduct },
       
      ].map(({ id, label, ref, value, setter }) => (
        <div key={id} className="mb-3">
          <button onClick={() => toggleDropdown(id)} className="w-full flex justify-between items-center border border-white  p-3 rounded-lg shadow-sm transition-all">
            <span className="text-sm font-medium">{label}</span>
            <FaChevronDown className={`w-3 h-3 transition-transform ${openDropdown?.includes(id) ? "rotate-180" : ""}`} />
          </button>
          {openDropdown?.includes(id) && (
            <div className="  mt-2 rounded-lg shadow-md flex flex-col gap-2">
              <input
  type="text" 
  value={value}
className="w-full px-3 py-2 glow3 text-white border border-[#facc15] bg-transparent placeholder:text-white rounded-md focus:outline-none text-sm"
  placeholder={label}

  
onChange={(e)=>{
    setter(e.target.value)
}}
/></div>
          )}
        </div>
      ))}
      
      
      <button className="py-2 px-4 border border-white glow2 text-white  w-full rounded-lg shadow-md mt-4 hover:opacity-90 transition-all text-sm font-semibold" onClick={resetHandler}>
        Reset
      </button>
     

    </div>

    <div className="flex justify-center font-semibold text-yellow-400 mt-7  "> <button className="border px-3 rounded-md glow3 border-yellow-400"
    onClick={()=>{
      setfilterPopUp(false)
      
    }}
    >Done</button> </div>
    </>
   
    );
  };
 
  