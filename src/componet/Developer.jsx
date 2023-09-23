import React from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.webp";

const Developer = () => {
  return (
    <div className="bg-[#f4f9f9] pb-40">

        <div className="py-32 text-center">

            <h1 className=" font-bold text-[48px] px-10 ">Here are our heroes</h1>

            <p className=" font-semibold text-[#1e1f26] text-xl pt-5 ">According to the National Oceanic and Atmospheric Administration, 
            </p>
            <p  className=" font-semibold text-[#1e1f26] text-xl ">
            Ted, Scambos, NSIDClead scentist, 
            puts the potentially record 

            </p>

            <p  className=" font-semibold text-[#1e1f26] text-xl ">
            maximum.

            </p>


        </div>


      <div className="flex flex-wrap justify-center p-5 gap-20">

        <div className=" shadow-zinc-300 shadow-2xl ">
          <img
            src={pic4}
            className="w-[300px] h-[300px] rounded-lg shadow-2xl "
            alt="pic1"
          />
          <h1 className="text-xl font-semibold px-3 text-center">
            Jenna Kardi
          </h1>
          <h2 className="text-lg text-center font-semibold">Web Developer</h2>
        </div>

        <div className=" shadow-zinc-300 shadow-2xl ">
          <img
            src={pic2}
            className="w-[300px] h-[300px] rounded-lg shadow-2xl "
            alt="pic1"
          />
          <h1 className="text-xl font-semibold px-3 text-center">
            Jenna Kardi
          </h1>
          <h2 className="text-lg text-center font-semibold">Web Developer</h2>
        </div>

        <div className=" shadow-zinc-300 shadow-2xl ">
          <img
            src={pic3}
            className="w-[300px] h-[300px] rounded-lg shadow-2xl "
            alt="pic1"
          />
          <h1 className="text-xl font-semibold px-3 text-center">
            Jenna Kardi
          </h1>
          <h2 className="text-lg text-center font-semibold">Web Developer</h2>
        </div>

        <div className=" shadow-zinc-300 shadow-2xl ">
          <img
            src={pic1}
            className="w-[300px] h-[300px] rounded-lg shadow-2xl "
            alt="pic1"
          />
          <h1 className="text-xl font-semibold px-3 text-center">
            Jenna Kardi
          </h1>
          <h2 className="text-lg text-center font-semibold">Web Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Developer;
