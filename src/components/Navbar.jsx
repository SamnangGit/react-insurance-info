import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-black flex flex-row w-full justify-between font-Poppins text-white items-center py-2">
      <div className="mx-16 w-3/12">
        <h1 className="hover:font-bold hover:text-sky-500 text-4xl transition-all duration-200 cursor-pointer">
          I4E
        </h1>
      </div>

      <BrowserRouter>
        <div className="w-6/12">
          <ul className="flex flex-row font-Poppins text-white items-center justify-center">
            <li className="mx-2 hover:font-bold hover:text-sky-500 transition-all duration-200 cursor-pointer">
              <Link to="/appointment">Home</Link>
            </li>
            <li className="mx-2 hover:font-bold hover:text-sky-500 transition-all duration-200 cursor-pointer">
              Product
            </li>
            <li className="mx-2 hover:font-bold hover:text-sky-500 transition-all duration-200 cursor-pointer">
              Pricing
            </li>
            <li className="mx-2 hover:font-bold hover:text-sky-500 transition-all duration-200 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </BrowserRouter>

      <div className="flex flex-row  font-Poppins text-white items-center w-3/12">
        <span className="font-Poppins mx-2 hover:font-bold hover:text-sky-500 transition-all duration-200 cursor-pointer">
          Login
        </span>
        <button
          className="bg-sky-600 w-64 h-16 rounded-md font-Poppins text-xl text-center font-medium
         hover:bg-sky-700 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-80 my-2 mx-10 block"
        >
          Become a member
        </button>
      </div>
    </div>
  );
}

export default Navbar;
