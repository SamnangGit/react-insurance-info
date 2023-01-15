import React from "react";

function CompanyDetail() {
  return (
    <div className="bg-white">
      <h1 className="font-Poppins text-5xl tracking-wider font-extrabold text-center pt-8 mb-24">
        Detail
      </h1>
      <div className="flex flex-row">
        <div className="m-12 w-2/12">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8Ps135/Prh8ebl8+kltmQ7unAdtWEmtmY1uW0AsloAsVcAsVYAr1Lt9/DP6tjK6NROvnq54ceu3b7z+fTa7+BUwH4ArUzH59Lc8ONDu3Tw+PI6um+038O44cZ4wUK0AAAEDUlEQVR4nO3cXVOjMBSA4VKo2GBx3W11rbv7/3/mCpRKckI+xiZxnPe9Ps6chxLgys2GiIiIiIiIiIiIiIiIiIiIiIiIiOhrVm/j5vs+7fzNe3yKEzbPdeT8a9T8zXtt91HCt7NqYub7cxV3RW5d3XV3McLjvmtjhMf7bldUeKqUihH2+66KEQ7zRYWne1XFCOtzV8UIm2G+pHAAxgjHhSOEzdNDVVTYtO/ACOH7GaxihMe7cb6csK4GYLiwn4DBwrcJWE542o/AYOF0i4YL+6fLfCnheAYjhP14psKF/fM8X0h4uUWDhcfzvHCY8Dj/gqWEr90MDBO+v7irGOHloVROeGqvwCBhf/5YOETYLOdLCK9nMFDYXM9gmFCfLyB83S2AAcJeW9gv1H7xEsK6WwL9wuWZChEuz2wR4anSgF5hbwB9QjGfW/h4rwN9wvrJWNgjbM7mfGbhyQR6hHJht1B/yBQQNq0JdAvNM+gTbuUFySusKwF0CsWZ8ghtFySrcP7YDhVablGnsBdnNrNQnkG30HKmnMKPj+1Cwjd5Bt1C6y/oENqBGYW1Fbgu3O7sf7Am3NrOwNcWWm9qhAhThlBsjNCcR5g8hGJjhOY8wuQhFBsjNOcRJg+h2BihOY8weQjFxgjNeYTJQyg2RmjOI0weQrExQnMeYfIQio0RmvMIk4dQbIzQnEeYPIRiY4TmPMLkIRQbIzTnESYPodgYoTmPMHkIxcYIzXmEyUMoNkZoziNMHkKxMUJzHmHyEIqNEZrzCJOHUGyM0JxHmDyEYmOE5jzC5CEUGyM05xEmD6HY+NsI/3x74X5lfkWo2pX/k78iVFXU/3D/THah2j2uzNuFqv2xNm8VKvUzFUhkFapqDWgXqmoNuCJ8yAe0CtXhtDpvFR5WL4hd+JIRaBOqbh1oE7ouiFV4yAm0CNfP1JAUqva3a14Ku1+3RjgTQlW5FpZCxxkc54XwIS9QCg/OhaXQcQbHeVP4khloCpVnYVPonzeEL39vt3tYutBzy21MoeO1Ms/rwofsQF2oWt/CutD9UJrmNWHmh8zYUqg6L1ATqs4L1IWHAsCl0Plem1sI1Yv/gmjC7A+ZsQ+hqgKAC6FSAcCFUBU4g0NXYcAZHLoKA87gOD8Lc35sa81C/1Nxahb6n7qX+VnY/fvMmp/oIgw6g0Oz0PcevM5fhFk/trUmofNjW2sSel/0H/OTMO/HttYodH88a43CmPlRWOI9ODcIPR/bWoMw9AyO84Mw98e21iD0fGxrDcLgW3QzCcu8B+dqFX6mht6FcfN7lf9jW6vuAl8Tl7a7yPl9kU+1RXXYi/7a9j78zE7zhYGbOg64OUbOb8u9JoiIiIiIiIiIiIiIiIiIiIiIiIiIPP0HqJpT55zzNwcAAAAASUVORK5CYII="
            alt=""
            className="w-64 h-64 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center font-Poppins w-9/12">
          <h1 className="text-4xl m-2">Manulife Cambodia</h1>
          <h2 className="text-lg m-2">
            Description: Manulife Cambodia officially launched its operations in
            Cambodia on June 28, 2012 as the first international life insurance
            company in Cambodia. The company is highly committed to helping
            build its financial future. Strong to the Cambodian family.
          </h2>
          <a className="text-lg font-bold m-2" href="">
            (855) 23 965 999
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center my-8">
        <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
          <h1 className="text-6xl text-center font-Poppins font-bold">Life</h1>
          <p className="text-s my-6 p-2 text-center">
            You’re irreplaceable, but having the right cover in place can make
            life easier for your loved ones if the worst should happen. Let us
            take care of your life, so you can get on with enjoying it.
          </p>
          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-4 block"
            onClick={() => {
              window.open("https://www.manulife.com.kh/en/products/life.html");
            }}
          >
            Learn More
          </button>
          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-4 block"
            onClick={() => {
              window.open("https://www.manulife.com.kh/content/dam/insurance/kh/documents/e-brochure/Manulife%20Camboida%20-%20Product%20Manulife%20Boribo.pdf");
            }}
          >
            Download Broacher
          </button>
        </div>

        <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
          <h1 className="text-6xl text-center font-Poppins font-bold">
            Health
          </h1>
          <p className="text-s my-6 p-2 text-center">
            Worried about your finances if you were to suffer from a critical
            illness? We have the cure. Our plans offer protection for a large
            number of conditions, and pay out for early and late stages.
          </p>
          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-4 block"
            onClick={() => {
              window.open(
                "https://www.manulife.com.kh/en/products/health.html"
              );
            }}
          >
            Learn More
          </button>
          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-4 block"
            onClick={() => {
              window.open("https://www.manulife.com.kh/content/dam/insurance/kh/documents/e-brochure/Manulife%20Camboida%20-%20Product%20Manulife%20Boribo.pdf");
            }}
          >
            Download Broacher
          </button>
        </div>

        <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
          <h1 className="text-6xl text-center font-Poppins font-bold">Save</h1>
          <p className="text-s my-6 p-2 text-center">
            Long-term savings is very important for Cambodian people, whether it
            is savings for retirement or for your children's future education.
            Let us take care of your savings, so that you can get to enjoy peace
            of mind.
          </p>
          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-4 block"
            onClick={() => {
              window.open("https://www.manulife.com.kh/en/products/save.html");
            }}
          >
            Learn More
          </button>
          <button
            className="bg-transparent border-white border-2 w-44 h-16 rounded-full font-Poppins text-xl text-center font-medium
         hover:bg-slate-500 hover:text-white
          transition  ease-in-out delay-150
          transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
          focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80 my-4 block"
            onClick={() => {
              window.open("https://www.manulife.com.kh/content/dam/insurance/kh/documents/e-brochure/Manulife%20Camboida%20-%20Product%20Manulife%20Boribo.pdf");
            }}
          >
            Download Broacher
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;
