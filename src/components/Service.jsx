import React from "react";
import element_service from "../assets/element-2.png";
import bg_element from "../assets/bg-element.png";

const Service = ({ cardData }) => {
  return (
    <section className="mt-32  relative mb-56">
      <div className="max-w-[1180px] my-0 mx-auto px-[16px] py-10 text-center space-y-4">
        <h2 className="text-[#462E6A] text-[45px]">Services we Offer</h2>
        <div className="w-12 h-[2px] bg-black mx-auto"></div>
        <p className="text-[#CCD2E9] w-[800px] mx-auto ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>

        <div className="p-6 rounded-lg flex flex-wrap justify-between gap-6  ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[350px] h-[354px] bg-white z-10 flex flex-col items-center space-y-6 shadow-lg hover:scale-[1.05] hover:duration-150"
            >
              <img
                className="max-w-full h-auto mt-16 mb-6"
                src={card.image}
                alt={card.title}
              />
              <h3 className="text-[24px] font-bold ">{card.title}</h3>
              <p className="text-[#7D7987] text-left text-[16px] px-5 mt-20 font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <button className="text-[#458FF6] border-[#458FF6] border-solid border-[1px] px-9 py-3 rounded-[50px] bg-transparent">Learn more</button>
      </div>
      <div className="flex justify-between absolute bottom-0 left-0 right-0 z-0">
        <img className="mt-[-250px]" src={bg_element} alt="bg" />
        <img
          className="w-[131px] h-[115px] mt-64 mr-[265px]"
          src={element_service}
          alt="element"
        />
      </div>
    </section>
  );
};

export default Service;
