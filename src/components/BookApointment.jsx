import React from "react";

function BookAppointment() {
  return (
    <body class="bg-gray-100">
      <div class="relative">
        <img class="h-16" src="imgs/bg.jpg" />
        <h1 class="absolute text-5xl text-white inset-x-0 top-0 pt-80 ml-52 ">
          We Have Branches All <br></br>
          <p class="pt-6">Over The World</p>
        </h1>
        <p class="absolute text-l text-white inset-x-0 top-40 pt-80 ml-52 ">
          The gradual accumulation of information about atomic and <br></br>
          small-scale behaviour during the first quarter of the 20th <br></br>
          century, which gave some indications about how small things<br></br>
          do behave, produced an increasing confusion which was <br></br>
          Heisenberg, and Born.
        </p>
      </div>
      <div class="relative ml-14 h-96 ">
        <img class=" w-72 h-24" src="imgs/form-pic1.jpg" />
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="text-center text-2xl pt-6">Book Appointment</div>
          <br></br>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name *
            </label>{" "}
            <br></br>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="gmail"
            >
              Email Address *
            </label>
            <br></br>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="gmail"
              type="gmail"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="mt-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="department"
            >
              Department *
            </label>
            <br></br>
          </div>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>please select</option>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div class="mt-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 "
              for="department..."
            ></label>
          </div>
          <div class="mt-6">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </body>
  );
}

export default BookAppointment;
