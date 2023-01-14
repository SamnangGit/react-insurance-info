import React from "react";

function CompanyDetail() {
  return (
    <div className="m-8">
      <h1 className="font-Poppins text-5xl tracking-wider font-extrabold text-center mt-8 mb-24">
        Detail
      </h1>
      <div className="flex flex-row">
        <div className="m-12">
          <img src="imgs/pic.jpeg" alt="" className="w-64 h-64 rounded-md" />
        </div>
        <div className="flex flex-col justify-center font-Poppins">
          <h1 className="text-4xl m-2">Title</h1>
          <h2 className="text-2xl m-2">Description</h2>
          <a className="text-sm m-2" href="">
            abcdegdhijg.in.com
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center my-8">
        <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
          <img className="w-36 h-36 rounded-full" src="imgs/pic.jpeg" />
          <p className="text-s my-6 p-2 text-center">
            Smoking is very injurious to health. It is harmful both to a smoker
            and his companion. It affects lungs and causes serious diseases.
          </p>
          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-4 block"
          >
            Learn More
          </button>
        </div>
        <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
          <img className="w-36 h-36 rounded-full" src="imgs/pic.jpeg" />
          <p className="text-s my-6 p-2 text-center">
            Smoking is very injurious to health. It is harmful both to a smoker
            and his companion. It affects lungs and causes serious diseases.
          </p>
          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-4 block"
          >
            Learn More
          </button>
        </div>

        <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
          <img className="w-36 h-36 rounded-full" src="imgs/pic.jpeg" />
          <p className="text-s my-6 p-2 text-center">
            Smoking is very injurious to health. It is harmful both to a smoker
            and his companion. It affects lungs and causes serious diseases.
          </p>
          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-4 block"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;
