
import { useContext, useState } from "react";
import { Context } from "../Context_holder";
import Select from 'react-select';
import { useEffect } from "react";


export default function Admin() {
    const {Products,Categories,Brands,setProducts}=useContext(Context)


    const [selectedBrand, setSelectedBrand] = useState(null);
const [selectedCategory, setSelectedCategory] = useState(null);


useEffect(
    ()=>{
const StoredProducts= JSON.parse(localStorage.getItem("Products"))
if (!StoredProducts || StoredProducts?.length==0) localStorage.setItem("Products",JSON.stringify([]))

       
    },[]
)
    


    const handleSubmit = (e) => {
        e.preventDefault();
      
        const name = e.target.name.value;
        const image = `${e.target.image.value}.jpg`;
        const brand = selectedBrand?.value || null;
        const category = selectedCategory?.value || null
        const bestseller = e.target.bestseller.checked;
      
        const IN = e.target.IN.value;
        const US = e.target.US.value;
        const GB = e.target.GB.value;
        const CA = e.target.CA.value;
        const FR = e.target.FR.value;
        const DE = e.target.DE.value;
        const IT = e.target.IT.value;
      
    
      
        const productData = {
          name,
          image,
          brand,
          category,
          bestseller,
          IN,
          US,
          GB,
          CA,
          FR,
          DE,
          IT,
        };
      
  
        const StoredProducts= JSON.parse(localStorage.getItem("Products"))
        if(StoredProducts)
        {    
            localStorage.setItem("Products",JSON.stringify([...StoredProducts,productData]))
        }
        else{
          localStorage.setItem("Products",JSON.stringify([productData]))
        }


        e.target.reset()
        setSelectedBrand(null)
        setSelectedCategory(null)

      };


      

      const handleDownload = () => {
        const data = JSON.parse(localStorage.getItem("Products")) || [];
    
        const formatJSObject = (obj) => {
          const lines = Object.entries(obj).map(([key, value]) => {
            const formattedValue =
              typeof value === "string"
                ? `"${value}"`
                : value === null
                ? "null"
                : typeof value === "boolean"
                ? value
                : value;
            return `  ${key}: ${formattedValue},`;
          });
          return `{\n${lines.join("\n")}\n}`;
        };
    
        const formattedArray = data.map(formatJSObject).join(",\n\n");
    
        const jsCode = `export const copiedArray = [\n${formattedArray}\n];`;
    
        const blob = new Blob([jsCode], { type: "text/javascript" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "copiedData.js";
        link.click();
      };
    
      

  return (
    <div className="pb-9">
         <form
    onSubmit={handleSubmit}
    className="max-w-2xl mx-auto p-6 bg-[#1a1a1a] text-white rounded-2xl shadow-lg space-y-4"
  >
    <h2 className="text-xl font-bold text-white">Add Product</h2>
  
    <input
      type="text"
      name="name"
      placeholder="Product Name"
      className="w-full bg-[#2a2a2a] text-white border border-gray-600 placeholder-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  
    <input
      type="text"
      name="image"
      placeholder="Image Filename"
      className="w-full bg-[#2a2a2a] text-white border border-gray-600 placeholder-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  
  <Select
  name="brand"
  options={Brands?.map(

    data=> ({label:data?.name,value:data?.name}  )
    

  )}
  value={selectedBrand}
  onChange={setSelectedBrand}
  className="text-black"
  placeholder="Select Brand"
/>

<Select
  name="category"
  options={Categories.map(

    data=> ({label:data?.name,value:data?.name}  )
    

  )}
  value={selectedCategory}
  onChange={setSelectedCategory}
  className="text-black "
  placeholder="Select Category"
  
/>

  
    <label className="flex items-center gap-2 text-white">
      <input type="checkbox" name="bestseller" className="accent-blue-500" />
      Bestseller
    </label>
  
    <div className="grid grid-cols-2 gap-4">
      {["IN", "US", "GB", "CA", "FR", "DE", "IT"]?.map((country) => (
        <input
          key={country}
          type="url"
          name={country}
          placeholder={`${country} Amazon Link`}
          className="bg-[#2a2a2a] text-white border border-gray-600 placeholder-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
    >
      Submit
    </button>
  </form>


<div className="flex justify-between px-2 items-center mt-4">
<button
      onClick={handleDownload}
      className="px-4 py-1 bg-blue-600   text-white rounded hover:bg-blue-700 transition"
    >
      Download Array File
    </button>

    {/* <button
      onClick={()=>{
        localStorage.removeItem("Products")
      }}
      className="px-4 py-1 bg-[red]  text-white rounded  transition"
    >
     Delete
    </button> */}
</div>


    </div>
   
  
  );
}




