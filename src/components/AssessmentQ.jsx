import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AssessmentQ() {
  return (
    <div className="flex flex-col bg-white py-8">
      <h1 className="font-Poppins text-5xl tracking-wider font-extrabold text-center mt-8 mb-24">
        Asssement Test
      </h1>
      <div className="w-full flex flex-col items-center">
        <div className="my-4">
          <h1 className="font-Poppins text-3xl">
            1. What is your current health condition
          </h1>
        </div>
        <div className="font-Poppins text-xl flex flex-row">
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Good</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Normal</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Bad</h2>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="my-4">
          <h1 className="font-Poppins text-3xl">
            2. Have you been hospitalized in the past 5 years?
          </h1>
        </div>
        <div className="font-Poppins text-xl flex flex-row">
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Yes</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">No</h2>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="my-4">
          <h1 className="font-Poppins text-3xl">3. Do you smoke?</h1>
        </div>
        <div className="font-Poppins text-xl flex flex-row">
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Yes</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">No</h2>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="my-4">
          <h1 className="font-Poppins text-3xl">4. Do you consume alcohol?</h1>
        </div>
        <div className="font-Poppins text-xl flex flex-row">
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Yes</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">No</h2>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="my-4">
          <h1 className="font-Poppins text-3xl">
            5. Are you involved in any high-risk activitie?
          </h1>
        </div>
        <div className="font-Poppins text-xl flex flex-row">
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Yes</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">No</h2>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="my-4">
          <h1 className="font-Poppins text-3xl">
            6. What type of coverage are you looking for?
          </h1>
        </div>
        <div className="font-Poppins text-xl flex flex-row">
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Health</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Life</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Accident</h2>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="my-4">
          <h1 className="font-Poppins text-3xl">
            7. What is your budget for monthly payment?
          </h1>
        </div>
        <div className="font-Poppins text-xl flex flex-row">
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">3$/month</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">5$/month</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">10$/month</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">15$/month</h2>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="my-4">
          <h1 className="font-Poppins text-3xl">
            8. Do you have any dependents who will also need coverage?
          </h1>
        </div>
        <div className="font-Poppins text-xl flex flex-row">
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">Yes</h2>
          </button>
          <button className="mx-2 my-6 rounded-full hover:bg-sky-500 focus:bg-sky-700 focus:text-white cursor-pointer border-4 focus:ring focus:ring-sky-300 focus:ring-opacity-80">
            {/* <i class="fa-solid fa-circle"></i> */}
            <h2 className="mx-4 p-4 ">No</h2>
          </button>
        </div>
      </div>

      <div className="mx-auto">
        <button
          className="bg-sky-600 w-64 h-16 rounded-md font-Poppins text-2xl text-center font-medium
         hover:bg-sky-700 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-80 my-12 mx-10 block"
          onClick={() => {
            window.location.href = "/appointment";
          }}
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default AssessmentQ;
