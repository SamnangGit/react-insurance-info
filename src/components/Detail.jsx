import React from "react";

function Detail(){
    return(
  
  <body>
    <div class="bg-gray-200 p-6">
      <h1 class="text-3xl font-medium">Insurance Company Name</h1>
      <p class="text-xl font-medium">About Us</p>
      <p class="text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in malesuada tempor, 
        risus erat malesuada augue, in aliquet urna purus a erat. Nullam eget semper velit.
      </p>
    </div>
    <div class="bg-white p-6">
      <h2 class="text-2xl font-medium">Our Services</h2>
      <ul class="text-base">
        <li>Health Insurance</li>
        <li>Life Insurance</li>
        <li>Auto Insurance</li>
        <li>Home Insurance</li>
      </ul>
    </div>
    <div class="bg-gray-200 p-6">
      <h2 class="text-2xl font-medium">Contact Us</h2>
      <p class="text-base">
        Phone: 555-555-5555
      </p>
      <p class="text-base">
        Email: contact@insurancecompany.com
      </p>
      <p class="text-base">
        Address: 123 Main St, Anytown USA 12345
      </p>
    </div>
  </body>

    );
}

export default Detail;