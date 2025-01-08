import React, { useEffect, useState } from "react";
import Logo from "../assets/image/webp/logo.webp";
import {  LINKS_LIST } from "../utils/helper";

const Header = () => {
  const [open , setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <div className="bg-transparent relative px-5 pt-3.5 max-xl:pt-5">
      <div className="max-w-[1140px] flex justify-between items-center mx-auto">
        <a href="/">
          <img
            className="max-w-[192px] max-md:max-w-[150px] max-sm:max-w-[120px]"
            src={Logo}
            alt="logo"
          />
        </a>
        <div
          className={`flex justify-center gap-8 items-center max-lg:flex-col max-lg:items-center max-lg:w-full max-lg:h-full max-lg:bg-dark-blue z-40 max-lg:fixed max-lg:top-0 max-lg:left-full max-lg:transition-all max-lg:duration-300 ${ open ? 'max-lg:!left-0' : ''}`}
        >
          {LINKS_LIST.map((item, index) => (
            <a onClick={() => setOpen(false)}
              className="text-white hover:scale-105 transition-all duration-300"
              key={index}
              href={item.link}
            >
              {item.name}
            </a>
          ))}
          <button onClick={() => setOpen(false)} className="font-semibold lg:hidden text-xl text-white hover:bg-button-gradient-hover bg-button-gradient py-[13.5px] px-8 rounded-[57px]">
            Get Started
          </button>
        </div>
        <button className="font-semibold text-xl max-lg:hidden hover:bg-button-gradient-hover text-white bg-button-gradient py-[13.5px] px-8 rounded-[57px]">
          Get Started
        </button>
        <button
          onClick={handleOpen}
          className="overflow-hidden relative z-50 lg:hidden size-6 flex flex-col justify-between items-center"
        >
          <span
            className={`bg-white rounded-md w-6 h-0.5 block transition-all duration-300 ${
              open ? "translate-x-10" : ""
            }`}
          ></span>
          <span
            className={`bg-white rounded-md after:rounded-lg w-6 h-0.5 block relative after:bg-white after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90" : ""
            }`}
          ></span>
          <span
            className={`bg-white rounded-md w-6 h-0.5 block transition-all duration-300 ${
              open ? "-translate-x-10" : ""
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
