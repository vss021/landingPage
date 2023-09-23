import React from "react";
import { AiFillStar } from "react-icons/ai";

const Contact = () => {
  return (
    <div className=" bg-white py-20">
      <div className=" text-center">
        <h1 className="text-4xl font-semibold">Build something</h1>

        <p className="text-xl pt-5">
          Put the potentially record low maximum sea ice extent tihs year down
        </p>
        <p className="text-xl ">
          to low ice.According to the National Oceanic and Atmospheric
        </p>
        <p className="text-xl ">Administration, Ted, Scambos.</p>
      </div>

      <div className=" pt-10 flex justify-center flex-wrap items-center gap-x-20">

        <div className="w-[300px] h-[200px] flex flex-col items-center p-5 rounded-3xl shadow-2xl ">
          <AiFillStar className="h-10 w-10  text-slate-800 bg-slate-200 rounded-full p-1" />

          <p className="text-lg pt-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="w-[300px] h-[200px] flex flex-col items-center p-5 rounded-3xl shadow-2xl ">
          <AiFillStar className="h-10 w-10  text-slate-800 bg-slate-200 rounded-full p-1" />

          <p className="text-lg pt-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="w-[300px] h-[200px] flex flex-col items-center p-5 rounded-3xl shadow-2xl ">
          <AiFillStar className="h-10 w-10  text-slate-800 bg-slate-200 rounded-full p-1" />

          <p className="text-lg pt-5">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="py-20 text-center">
        <h1 className="pt-10  text-4xl font-semibold pb-3">
          Want to work with us?
        </h1>
        <h2 className="text-xl">
          Complete this form and we will get back to you in 24 hours.
        </h2>
      </div>

      <form action="" className=" text-center px-2">

        <div className="pb-10  flex flex-wrap  justify-center gap-y-3">

          <label htmlFor="text" className="lg:px-20 px-8 pr-3 text-xl">
            Name:
          </label>

          <input
            type="text"
            name="name"
            id="name"
            className=" focus:outline-none border-b-2 px-5 "
          />

          
          <label className="lg:px-20 px-8 pr-3 text-xl" htmlFor="text">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="name"
            className=" focus:outline-none border-b-2 px-5"
          />
        </div>

        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Message "
          className=" md:w-[620px] focus:outline-none border-2 border-sky-300 rounded-xl p-2"
        />
        <br />

    <button className =" bg-sky-500 p-4 w-56 rounded-full hover:shadow-2xl text-xl font-semibold m-5">SEND MESSAGE</button>
      </form>

    </div>
  );
};

export default Contact;
