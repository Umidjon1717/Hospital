import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Helping from "./components/Helping";
import Comments from "./components/Comments";
import card1 from "./assets/Frame-16.png";
import card2 from "./assets/Group-4.png";
import card3 from "./assets/Frame-17.png";
import card4 from "./assets/Frame-18.png";
import card5 from "./assets/Frame-19.png";
import card6 from "./assets/Group-5.png";
import helping1 from "./assets/hos.png";
import helping2 from "./assets/wom.png";
import helping3 from "./assets/like.png";
import Footer from "./components/Footer";

const helpingData=[
  {
    image:helping1,
    title:"Leading healthcare providers",
    description:"Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
  },
  {
    image:helping2,
    title:"Download our Saviour Care mobile app",
    description:"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
  },
  {
    image:helping3,
    title:"Find a Doctor near you",
    description:"Our  app and web portal allows you to find the doctor to your nearest location. "
  }
]


const cardData = [
  {
    image: card1,
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialists, generalists, and trusted hospitals.",
  },
  {
    image: card2,
    title: "Online pharmacy",
    description:
      "Find the best hospitals and clinics for your healthcare needs.",
  },
  {
    image: card3,
    title: "Consultation",
    description:
      "Easily book appointments with trusted medical professionals.",
  },
  {
    image: card4,
    title: "Details info",
    description:
      "Monitor your health with our advanced tools and services.",
  },
  {
    image: card5,
    title: "Emergency care",
    description:
      "Access and manage your prescriptions online with ease.",
  },
  {
  image: card6,
  title: "Tracking",
  description:
    "Access and manage your prescriptions online with ease.",
},
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Service cardData={cardData} />
      <Helping helpingData={helpingData}/>
      <Comments/>
      <Footer/>
    </>
  );
}

export default App;
