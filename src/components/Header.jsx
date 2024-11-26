import React from "react";
import logo from "../assets/Logo.svg";
const Header = () => {
  return (
    <header>
      <div className="max-w-[1280px] my-0 mx-auto px-[16px] py-10">
        <div className="flex justify-between">
          <div className="flex">
             <img src={logo} alt="Saviour Care Logo" className="h-6 mt-2 mr-2"/>
            <h2 className="font-[800px] text-[#462E6A] text-[24px]">
              {" "} Saviour Care
            </h2>
          </div>
          <nav>
            <ul className="flex gap-10">
              {[
                "Home",
                "Find a doctor",
                "Apps",
                "Testimonials",
                "About us",
              ].map((item, index) => (
                <li key={index} className="font-normal text-[18px] text-[#1F1534] hover:text-[#462E6A] ">
                  <a href="#">
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
