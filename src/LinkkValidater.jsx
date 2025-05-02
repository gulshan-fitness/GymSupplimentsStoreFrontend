import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Context_holder';
import axios from 'axios';

export default function LinkkValidater() {

   const{ Products}=useContext(Context)
   const[amazonLinks,setamazonLinks]=useState([])
   const [Results,setResults]=useState([])

   useEffect(
    ()=>{
        if(Products?.length==0)return

        setamazonLinks(Products?.map(data => {
            return [
              data?.IN,
              data?.US,
              data?.GB,
              data?.CA,
              data?.FR,
              data?.DE,
              data?.IT
            ]?.filter(link => link !== ""); // Filters out empty string links
          })?.flat()
          )
       

    },[Products]
   )

 
   
//    useEffect(() => {
//     if (amazonLinks?.length === 0) return;

//     amazonLinks.forEach((link, index) => {
//       const iframe = document.createElement('iframe');
//       iframe.style.display = 'none';
//       iframe.src = link;

//       iframe.onload = () => {
//         setResults((prev) => [
//           ...prev,
//           { link, valid: true, reason: 'Loaded successfully' }
//         ]);
//         document.body.removeChild(iframe);
//       };

//       iframe.onerror = () => {
//         setResults((prev) => [
//           ...prev,
//           { link, valid: false, reason: 'Failed to load (possible broken link)' }
//         ]);
//         document.body.removeChild(iframe);
//       };

//       document.body.appendChild(iframe);

//       // Timeout fallback if onload/onerror doesn't fire
//       setTimeout(() => {
//         if (document.body.contains(iframe)) {
//           setResults((prev) => [
//             ...prev,
//             { link, valid: false, reason: 'Timeout (no response)' }
//           ]);
//           document.body.removeChild(iframe);
//         }
//       }, 5000); // 5 seconds per link
//     });
//   }, [amazonLinks]);

const checkLinkStatus = async (url) => {
    try {
        const response = await axios.head(url, {
            maxRedirects: 5, // follow up to 5 redirects
            validateStatus: null, // prevent throwing errors on non-200
          });
      
          const status = response.status;
      
      // Use HEAD request to check link status
      if (response.status === 200) {
       
      } else {
        setResults((prev) => [
                      ...prev,
                      { url, valid: false, reason: 'response.status' }
                    ]);
        
      }
    } catch (error) {
     
    }
  };


  const checkLinks = async () => {
    for (let link of amazonLinks) {
      await checkLinkStatus(link);
    }
  };
   

       


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Amazon Affiliate Link Validation</h2>
<div className=' flex justify-center  '> <button className='border rounded-md px-2 mb-2 'onClick={checkLinks}>check</button></div>

      <table className="table-auto border border-collapse w-full text-sm">
        <thead>
          <tr>
            <th className="border px-2 py-1">Link</th>
            <th className="border px-2 py-1">Valid</th>
            <th className="border px-2 py-1">Reason</th>
          </tr>
        </thead>
        <tbody>
          {Results?.map((r, i) => (
            <tr key={i} className={r.valid ? "bg-green-50" : "bg-red-50"}>
              <td className="border px-2 py-1 truncate max-w-xs">{r.url}</td>
              <td className="border px-2 py-1">{r.valid ? "✅" : "❌"}</td>
              <td className="border px-2 py-1">{r.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
