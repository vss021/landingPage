import React from "react";
import { BsFillAwardFill } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className=" md:text-center px-2 md:pt-32 text-white md:w-1/2 m-auto">

        <h1 className=" text-center pt-20 md:pt-0 text-2xl xl:text-[44px] md:text-[32px] font-bold  max-md:font-extrabold">
          Your story starts with Us.
        </h1>
        <p className=" text-sm md:text-lg text-center md:px-3 py-3  lg:text-2xl font-bold">
          This is a simple example of a Landing Page you can build using
          Tailwind css . It features multiple components based on the Tailwind
          CSS and Design by .  
        </p>
        <span className="text-5xl font-extrabold flex justify-center">VIJAY</span>
      </div>

      <div className="lg:pt-48 hidden sm:flex flex-wrap    md:px-10 lg:gap-10 gap-10 justify-center ">
        <div className=" bg-[#1e1f26]  w-[300px] h-[220px]   rounded-xl flex flex-col grayscale items-center text-blue-600 gap-3 justify-center">
          <BsFillAwardFill className="border-2 p-1  border-gray-500 rounded-full shadow-3xl h-12 w-12 " />
          <p className="m-auto p-2 bg-[#1e1f26]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            iure ipsum sapiente error esse. Saepe?
          </p>
        </div>
        <div className=" bg-[#1e1f26]  w-[300px] h-[220px]   rounded-xl flex flex-col grayscale items-center text-blue-600 gap-3 justify-center">
          <BsFillAwardFill className="border-2 p-1  border-gray-500 rounded-full shadow-3xl h-12 w-12 " />
          <p className="m-auto p-2 bg-[#1e1f26]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            iure ipsum sapiente error esse. Saepe?
          </p>
        </div>
        <div className=" bg-[#1e1f26]  w-[300px] h-[220px]   rounded-xl flex flex-col grayscale items-center text-blue-600 gap-3 justify-center">
          <BsFillAwardFill className="border-2 p-1  border-gray-500 rounded-full shadow-3xl h-12 w-12 " />
          <p className="m-auto p-2 bg-[#1e1f26]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            iure ipsum sapiente error esse. Saepe?
          </p>
        </div>
        <div className=" bg-[#1e1f26]  w-[300px] h-[220px]   rounded-xl flex flex-col grayscale items-center text-blue-600 gap-3 justify-center">
          <BsFillAwardFill className="border-2 p-1  border-gray-500 rounded-full shadow-3xl h-12 w-12 " />
          <p className="m-auto p-2 bg-[#1e1f26]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            iure ipsum sapiente error esse. Saepe?
          </p>
        </div>

      </div>
    </>
  );
};

export default Hero;
