import React from "react";
import icon from "../assets/icon.png";

const Comment = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1180px] mx-auto px-4 text-center space-y-8">
        <div className="w-full h-[480px] bg-custom-gradient rounded-xl p-8 flex flex-col justify-between">
          <h2 className="text-white text-3xl font-semibold">
            What our customers are saying
          </h2>
          <div className="w-12 h-[2px] bg-white mx-auto mt-[-200px]"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-6 mt-[-300px] ml-16">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={icon}
                  alt="icon"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-bold">AK</p>
                <p className="text-white text-sm">Abc Ltd</p>
              </div>
            </div>

            <div className="text-white  italic text-lg  text-left">
              <p className="mt-[-200px] mr-24">
                “Lorem ipsum dolor sit amet, <br /> <br />consectetuer adipiscing elit. <br /><br />
                Aenean commodo ligula eget dolor. Aenean massa.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
