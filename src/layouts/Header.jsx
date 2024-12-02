import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import Logo from "../assets/logo.png";
import { motion } from "motion/react";

export const Header = () => {
  return (
    <header className=" bg-[#0E0E0E] py-5">
      <motion.div
        initial={{ opacity: 0, y: "-10px" }}
        animate={{ opacity: 1, y: 0 }}
        className=" flex items-center justify-between relative max-w-[1500px] lg:w-[90%] lg:mx-auto"
      >
        <div className=" flex items-center gap-1 mx-auto lg:mx-0">
          <img
            src={Logo}
            alt="Headers logo"
            width={45}
            className=" min-[500px]:w-[50px]"
          />
          <span className=" font-roboto font-semibold text-white min-[500px]:text-lg">
            MUJORO
          </span>
        </div>

        <div className=" absolute top-0 right-0 lg:hidden">
          <Hamburger color="white" size={20} />
        </div>

        <nav className=" hidden lg:block">
          <ul className=" flex gap-10">
            <li>
              <a href="" className=" text-white font-roboto">
                About
              </a>
            </li>
            <li>
              <a href="" className=" text-white font-roboto">
                Product
              </a>
            </li>
            <li>
              <a href="" className=" text-white font-roboto">
                Store
              </a>
            </li>
            <li>
              <a href="" className=" text-white font-roboto">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};
