import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Piaic_buttons from "../components/piaic_buttons";
import Button from "../components/Button";
const Piaic = () => {
  return (
    <div>
      <section className="mt-2">
        <Navbar />
      </section>
      <header className="mt-7 flex justify-between max-w-screen-xl mx-auto items-center py-6 px-2 sticky top-0 blur-0 flex-col md:flex-row">
        <Image
          src="./PIAICLogo.svg"
          alt="Logo"
          width="100"
          height="100"
        ></Image>
        {/* <div className="space-x-8 space-y-8 flex items-between flex-col md:flex-row">
          <Button text="How it Works" />
          <Button text="Apply" />
          <Button text="Available Programs" />
          <Button text="About" />
          <Button text="WIT" />
        </div> */}
        <ul className="space-x-8 space-y-8 flex font-semibold items-between flex-col md:flex-row">
          <br />
          <li>
            <Link href={"hiw"}>How it works</Link>
          </li>
          <li>
            <Link href="https://portal.piaic.org/signup">Apply</Link>
          </li>
          <li>Available Programs</li>
          <li>
            <Link href={"about"}>About</Link>
          </li>
          <li>
            <Link href={"wit"}>WIT</Link>
          </li>
        </ul>
      </header>
      <section className="max-w-screen-xl mx-auto m-10 flex flex-col md:flex-row items-center">
        <Image src="/aa.png" alt="President" width="200" height="200"></Image>
        <div className="p-7 mt-5 ml-10 bg-gray-300 rounded-lg">
          <span>
            <h1 className="text-3xl md:text-5xl font-bold text-teal-950">
              Presidential Initiative for Artificial Intelligence & Computing
              (PIAIC)
            </h1>
            <br />
            <br />
            <h1 className="text-xl">
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              <span className="before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-950 relative inline-block">
                <span className="relative text-white">, augmented reality</span>
              </span>
              , and internet of things.
            </h1>
          </span>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto m-10 flex flex-col md:flex-row items-center">
        <div>
          <Button text={"Available Programs"} />
        </div>
        <div className="mt-10">
          <ul className="md:grid grid-cols-4">
            <li>
              <Link href="ai">Artificial Intelligence</Link>
            </li>
            <li>
              <Link href="cnc">
                Cloud Native and Mobile Web Computing Specialist
              </Link>
            </li>
            <li>
              <Link href="bc">BLOCKCHAIN Specialist</Link>
            </li>
            <li>
              <Link href="iot">Internet of Things and AI Specialist</Link>
            </li>
          </ul>
        </div>
        <div className="justify-center">
          <h1 className="p-7 justify-centert rounded-full px-5 m-1 py-2 hover:text-teal-700 text-center font-semibold">
            <Link href="https://portal.piaic.org/signup">Apply</Link>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Piaic;
