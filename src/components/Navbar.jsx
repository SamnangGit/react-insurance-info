import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-black flex flex-row w-full justify-between font-Poppins text-white items-center py-2">
      <div className="mx-16 w-3/12">
        <h1 className="hover:font-bold hover:text-sky-500 text-4xl transition-all duration-200 cursor-pointer">
          InsurFinder
        </h1>
      </div>

      <BrowserRouter>
        <div className="w-6/12">
          <ul className="flex flex-row font-Poppins text-white items-center justify-center">
            <li className="mx-2 hover:font-bold hover:text-sky-500 transition-all duration-200 cursor-pointer">
              <Link to="/">Home</Link>
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
          samnang.sakal77@gmail.com
        </span>
       
      </div>
    </div>
  );
}

export default Navbar;
