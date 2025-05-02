
import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Context = createContext();

export default function Context_holder(props) {

const [UserCountry,setUserCountry]=useState("")

const [CountrySelectPopUp,setCountrySelectPopUp]=useState(false)

const [Products,setProducts]=useState([// {name:"(by Nutrabay) Instant Whey Protein| Naturally Flavoured & Sweetened with Monk Fruit | No Preservatives, 25g Protein - Dark Chocolate, 1 kg",image:"(by Nutrabay) Instant Whey.jpg",link:"https://amzn.to/3SbawF7", brand:"Athlab",category:"Whey Protein",bestseller:true
  // }, 
  // {name:"(by Nutrabay) CreaPower Micronized Creatine Monohydrate Powder - 100g | 100% Creapure® from Germany | NABL Lab Tested | 3g Creatine/Serving | Increases Muscle Mass, Strength, & Power",image:"(by Nutrabay) CreaPower Micronized Creatine Monohydrate.jpg",link:"https://amzn.to/4jx2L8s", brand:"Athlab",category:"Creatine",bestseller:true
  // },

  {name:"Optimum Nutrition Gold Standard 100% Whey Protein Powder for Muscle Growth and Recovery with Glutamine and Natural BCAA Amino Acids 30 Servings, 900 g",image:"Optimum Nutrition Gold Standard Whey Protein Powder.jpg", brand:"Optimum Nutrition",category:"Whey Protein",bestseller:true,
    IN:"",
    US:"https://amzn.to/4cY7pKf",
    GB:"https://amzn.to/3YXRaHh",
    CA:"https://amzn.to/3EGR1Bk",
    FR:"https://amzn.to/3ESFzT1",
    DE:"https://amzn.to/4iFSntV",
    IT:"https://amzn.to/432yAzg",

  },

  {name:"Optimum Nutrition Micronised Creatine Powder, 100% Pure Creatine Monohydrate Powder for Performance and Muscle Power, Unflavoured Shake, 93 Servings, 317 g",image:"Optimum Nutrition (ON) Micronized Creatine Powder.jpg", brand:"Optimum Nutrition",category:"Creatine",bestseller:true,
    IN:"",
    US:"https://amzn.to/3SffQax",
    GB:"https://amzn.to/3YRIRN5",
    CA:"https://amzn.to/4lRbt3b",
    FR:"https://amzn.to/4jQVqR4",
    DE:"https://amzn.to/3Yr1veK",
    IT:"https://amzn.to/3YZNGUL",


  },
  {
    name: "Dymatize Nutrition ISO100 Hydrolyzed Whey Protein Isolate | Fast-Digesting | Muscle Recovery Formula with Amino Acids | Low Sugar & Fat | Cookies & Cream | 5 Lbs",
    image: "Dymatize Nutrition ISO100 Hydrolyzed Whey Protein Isolate.jpg",
    brand: "Dymatize",
    category: "Whey Protein",
    bestseller: true,
    IN: "https://amzn.to/4jY0NOm",
    US: "https://amzn.to/3YXqo1L",
    GB: "https://amzn.to/4lRy2EZ",
    CA: "https://amzn.to/44dewfE",
    FR: "https://amzn.to/3GB4Ce3",
    DE: "https://amzn.to/3GtPTBE",
    IT: "https://amzn.to/3S4u0LP",
  },
  
  {
    name: "Dymatize Nutrition Elite 100% Whey Protein | Muscle Recovery | 25g Protein, 5.5g BCAA | Fast-Absorbing Protein | Gluten-Free | Blend with BCAAs & Glutamine | Rich Chocolate | 5 Lbs",
    image: "Dymatize Nutrition Elite 100 Whey Protein.jpg",
    brand: "Dymatize",
    category: "Whey Protein",
    bestseller: true,
    IN: "https://amzn.to/4kjfmfN",
    US: "https://amzn.to/3Shg9BE",
    GB: "https://amzn.to/4jsPSwe",
    CA: "https://amzn.to/3GC1PkU",
    FR: "https://amzn.to/3YVlmCQ",
    DE: "https://amzn.to/4jXqgay",
    IT: "https://amzn.to/3YpLyWc",
  }

,  
{
  name: "MuscleTech Nitro-Tech Whey Protein, 1.81kg (4lbs), Milk Chocolate, 30g Protein, 3g creatine monohydrate, 6.7g BCAA, ultimate muscle building formula, increase strength & performance",
  image: "MuscleTech Nitro-Tech Whey Protein.jpg",
  brand: "MuscleTech",
  category: "Whey Protein",
  bestseller: true,
  IN: "https://amzn.to/4d93Hxx",
  US: "https://amzn.to/3ShNtIM",
  GB: "https://amzn.to/3YZ9orX",
  CA: "https://amzn.to/4lZ17ye",
  FR: "https://amzn.to/3GzWgmS",
  DE: "https://amzn.to/43dxYYE",
  IT: "https://amzn.to/4d2mwmb",
},

{
  name: "Jacked Factory Creatine Monohydrate Powder 425g - Canadian-Owned Informed Choice Certified Supplement for Increased Muscle Mass*, Improved Strength, Power, & Performance** - 85 Servings, Unflavored",
  image: "Jacked Factory Creatine Monohydrate Powder 425g.jpg",
  brand: "Jacked Factory",
  category: "Creatine",
  bestseller: true,
  IN: "",
  US: "https://amzn.to/4jD97Dy",
  GB: "",
  CA: "https://amzn.to/431VA1e",
  FR: "",
  DE: "",
  IT: "",
},

{
  name: "MuscleTech Platinum 100% Creatine Powder (Unflavoured - 250 Gram,83 Serves),Scientifically Researched to Build Muscle - Increase Muscle Power,Boost Strength & Enhance Performance,1 count,83 servings",
  image: "MuscleTech Platinum 100 Creatine Powder.jpg",
  brand: "MuscleTech",
  category: "Creatine",
  bestseller: true,
  IN: "https://amzn.to/4jY5jwd",
  US: "https://amzn.to/3Z1MKz9",
  GB: "https://amzn.to/3RIw8Zt",
  CA: "https://amzn.to/3GALXyY",
  FR: "",
  DE: "https://amzn.to/3GDSCbF",
  IT: "",
},

{
  name: "Optimum Nutrition Micronized Creatine Monohydrate Powder, Unflavored, 240 Servings, 1200 Grams",
  image: "Optimum Nutrition (ON) Micronized Creatine Powder.jpg",
  brand: "Optimum Nutrition",
  category: "Creatine",
  bestseller: true,
  IN: "",
  US: "https://amzn.to/43lbkg3",
  GB: "https://amzn.to/3EBHhZ7",
  CA: "https://amzn.to/4lZ2M6W",
  FR: "https://amzn.to/431WQS0",
  DE: "https://amzn.to/44SS3EN",
  IT: "https://amzn.to/4m36BIk",
},

{
  name: "Optimum Nutrition Gold Standard Pre Workout Energy Powder Drink with Creatine Monohydrate, Beta Alanine, Caffeine & Vitamin B Complex by ON - Fruit Punch, 30 Servings, 330g",
  image: "Optimum Nutrition Gold Standard Pre Workout Energy Powder Drink.jpg",
  brand: "Optimum Nutrition",
  category: "Pre Workout",
  bestseller: true,
  IN: "",
  US: "https://amzn.to/4iU4Ev6",
  GB: "https://amzn.to/3GAMKQs",
  CA: "",
  FR: "https://amzn.to/3YqxHyQ",
  DE: "https://amzn.to/4m2efmk",
  IT: "https://amzn.to/4m2ei1u",
},

{
  name: "Optimum Nutrition Serious Mass, Weight Gainer Protein Powder, Mass Gainer, Vitamin C and Zinc for Immune Support, Creatine, Vanilla, 6 Pound (Packaging May Vary)",
  image: "Optimum Nutrition Serious Mass.jpg",
  brand: "Optimum Nutrition",
  category: "Mass & Weight Gainers",
  bestseller: true,
  IN: "",
  US: "https://amzn.to/3EVkxDi",
  GB: "https://amzn.to/4jY894l",
  CA: "https://amzn.to/4jY8wff",
  FR: "https://amzn.to/44frvNT",
  DE: "https://amzn.to/4k68jXH",
  IT: "https://amzn.to/3RKB0xa",
},

])

  const notify = (msg, status) => {
    toast(msg, {
      position: "top-right",
      type: status === 1 ? "success" : "error",
    });
  };

  const Brands = [
    { name: "Jacked Factory"},
    { name: "Nutrabay" },
    { name: "Athlab" },
    { name: "Optimum Nutrition" },
    { name: "MuscleTech" },
    { name: "Dymatize" },
    { name: "Aarkios" },
    { name: "Absolute Nutrition" },
    { name: "Alpino" },
    { name: "AS-IT-IS" },
    { name: "Avvatar" },
    { name: "Aesthetic Nutrition" },
    { name: "Bigmuscles Nutrition" },
    { name: "Bolt" },
    { name: "BPI Sports" },
    { name: "Bigflex" },
    { name: "BestSource Nutrition" },
    { name: "CaliBar" },
    { name: "Carbamide Forte" },
    { name: "Chicnutrix" },
    { name: "Cobra Labs" },
    { name: "Cutler Nutrition" },
    { name: "Condemned" },
    { name: "Con-cret" },
    { name: "Dexter Jackson" },
    { name: "Doctor's Choice" },
    { name: "Dr. Morepen" },
    { name: "Dr. Vaidya's" },
    { name: "Decode Age" },
    { name: "Evlution Nutrition" },
    { name: "FA Core" },
    { name: "Fast&Up" },
    { name: "Foresta Organics" },
    { name: "Gaspari" },
    { name: "GAT" },
    { name: "Genetic Nutrition" },
    { name: "Gibbon Nutrition" },
    { name: "GNC" },
    { name: "Ghost" },
    { name: "Gladful" },
    { name: "HealthAid" },
    { name: "Healthfarm" },
    { name: "HealthyHey Nutrition" },
    { name: "Healthyr-U" },
    { name: "International Protein" },
    { name: "Isopure" },
    { name: "Inja Wellness" },
    { name: "JYM" },
    { name: "Kaged Muscle" },
    { name: "Kapiva" },
    { name: "Kevin Levrone" },
    { name: "Labrada" },
    { name: "Muscle Asylum" },
    { name: "MuscleBlaze" },
    { name: "Mutant" },
    { name: "Myfitness Peanut Butter" },
    { name: "Myfitness" },
    { name: "Mountainor" },
    { name: "Nakpro" },
    { name: "Naturaltein" },
    { name: "Neuherbs" },
    { name: "Now Foods" },
    { name: "Nutrabay" },
    { name: "Nortech Nutrition" },
    { name: "Nourish Organics" },
    { name: "One Science Nutrition" },
    { name: "Pole Nutrition" },
    { name: "Power Gummies" },
    { name: "Proathlix" },
    { name: "Proquest" },
    { name: "ProSupps" },
    { name: "Pure Nutrition" },
    { name: "Perfectil" },
    { name: "Promunch" },
    { name: "Pintola" },
    
    { name: "Redcon1" },
    { name: "RiteBite" },
    { name: "Ronnie Coleman" },
    { name: "Rule1" },
    { name: "RAW Nutrition" },
    { name: "Rasayanam" },
    { name: "SAN" },
    { name: "Scitron" },
    { name: "Swisse" },
    { name: "Steadfast Nutrition" },
    { name: "SuperYou" },
    { name: "Sweetmate" },
    { name: "Setu Nutrition" },
    { name: "TruNativ" },
    { name: "The Whole Truth" },
    { name: "Tata 1mg" },
    { name: "Ultimate Nutrition" },
    { name: "Upakarma Ayurveda" },
    { name: "Unmatched" },
    { name: "Vlado's Himalayan Organics" },
    { name: "Velbiom" },
    { name: "Wellbeing Nutrition" },
    { name: "Wellversed" },
    { name: "Wellwoman" },
    { name: "Wellman" },
    { name: "Wheymill" },
    { name: "YogaBar" }
  ];
  

const Categories = [
  { name: "Protein Powders" },
  { name: "Whey Protein" },
  { name: "Protein Blends" },
  { name: "Casein Protein" },
  { name: "Vegan Plant Protein" },
  { name: "High Protein Food" },
  { name: "Protein Bars" },
  { name: "Protein Cookies & Brownies" },
  { name: "Protein Snacks" },
  { name: "Protein Flour" },
  { name: "Mass & Weight Gainers" },
  { name: "Amino Acids" },
  { name: "BCAAs (Branched Chain Amino Acids)" },
  { name: "EAAs (Essential Amino Acids)" },
  { name: "Amino Blends" },
  { name: "Creatine" },
  { name: "L Glutamine" },
  { name: "L Arginine" },
  { name: "Citrulline Malate" },
  { name: "L Leucine" },
  { name: "L Carnitine" },
  { name: "Beta Alanine" },
  { name: "HMB" },
  { name: "Taurine" },
  { name: "L Tyrosine" },
  { name: "Pre Workout" },
  { name: "Electrolytes & Energy Drinks" },
  { name: "Fat Burners" },
  { name: "Testosterone Boosters (Natural)" },
  { name: "Meal Replacements" },
  { name: "Keto Foods" },
  { name: "Diuretic Water Pills" },
  { name: "Vitamins & Supplements" },
  { name: "Multivitamins" },
  { name: "General Multivitamins" },
  { name: "Multivitamins for Men" },
  { name: "Multivitamins for Women" },
  { name: "Multivitamins for Kids" },
  { name: "Single Vitamins" },
  { name: "Vitamin A" },
  { name: "Vitamin B & Complex" },
  { name: "Vitamin C" },
  { name: "Vitamin D" },
  { name: "Vitamin E" },
  { name: "Speciality Supplements" },
  { name: "Supplements for Digestion" },
  { name: "Supplements for Liver & Kidney" },
  { name: "Supplements for Skin & Hair" },
  { name: "Supplements for Diabetes" },
  { name: "Supplements for Immunity" },
  { name: "Supplements for Bone & Joints" },
  { name: "Supplements for Sleep" },
  { name: "Supplements for PCOD" },
  { name: "Supplements for Vitality" },
  { name: "Prenatal Vitamins" },
  { name: "Minerals" },
  { name: "Calcium" },
  { name: "Magnesium" },
  { name: "Zinc" },
  { name: "Iron" },
  { name: "Chromium" },
  { name: "Selenium" },
  { name: "Omega & Essential Fats" },
  { name: "Omega 3 6 9" },
  { name: "Fish Oil" },
  { name: "Flaxseed Oil Capsules" },
  { name: "Antioxidants" },
  { name: "Natural Extracts & Ayurveda" },
  { name: "Health Food & Drinks" },
  { name: "Health Food" },
  { name: "Nut Butters" },
  { name: "Nutrition Bars" },
  { name: "Chyawanprash & Herbal Formulations" },
  { name: "Cereals" },
  { name: "Nuts, Seeds & Grains" },
  { name: "Health Drinks" },
  { name: "Cold Pressed & Cooking Oils" },
  { name: "Sweeteners" },
  { name: "Workout Equipment" },
  { name: "Tshirts" }
];




 




  return (
    <Context.Provider
      value={{
     notify,Products,Categories,Brands,UserCountry,setUserCountry,CountrySelectPopUp,setCountrySelectPopUp,setProducts
      }}
    >
      {props.children}

      <ToastContainer />
    </Context.Provider>
  );
}

export { Context };
