import React from "react";

import { TiGroup } from "react-icons/ti";
import { AiTwotoneHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { LiaSignInAltSolid } from "react-icons/lia";
import { VscSignIn } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex items-center justify-around text-white  ">

      <div className="flex gap-2 items-center ">

        <TiGroup className="w-10 h-16 " />
        <span className="text-3xl font-bold">Group</span>
      </div>
      
      <GiHamburgerMenu className="h-10 w-8 md:hidden "/>
      <ul className=" hidden md:flex">

        <li className="flex px-5 items-center text-lg font-semibold ">
          <AiTwotoneHome className="h-6  w-full px-2  " />
          Home
        </li>
        <li className="flex px-5 items-center text-lg font-semibold">
          About 
          
        </li>
        <li className="flex px-5 items-center text-lg font-semibold">
          <CgProfile className="h-6  w-full px-2  "/>
          Profile 
          
        </li>
        <li className="flex px-5 items-center text-lg font-semibold">
          <LiaSignInAltSolid className="h-6  w-full px-2  " />
          SignIn
        </li>
        <li className="flex px-5 items-center text-lg font-semibold">
          <VscSignIn className="h-6  w-full px-2  "/>
          SignUp
        </li>
      </ul>
    </div>
  );
};

export default Header;
