import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
const Piaic = () => {
  return (
    <div>
      <div className="mt-2">
        <Navbar />
      </div>
      <div>
        <ul className="mt-7 flex justify-end mr-10">
          <li className="hover:bg-teal-700 rounded-full px-5 m-1 py-2 hover:text-white text-center font-semibold">
            How it works
          </li>
          <li className="hover:bg-teal-700 rounded-full px-5 m-1 py-2 hover:text-white text-center font-semibold">
            Apply
          </li>
          <li className="hover:bg-teal-700 rounded-full px-5 m-1 py-2 hover:text-white text-center font-semibold">
            Available Programs
          </li>
          <li className="hover:bg-teal-700 rounded-full px-5 m-1 py-2 hover:text-white text-center font-semibold">
            About
          </li>
          <li className="hover:bg-teal-700 rounded-full px-5 m-1 py-2 hover:text-white text-center font-semibold">
            WIT
          </li>
        </ul>
      </div>
      <div className="mt-5 ml-10 mr-10 flex justify-between">
        <img src="./president.jpeg" alt="Logo" width="200" height="200"></img>
        <Image
          src="./PIAICLogo.svg"
          alt="Logo"
          width="100"
          height="100"
        ></Image>
      </div>
      <div className="hover:bg-teal-700 hover:text-white p-7 mr-10 ml-10 mt-5 bg-gray-300 rounded-full">
        <span>
          <h1 className="font-bold text-teal-950 hover:text-white">
            Presidential Initiative for Artificial Intelligence & Computing
            (PIAIC)
          </h1>
          <h1 className="flex flex-wrap">
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-700 relative inline-block">
              <span className="relative text-white">augmented reality</span>
            </span>
            , and internet of things.
          </h1>
        </span>
      </div>
      <div className="p-2 mr-10 ml-10 mt-5 bg-gray-300 rounded-full text-2xl text-center hover:bg-teal-700 hover:text-white hover:py-2">
        Available Programs
      </div>
      <div>
        <div className="p-2 bg-gray-300 text-center container gap-8 grid grid-cols-4 mt-5 mr-10 ml-10 justify-between rounded-full">
          <div className="hover:bg-teal-700 hover:text-white hover:py-2 rounded-full text-center">
            Artificial Intelligence
          </div>
          <div className="hover:bg-teal-700 hover:text-white hover:py-2 rounded-full text-center">
            Cloud Native and Mobile Web Computing Specialist
          </div>
          <div className="hover:bg-teal-700 hover:text-white hover:py-2 rounded-full text-center">
            BLOCKCHAIN Specialist
          </div>
          <div className="hover:bg-teal-700 hover:text-white hover:py-2 rounded-full text-center">
            Internet of Things and AI Specialist
          </div>
        </div>
      </div>
      <div className="justify-center">
        <h1 className="p-7 justify-centert rounded-full px-5 m-1 py-2 hover:text-teal-700 text-center font-semibold">
          <Link href="https://portal.piaic.org/signup">Apply</Link>
        </h1>
      </div>
    </div>
  );
};

export default Piaic;
