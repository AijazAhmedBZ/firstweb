import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-gray-700 md:container-xl md:flex items-center justify-between md:px-20 py-6 px-10 backdrop-blur-sm bg-white/10 shadow-md">
      <div className="bg-teal-700 rounded-full px-5 m-1 py-2 text-white text-center font-semibold">
        <Link href="piaic">PIAIC</Link>
      </div>
      <div className="bg-gradient-to-r from-indigo-300 via-indigo-900 to-indigi-300 rounded-full px-5 m-1 py-2 text-white text-center font-semibold">
        <Link href="panavercedao">Panaverce Dao</Link>
      </div>
      <div className="bg-teal-700 rounded-full px-5 py-2 m-1 text-white text-center font-semibold">
        <Link href="about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
