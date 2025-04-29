
import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Context = createContext();

export default function Context_holder(props) {


  const notify = (msg, status) => {
    toast(msg, {
      position: "top-right",
      type: status === 1 ? "success" : "error",
    });
  };

  const Brands = [
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

const Products=[
  {name:"(by Nutrabay) Instant Whey Protein| Naturally Flavoured & Sweetened with Monk Fruit | No Preservatives, 25g Protein - Dark Chocolate, 1 kg",image:"(by Nutrabay) Instant Whey.jpg",link:"https://amzn.to/3SbawF7", brand:"Athlab",category:"Whey Protein",bestseller:true
  }, 
  {name:"(by Nutrabay) CreaPower Micronized Creatine Monohydrate Powder - 100g | 100% Creapure® from Germany | NABL Lab Tested | 3g Creatine/Serving | Increases Muscle Mass, Strength, & Power",image:"(by Nutrabay) CreaPower Micronized Creatine Monohydrate.jpg",link:"https://amzn.to/4jx2L8s", brand:"Athlab",category:"Creatine",bestseller:true
  }
]


 




  return (
    <Context.Provider
      value={{
     notify,Products,Categories,Brands
      }}
    >
      {props.children}

      <ToastContainer />
    </Context.Provider>
  );
}

export { Context };
