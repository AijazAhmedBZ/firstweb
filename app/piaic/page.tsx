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
          <li className="text-teal-950 text-center font-semibold rounded-full px-5 m-1 py-2 shadow- hover:bg-teal-950 hover:text-white">
            <Link href="hiw">How it works</Link>
          </li>
          <li className="text-teal-950 text-center font-semibold rounded-full px-5 m-1 py-2 shadow- hover:bg-teal-950 hover:text-white">
            <Link href="https://portal.piaic.org/signup">Apply</Link>
          </li>
          <li className="text-teal-950 text-center font-semibold rounded-full px-5 m-1 py-2 shadow- hover:bg-teal-950 hover:text-white">
            Available Programs
          </li>
          <li className="text-teal-950 text-center font-semibold rounded-full px-5 m-1 py-2 shadow- hover:bg-teal-950 hover:text-white">
            About
          </li>
          <li className="text-teal-950 text-center font-semibold rounded-full px-5 m-1 py-2 shadow- hover:bg-teal-950 hover:text-white">
            WIT
          </li>
        </ul>
      </div>
      <div className="mt-5 ml-10 mr-10 flex justify-between">
        <img src="./aa.png" alt="Logo" width="300" height="300"></img>
        <div className="p-7 mr-10 ml-10 mt-5 bg-gray-300 rounded-lg">
          <span>
            <h1 className="text-6xl font-bold text-teal-950">
              Presidential Initiative for Artificial Intelligence & Computing
              (PIAIC)
            </h1>
            <br />
            <br />
            <br />
            <h1 className="flex flex-wrap text-xl">
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-950 relative inline-block">
                <span className="relative text-white">augmented reality</span>
              </span>
              , and internet of things.
            </h1>
          </span>
        </div>
        <Image
          src="./PIAICLogo.svg"
          alt="Logo"
          width="300"
          height="300"
        ></Image>
      </div>
      <div className="p-2 mr-10 ml-10 mt-5 bg-gray-300 rounded-full text-2xl text-center hover:bg-teal-700 hover:text-white hover:py-2">
        Available Programs
      </div>
      <div>
        <div className="p-2 bg-gray-300 text-center container gap-8 grid grid-cols-4 mt-5 mr-10 ml-10 justify-between rounded-full">
          <div className="hover:bg-teal-700 hover:text-white hover:py-2 rounded-full text-center">
            <Link href="ai">Artificial Intelligence</Link>
          </div>
          <div className="hover:bg-teal-700 hover:text-white hover:py-2 rounded-full text-center">
            <Link href="cnc">
              Cloud Native and Mobile Web Computing Specialist
            </Link>
          </div>
          <div className="hover:bg-teal-700 hover:text-white hover:py-2 rounded-full text-center">
            <Link href="bc">BLOCKCHAIN Specialist</Link>
          </div>
          <div className="hover:bg-teal-700 hover:text-white hover:py-2 rounded-full text-center">
            <Link href="iot">Internet of Things and AI Specialist</Link>
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
