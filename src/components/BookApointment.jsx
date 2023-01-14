import React from 'react';

function BookAppointment(){
    return(
        <body class=""bg-gray-100>
        <div class="relative">
            <img class="h-2/6" src="imgs/bg.jpg" />
            <h1 class="absolute text-5xl text-white inset-x-0 top-0 pt-80 ml-52 ">
                We Have Branches All <br>
                <p class="pt-6">Over The World</p></h1>
            <p class="absolute text-l text-white inset-x-0 top-40 pt-80 ml-52 ">
                The gradual accumulation of information about atomic and <br>
                small-scale behaviour during the first quarter of the 20th <br>
                century, which gave some indications about how small things<br> 
                do behave, produced an increasing confusion which was <br>
                Heisenberg, and Born.
            </p>
        </div>
        <div class="ml-20">
        <div class="relative ml-14 h-96 ">
            <div class="w-full max-w-2xl absolute inset-x-0 -top-10 -mt-80 ml-96 ">
            <img class=" w-72 h-2/4" src="imgs/form-pic1.jpg">
    </div>
    
        <div class="w-full max-w-2xl absolute inset-x-0 -top-10 -mt-80 mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="text-center text-2xl pt-6">
            Book Appointment
        </div><br><br>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Name *
          </label> <br>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="gmail">
            Email Address *
          </label><br>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="gmail" type="gmail" placeholder="example@gmail.com">
    
        </div>
        <div class="mt-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="department">
            Department *
          </label><br>
        </div>
        <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>please select</option>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    
        </div>
        <div class="mt-6">
          <label class="block text-gray-700 text-sm font-bold mb-2 " for="department">
            Time *
          </label><br>
        </div>
        <div class="relative mt-3">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>4:00 Available</option>
              <option>5:00</option>
              <option>7:00</option>
              <option>10:00</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        <div class="w-full ">
    
        </div>
        <div class="flex items-center justify-between pt-10">
          <button class="bg-sky-500 text-white font-bold py-1 px-60 rounded focus:outline-none focus:shadow-outline" type="button">
            Book Appointment
          </button><br>
    
        </div>
      </form>
      </div>
    </div>
    </div>
    
    </div>
    <div class="flex ">
        <h2 class="pt-32 text-2xl font-bold ml-96">Consulting Agency For Your Business</h2>
        <p class="pt-44 -ml-96">the quicks fox jumps over the lazy dog</p>
        <div class=" ml-80 pt-10">
          <button class="bg-sky-500 text-white font-bold mt-32 py-1 px-14 ml-96 rounded focus:outline-none focus:shadow-outline" type="button">
            Contact Us
          </button>
    
        </div>
    </div>
        <div class=" pt-20 pb-16 bg-white">
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
            <li class="hover:underline">
                (480) 555-0103</li>
            <li class="hover:underline">4517 Washington Ave. Manchester, Kentucky 39495</li>
            <li class="hover:underline">debra.holt@example.com</li>
          </ul>
          </div>
    </div>
    </body>   
                

    );
}

export default BookAppointment;