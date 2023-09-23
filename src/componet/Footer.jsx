import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2c2d2d] text-white text-center">
      <div className=" flex justify-around">
        <ul className=" text-start">
          <h2>USEFUL LINKS</h2>
          <li>About Us</li>
          <li>Blog</li>
          <li>Github</li>
        </ul>

        <ul className="text-start">
          <h2>OTHER RESOURCES</h2>
          <li>MIT License</li>

          <li>Contribute</li>
          <li>Change Log</li>

          <li>Contact Us</li>
        </ul>
      </div>

      <hr />
      <h2>Copyright © 2023</h2>
    </div>
  );
};

export default Footer;
