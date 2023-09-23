import React from "react";
import bg from "../assets/bg3.jpg";
import Header from "./Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div
        className=" h-screen md:h-[700px] bg-contain w-screen   "
        style={{ background: `url(${bg})` }}
      >
        <Header />

        <Hero />
      </div>
    </>
  );
};

export default Home;
