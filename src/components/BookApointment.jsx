import React from "react";
import { Link } from "react-router-dom";

export default function BookApointment() {
  return (
    <div className="bg-white">
      <div class="relative">
        <img class="h-1/2" src="imgs/bg.jpg" />
        <h1 class="absolute text-5xl text-white inset-x-0 top-0 pt-80 ml-52 ">
          InsurTech <br></br>
          <p class="pt-6"> We Ensure The Best Bit Insurance</p>
        </h1>
      </div>
      {/* <!-- book appointment form --> */}
      <div className="block" id="#1">
        <div className="flex mb-20 justify-center items-center">
          <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
            <p className="text-lg font-bold my-4 p-2 text-center">
              Life Insurance
            </p>
            <Link to="/company/detail">
              <img
                className="w-36 h-36 rounded-full"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEUAp1j///8AoEcAn0T0+vYAqVri9OsAo08AokwAoksApFIApFFLuHxUu4JswpFJt3uAyqBgv4llwI0arGNxxJXt9/Isr2o4s3E/tXZcvYZSuoFjv4xIL0ajAAACbUlEQVR4nO3cy3LiMBBAUQtnsDEOJJkXk/z/f46f4G5JXVmQUSdz77aLKp1q2cUGqoqIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOjr1H3k2EPtk3nI9vTdGh8v7ontKdTW+Dl8M8ZN/7C794nu3AC0hAPQEjavwbtwBBrCEWgImz54F07AvHAC5oUj0LlwBmaF7VuwhBPQt/AwA3PCeYNZ4Qx0LVw2mBMuG8wJF6Bn4brBjHDdYEbYnIN34XWDaeF1g2nhukHHwtsGk8INMCVsLsG78PAjWML2JVjC2wbdCgUwFgpgLLw+g36FEhgJt1c0IRRAn0IF1EK5wUgogS6FGqiEGqiECuhR2GmgFB5PeiyEXa+mDoW7B1O425vCnZ5+OWGN0EEIESIsH0KECMuHECHC8iFEiLB8CBEiLB9ChAjLhxAhwvIhRIiwfAgRIiwfQoQIy4cQIcLyIUT4GYXijLFQfDoS/vwEwl78kjcSPopxJPzl73fAWnhu5FgJH+VYCx0CtbBv1FgKFVALfx//3cHfnRRqoBJqoBK6BEphBJTCP9G49g8UwtdIIIQxUAgv8dhFG+E5ccSNMLqilRB6BW6EiQ1uhYkNboVugTdhaoMbYWqDG2H8BLtpFWaOuAqTG7wJk/t30iLM7WARpjd4FebGLpqF2Us2C7OC2lqwkyZh/imahPk7OAnf2o852p0ahemXzDzem3ew9g8chdZ7cBBaD9kgfHEOHITGBqvqsDffInU4eQdW3cX8NtnZXza7J/fA/+C/vYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiN7dX+qmH11GoUQDAAAAAElFTkSuQmCC"
              />
            </Link>
            <p className="text-lg font-bold my-4 p-2 text-center">
              Manulife Cambodia
            </p>
            <p className="my-2 text-slate-700">(855) 23 965 999</p>
            <p className="my-4">
              Manulife Cambodia officially launched its operations in Cambodia
              on June 28, 2012 as the first international life insurance company
              in Cambodia. The company is highly committed to helping build its
              financial future. Strong to the Cambodian family.
            </p>
            <img className="w-32" src="imgs/stars.jpeg" />
          </div>
          <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
            <p className="text-lg font-bold my-4 p-2 text-center">
              Life Insurance
            </p>
            <Link to="/company/detail">
              <img
                className="w-36 h-36 rounded-full"
                src="data:image/png;base64,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"
              />
            </Link>
            <p className="text-lg font-bold my-4 p-2 text-center">
              Prudential (Cambodia)
            </p>
            <p className="my-2 text-slate-700">(855) 23 964 222</p>
            <p className="my-4">
              Prudential (Cambodia) Life Insurance (CC), also known as
              Prudential Cambodia, began operations in January 2013. By
              providing life insurance solutions tailored to the needs of
              individual clients and families, Prudential Cambodia has been
              helping Cambodians protect and manage their finances.
            </p>
            <img className="w-32" src="imgs/stars.jpeg" />
          </div>
        </div>
        <div className="pt-80">
          <div class="relative h-96 ">
            {/* <!-- form image --> */}
            <div class="w-full max-w-2xl absolute inset-x-0 -top-10 -mt-80 ml-80 ">
              {/* <img class=" w-72 h-2/4" src="imgs/form-pic1.jpg" /> */}
            </div>
            {/* <!-- form --> */}
            <div class="w-full max-w-2xl absolute inset-x-0 -top-10 -mt-80 mx-auto">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="text-center text-2xl pt-6">Book Appointment</div>
                <br></br>
                <br></br>
                {/* <!-- username --> */}
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Name *
                  </label>
                  <br></br>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                {/* <!-- email address --> */}
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
                {/* <!-- select department --> */}
                <div class="mt-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="department"
                  >
                    Insurance Company *
                  </label>
                  <br></br>
                </div>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>please select</option>
                    <option>Manulife Cambodia</option>
                    <option>Prudential (Cambodia)</option>
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
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"></div>
                {/* <!-- select time --> */}
                <div class="mt-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2 "
                    for="department"
                  >
                    Time *
                  </label>
                  <br></br>
                </div>
                <div class="relative mt-3">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>4:00 Available</option>
                    <option>5:00</option>
                    <option>7:00</option>
                    <option>10:00</option>
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
                {/* <!-- click book appointment button --> */}
                <div class="flex items-center justify-between pt-10">
                  <button
                    class="bg-sky-500 text-white text-s font-bold py-1 px-60 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Book Appointment
                  </button>
                  <br></br>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- contact button --> */}
        <div class="flex flex-row justify-center items-center bg-white my-8">
          <h2 class="text-2xl font-bold">Consulting Agency For Your Need</h2>
          <div>
            <button
              className="bg-sky-600 w-44 h-12 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-sky-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-80 my-2 mx-4 block"
            >
              Contact Us
            </button>
          </div>
        </div>
        {/* <!-- footer --> */}
        <div class=" pt-20 pb-16 bg-gray-100 ">
          <div class="flex items-top justify-left ml-52 mr-52 mt-3">
            <ul class="text-gray-500 text-l  space-y-2">
              <li class="text-black font-bold">Company Information</li>
              <li class="hover:underline">About Us</li>
              <li class="hover:underline">Carier</li>
              <li class="hover:underline">We are hiring</li>
              <li class="hover:underline">Blog</li>
            </ul>
            <ul class="text-gray-500 text-l ml-20 space-y-2">
              <li class="text-black font-bold">Legal</li>
              <li class="hover:underline">About Us</li>
              <li class="hover:underline">Carier</li>
              <li class="hover:underline">We are hiring</li>
              <li class="hover:underline">Blog</li>
            </ul>
            <ul class="text-gray-500 text-l ml-20 space-y-2">
              <li class="text-black font-bold">Apple Store</li>
              <li class="hover:underline">Business Marketing</li>
              <li class="hover:underline">User Analytic </li>
              <li class="hover:underline">Live Chat</li>
              <li class="hover:underline">Unlimited Support</li>
            </ul>
            <ul class="text-gray-500 text-l ml-20 space-y-2">
              <li class="text-black font-bold">Resources</li>
              <li class="hover:underline">IOS & Android</li>
              <li class="hover:underline">Watch a Demo</li>
              <li class="hover:underline">Customers</li>
              <li class="hover:underline">APIs</li>
            </ul>
            <ul class="text-gray-500 text-l ml-20 space-y-2">
              <li class="text-black font-bold">Get In Touch</li>
              <li class="hover:underline">(480) 555-0103</li>
              <li class="hover:underline">
                4517 Washington Ave. Manchester, Kentucky 39495
              </li>
              <li class="hover:underline">debra.holt@example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
