import React from "react";
import CompanyDashboard from "./CompanyDashboard";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <div className="w-full mt-28">
        <h1 className="text-white font-Poppins font-extrabold text-5xl mx-auto w-1/2 tracking-wider text-center">
          InsurFinder
        </h1>
        <h2 className=" text-white text-center font-Poppins text-xl w-1/2 mx-auto my-12 tracking-wider opacity-70 font-light">
        We Ensure The Best Insurance Service
        </h2>
        <div className="flex flex-row justify-center items-center text-white">
          <Link to="/assessment">
            <button
              className="bg-sky-600 w-52 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-sky-700 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-80 my-2 mx-4 block"
            >
              Do Assessment
            </button>
          </Link>

          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-2 mx-4 block"
          >
            Learn More
          </button>
        </div>
      </div>
      <CompanyDashboard />
    </div>
  );
}

export default MainPage;
