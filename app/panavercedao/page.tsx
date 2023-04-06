import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";
const PanaverseDao = () => {
  return (
    <div>
      <div className="mt-2">
        <Navbar />
      </div>
      <div className="mt-7 bg-gradient-to-r from-indigo-700">
        <h1 className="text-white p-8 px-80 text-6xl">
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
          Karachi, Lahore, Islamabad, and Peshawar
        </h1>
        <h1 className="mt-3 pb-20 text-white text-lg text-center">
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </h1>
      </div>
      <p className="mt-3">
        <img alt="logo" width="900" height="900" src="./Untitled.png" />
      </p>
      <p className="text-indigo-700 ml-20 mr-20 mt-3 pb-20 text-center text-4xl">
        The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
        Panaverse DAO is a movement to spread these technolgies globally. It is
        community of Web 3 and Metaverse developers, designers, trainers,
        startup founders and service providers.
      </p>
      <br />
      <p className="text-indigo-700 ml-20 mr-20 mt-3 pb-20 text-center text-4xl">
        <Link href="https://www.piaic.org/">
          Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
        </Link>
      </p>
    </div>
  );
};

export default PanaverseDao;
