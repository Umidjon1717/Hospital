import React from "react";
import element from '../assets/bg-element-2.png'
import element2 from '../assets/element-3.png'

const Helping = ({ helpingData }) => {
  return (
    <section className="">
      <div className="max-w-[1180px] my-0 mx-auto px-[16px] py-10 text-center space-y-4">
        {helpingData.map((data, index) => (
          <div
            key={index}
            className={`flex items-center space-x-6 mb-20 ${
              index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <img
              className="w-[650px] h-auto"
              src={data.image}
              alt={data.title}
            />
            <div className="text-left space-y-4">
              <h3 className="text-[#462E6A] text-[36px] font-bold">
                {data.title}
              </h3>
        <div className="w-12 h-[2px] bg-black "></div>
              <p className="text-[#7D7987] text-[18px]">{data.description}</p>
              <button className="text-[#458FF6] border-[#458FF6] border-solid border-[1px] px-9 py-3 rounded-[50px] bg-transparent ">Learn more</button>
              <div className="mb-80"></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Helping;
