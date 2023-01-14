import React from "react";
import { Link } from "react-router-dom";

function CompanyDashboard() {
  return (
    <div className="bg-white my-28 pt-16">
      <div className="text-black font-Poppins mx-8">
        <h1 className="text-center text-4xl font-extrabold">
          Insurance Company
        </h1>
        <h2 className="text-center text-md my-8 opacity-70 font-light">
          Below are all insurance company that you can find more information{" "}
          <br />
          about them. We gaurantee that all information that we provided is
          reliable
        </h2>
      </div>
      <div>
        <div className="flex flex-row justify-evenly items-center flex-wrap">
          <div className="flex flex-row justify-center items-center">
            <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
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
                on June 28, 2012 as the first international life insurance
                company in Cambodia. The company is highly committed to helping
                build its financial future. Strong to the Cambodian family.
              </p>
              <img className="w-32" src="imgs/stars.jpeg" />
            </div>
            <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
              <Link to="/company/detail">
                <img
                  className="w-36 h-36 rounded-full"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX///9oc3rtGy5ibnVdaXFZZm5lcHdfa3NjbnbsAABdanHsAB/sABvsABjg4uPsABDm6Om/w8bsABLO0dPw8fKIkJWkqq7Y2tx0foSwtbj09fXzg4qYn6OSmZ6qr7PtFCn83+HJzM55g4mDjJH6y871mZ75w8b719n3sbX2o6j1k5n96er+8/Tze4LvQU73rbHuJzj0iY/4vL9OXGXwTlnycnn+7u/xaXLxXWbuM0LvP0ztITLwS1bwWGL2n6TuMUBDU109ChbWAAAQJUlEQVR4nO1daXuiPBcukhAWFRBUoOLaaqet3ZxpZ2k77///VW82FDQIKtDxubg/zDVVhJyc/eQkXFzUqFGjRo0aNWrUqFGjRo0aNWrUqFGjRo0aNWrUqFGjRo1K4Ia9rx7CCWjb2deECHnlj6QsQBhmXhMqkjyrYCylwIUSGgT4P1Zv5s16feFFfShJ6GwFFQ9eRdOuB2VFUWToCWnsIUkC50qiDyRJUhSJQ4FD0VVdTCLynKoHVwwGUEpA74quIiQqCHV9x6p6gKfD1lGCRCQ0KmwiFFUHqJvD/P5j8CWI5LWgSrKQixNVjSRZl8+PRsvudRUAOJ1i1xAM4HoW4KDqERaCoD3peRBhMmQvYB+17Ym7ucCarXUWCA3SWcC1PR0LIpXD9hQiPREROFKksyD4qhEWAEoGgp4MqFSiafxLn30oIa6KrgRd0U3+cfQSHgT58e9cj1oclbPWRupZhgJ9RY2RuMWlKeUij8VxRHemAtsFGwrlLcvJPuR/DJDinSeJtr7xkDBJQl+PUXgxkxXknyWNbnft/+Qt3zDDXyjrvxRil/yLc0R/7RvU5BeOLikbC2uTq/QzTSBtiXuMSfJzJMkbCxrA9FjvDODMiKwq0+SnNly1N395dBbg1iycDyySOcGtpKkfz5QHsojP54QQ7diaBKgiSqiy8ZSAEMRM5y4CrKwKPNMKAIcPV/tye0eSuuIi1vnAOruc9/vTV4+gZMy1zstXj6FcLI3R7wMuv79bzG++Xd9eUlxff367mV+N70sbXgH4YTTMeZ4L7+afy/c/LbPTajaNDZrNVsc0jaf35fXLuOSxHoebZqMxyrhmcXP5oJktwxg10jAaGUbL1B6e51/Gz/u7V+HnV61Gw/ie+rPX+fN702zuoS1JqNHpfDwWTOT9Y5aQjR+Xv1smRuPtcYfMpYEHZnwI7zy/fMKcy0nchsqm9uOuENI4njravq/ny8aGBfjhP68SX19p9AvjabH1u8X1+xHUcRjaY3EELsxG5yr1y2WzY2zNsPl9HLvihxF9HCN98fhmmMdSx6B9K4zCe7MxehB/9fKgGYKHj7TnzTXf13SMOq2P5e3t5c/fptk8iTpGYmHKSCxF83n38/vrP520cTb/jqPL3uJzMCLmf3Q6dQStm6IIbJLbmddbH8/ftH1SNtKi53M9TLsO04z9HXZ4pkaB/9NhDjFrIoztIR2JWz5Acxmn+nLE2TcyqA0VWAwt+sGlKaIMO7eOqTW+/3j+fJxfLcaRq3m9Gy+ucFBzu3x7MDTi/dMmslmMrblZc8Awnl8W4/Fifv1T48bFMEdvn/Px3d14fv29s61azQeuKNdaUlCbHXP0gAOUhdh/xnG3ePm8/P7HFPlLbds4H4dfsRuTWceTyp81ajUv48+4f/xlJkcxGo35OJdkiCQA62jGx+XjVTZpSdzjmOd9yzwZPwsh8KIplhBs+993Ff3qPUnjRhmxe7hdLm9vcrAtHczFRPd+P+FOcYh1wNDexCJy9beVlKTLgsYRYfHMLUCnKF9xKfB3hrknZvpMsrH1fgrXhHj5RQJdgfs6DveNbS42O5d7B333kaBx1CowvOK47jQ6xZgZgtdfcbc+6jQ+M8Xj6nciIOv8To35jsWlUVxAg/HtDxswcX0/c6WyF4vLJ63VbHGzMNLeChwOwatpFHvDq9uPhqb9Xb5sT9zr+Gr+8jJf3O3O6N388eX+k/vNoinEBrDoO+5ifLN8MEnMgYGDk9b7D+zCtwi9euIWtdBkjuDv36LvuIXx85O2FWXQMEwzfv28vL55mWPWXr81Ouwr87bo579qWWWR07B4Tw+6WSTdwqyNLmkWT+DFxUfeex61XrzUDsh+mka27S0N/RmEKDy4/e+tlU3XmqNl8C83WOfYwcs430S5UApa7/lNTOBa7XbbcoPC+hC60bL59npkBkRVixQGarkYaE2GoSchAIGu6/hfpEjT7sA/ubV0sO7zVA5aE3/p5Gbg3+zAKrC7ACBV3bQNywjTirFaHU0agx1rtTqoV+xblE4ZHa2J/WFKnXrUbOUohdmEYZteIQRRt2c7WFTdk9vXgngvGTpkue6OqaHRfKYcel28XP/4bZiduHccGeavXKU+PUYelHpOgW15s9jU7fRZ7QdN+rXnpAu4u/q2/PhDqkimqXU+rsf57mVzVVGAdIDe9f1BOMi43Em0A253d+wHKX82U5KF1zHGAflgm/azySBsZ1/LMelCQBQ1Q+6kDQtVpO5tDNgB5qA5PuQHe+DLRDx7+YXTVnRFhuEk6xeTdSugAoZOKMsZ18exNBp5bEg+EDMX5vd/bdIYBsIcE+Ktm+Q8cvUhzSkfrYZxyILuXrgrJG26Kty2Y2NM+lYKzTYJUbLEk8KJWKiwxtRpfoeIQ1Lzvbg4c8KbDAM79GTs6yl0AKTQ3qWSGg85V1viNGIhYrfp59eD8c+HohYLYrBhzC3KOqQef6dlhvIF5DG5VmRI/5nGom6sC1ruBa5rOba/bV6HzLPk2fPV4/eTs/cCnoxhrkkMZBrReLRRGKV4jojLKsq8Z6SFh1jQIxHAfA/B4wZ+cOF25Y3ubIG5TtrzDjPYOOFxBKigf9ECcp6dWRaEA0YWVR7hL4jrxEmCr6ZesQYP2JQqGon7IG2PYQIuj2msUEntcA5VZmeGJEjYy0SX25kDs8Lj0Kahdd6r+ytZQSDFHVAfji7aWAJVZW+QwIPdw6LtY2HRPaPTvDZ7oE8FfpCBCenFBKKsrWzcGYrVuWi4fKdkAbeK3L3tc+/dT+kx5UKaLzQ4Hdxun34jmtAm/MQgZd64kOqnPzML9GiEI7IzMSiFiWLEYCUWwy7b0VA+C/srP3pcETpPKUxkeTMoppDVDSrodPcg8QDEtktqEfMJt2VBgsLr+lQx1PJ3nQ7Z4RY0vDioDpQGZVsWkDhv79HtGCn8LRB9yBTBIjKDiuisx/4wYR4DKD4fpCJfiP0gn0Uyo3r+Kkw6sEYnZKENhVkt8xWlhzNYF1Q+iyTY0osoEg7UpLOwxfE3VYvSI9Ih3Bh24p0K2Z2MI28Ql4WeOPymu6JK3hTV9lDs+BUiNYWoPWZOYqamujAWLD8vDEK6v24TxWALUQgPcX6YcA+6UNeoGu5PPU5FiLY0HUtXIRTisYPYn20g9OmOXrqdYZlZTA8smK96lAlZibsHW3yYFPGGSrnHTJEiEE/xhkz9PCW7sJIHnhp3D10kdHkkcyo5JMUU8mf7/IwLGxUS02Ca4uoFxDfdic8LxwRIiJfwdP6oABaj+b149t8HQBQokZpCEZlMOtyVBLj0YOvOpzkUnyN0KIZxB9iThS6IeN+SU19lfRgAjrL4eR3tnCXFDAzjBewUc4IDn7Ijtvb69sRr8Cx8WshDB3AjlxZUhYaGlqsKeFYe0DSNS5KTa70oC/HQyJfFgVlmpbFADGl5k8+6VIDy2/FcQlKEBpOsyAgtUBmgJb1oop3/HRqZ8rahyWBAejNc1/JBjCZCiehXDqpwoz5MlIMONm8IhhPHl3VZ1xECGFCK6fJQFcuijw5sDjoBvAXhaJ2wJIiQquie70/JAXzJZDBNFkm4UdVGd1a0PKWY4EsQsmK5D/VpokrggEQQvgH2UKCIekI6LIeuw7vR8RzqSSuUVqR4zhZfukrK1HlSSgGuIAQepOvwWGcGHisFl6IUOI/SxQYTlVy/2PSwSLJUIoUkQxJ/A0v2hu2tkzsxhWWsowcoLfQMYNmGxlO2KTxJZtyB3mWqaMeF0kdp+VGQKr5FwdphoiodX/WaAFVSdPL7AYy7cTlV+IOiygnpcOA2FyV9euQzQ6iQxlow7Xly3P0RFqYxCkh62aXgNj+tKy6pRx2uZssITn3fw9ZRVpSYY8VamJ7ieuJwtVg4oaSDJCvFZwWnYtIbhkjnTr4HcFwzk8AqGjk2pCC17BOqZUspRxAkGnQl9aDUYrqC2KNG+jtUCKVWdJAgVvU9pTQcyFaaWRAR5SQexMW+baeGXjguS9VCWkStKixd+0OF+X5w2oPXuVcf7o8EK+lko+BtV1hmwuN6FSwlNifDVaR5WDb2NpEMUQWtbATRTgCi96yl8ODMWwJ6z7HcwO0PEYrqFzip2H+aYCCduksjJ1y+y4DabtbMdKiYuoicVw6hrssbX5Ej0q3omOF2RCH5g6aKh3cOWPK66VTnLMR3+lfO2O1zCmmeStP9I9YSgmk0T1zCsbOvoEsmH6IGT+q5aLPCth76eXg6kQDONte97oPUrKl68MYrllpMYrXhNVxFylNuaNubtAInZ+nRTNXwmRdUqIWYCRe8Am91YBHHU9IC0kFKfbhEDJmRoOaFbH1QRNIVwoMMLPY6UMx20jdQanlGAN4rTyiwiIyK1y18CPKnj1hGU2I/nzxh75muJYBV2kj/S5sSmKJybQnbkXx8DNTUlU/eqZfzRgUhVHlI45N+u7TtBRekKUZBUp4DyLEypxSZHO5TlN0tKCUijJw1WUeY7iOg7dG9aFmDI1t6dfF9WKeeJFfVE8wHJG8y/CwFsZEsKbo03Oc8CIFpzp4laqCqnCIaUUQhyFOlGepk2Q9IKW+44q8OSst7WWBfdazDGpFzV9rcHiRiLQMU2rsz0qf15TRrRQ2NeEG4PDged/j5JSfosZckKQhKoR3bS2fZU5pgpr6mLNCj+Df6YOKXnF9Ys6gOdVjzsy0BHicgHUKgyqrnKZDvZt/TQQISiUs7hPqq1Ngu/hKjQ3PCfhjfhhiHIqfb48Qh9QMs7oU0DaTCBnSfHZPSI+pedhcgVUDgHrkjCTb/b5s8uFQCA/YyFTCgG8yOqz8HTo+802tzjISkwtk+j7pZTOzTlq8yY3CX8Q5PIsuejo6GA8cPPRlQQDUjHMCJBecaeVkbKjM+DdhLxohrYhnwibudAqvd77cz7WJvs6eUTOxpz9wPtrZGC5YObSevpiuiJ2+2Aiil7hq1WWGU1isphRU1J/XUdc4RrEptS5zFNlTRlq+KCuyhuqm/lduHwQwfm09aTaxokQT7kkqes16qoP+nW0ereQecBRJL6UH/gOMTDkT8/Wjuzla60tBVYsHhZArBoQWu/GD1NbbgTtYtKtkrTt6suy7F9j2gZO7VPwFsSxW33LAiUzoAmw0yPRIRq2VG3RNCIg/zUSUvZHJJHTGayRnxUKBc3WfHh9H/KjkPITkJDu2K4IkFzUlLP8qEFH/ZAz0ppXuwQPgwlmZ7Re03zgAODFmQOFVKNzSMQO6TZvI6nioZHle/mVJ2cY+fVsZyCdZRV0kQNVCYMcWhVMkRDS8FRf5Xr2obQldmj+nJJauhj2IyiuFMlWqWLlReQ/BByakTKwHEbGcbiPeUFg2dO6f+qlxvyJbR9ZjiBatqosQ1SmYhXaBM7kAU1JLPGaSoLn4n+38FnlSR6fwyyNK+Br7/AryKkrOvw0ypxjd8HXBE8Y+0f5UFJ+Xolv8QBv9xIa1Ro0aNGjVq1KhRo0aNGjVq1KhRo0aNGjVq1KhRo0aNovB/4hn0QmK5E2kAAAAASUVORK5CYII="
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
            <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
              <Link to="/company/detail">
                <img
                  className="w-36 h-36 rounded-full"
                  src="https://www.hikrupet.com/hospital/image/359/YQR7ubKgosSi53DMfTSS_1595998522.jpg"
                />
              </Link>
              <p className="text-lg font-bold my-4 p-2 text-center">
                Prosur Insurance Plc
              </p>
              <p className="my-2 text-slate-700">(855) 69 731 111</p>
              <p className="my-4">
                Cambodian insurance company based in Phnom Penh aiming to be a
                leader in the market through innovative and responsive
                partnerships by providing products and services with quality,
                professionalism and reliability. At PROSUR, we believe in the
                value of having peace of mind.
              </p>
              <img className="w-32" src="imgs/stars.jpeg" />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
              <Link to="/company/detail">
                <img
                  className="w-36 h-36 rounded-full"
                  src="https://hikrupet.com/hospital/image/377/L0wrdzJ1CprZO70psdi0_1596097822.jpg"
                />
              </Link>
              <p className="text-lg font-bold my-4 p-2 text-center">
                AIA (Cambodia)
              </p>
              <p className="my-2 text-slate-700">(855) 86 999 242</p>
              <p className="my-4">
                AIA Cambodia is part of the AIA Group, which is currently the
                largest independent publicly listed pan-Asian life insurance
                group and the largest life insurance company in the world by
                market capitalisation. We aim to make insurance easier for
                everyone – with quality financial advice and innovative products
                and services.
              </p>
              <img className="w-32" src="imgs/stars.jpeg" />
            </div>
            <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
              <Link to="/company/detail">
                <img
                  className="w-36 h-36 rounded-full"
                  src="data:image/jpeg;base64,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"
                />
              </Link>
              <p className="text-lg font-bold my-4 p-2 text-center">
                Dai-ichi Life Insurance
              </p>
              <p className="my-2 text-slate-700">(855) 23 955-666</p>
              <p className="my-4">
                Dai-ichi Life Insurance (Cambodia) PLC. (“Dai-ichi Life”) is a
                subsidiary of Dai-ichi Life Holdings, Inc. (“DLHD”) which is a
                leading life insurer from Japan with 120 years of history. DLHD
                is listed on the Tokyo Stock Exchange. Since its establishment
                in 1902, DLHD has been committed to stand by the side of our
                customers and their loved ones, for life, and make concerted
                efforts to deliver “peace-of-mind” under our philosophy of
                “Customer First”.
              </p>
              <img className="w-32" src="imgs/stars.jpeg" />
            </div>
            <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
              <Link to="/company/detail">
                <img
                  className="w-36 h-36 rounded-full"
                  src="https://sovannaphumlife.com/uploads/Photo_Gallery1.jpg"
                />
              </Link>
              <p className="text-lg font-bold my-4 p-2 text-center">
                SOVANNAPHUM Life
              </p>
              <p className="my-2 text-slate-700">(855) 23 966 955</p>
              <p className="my-4">
                Sovannaphum Life Assurance Plc. (SVL) is a joint venture Company
                between Canadia Investment Holding PLC., the holding Company of
                Canadia Bank, and Muang Thai Life Assurance PCL from Thailand.
                Sovannaphum Life Assurance Plc. was granted full license as a
                life insurance Company by Ministry of Economy and Finance on 24
                December 2015, and started operations in 2016.
              </p>
              <img className="w-32" src="imgs/stars.jpeg" />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
              <Link to="/company/detail">
                <img
                  className="w-36 h-36 rounded-full"
                  src="data:image/png;base64,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"
                />
              </Link>
              <p className="text-lg font-bold my-4 p-2 text-center">
                Phillip Life Assurance
              </p>
              <p className="my-2 text-slate-700">(855) 23 426 888</p>
              <p className="my-4">
                Phillip Life Assurance (Cambodia) Plc has planted its roots
                firmly into Cambodian soil, backed by Singapore’s Phillip
                Capital Group so we can leverage on its extensive experience in
                the financial and investment sectors across the world.
              </p>
              <img className="w-32" src="imgs/stars.jpeg" />
            </div>
            <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
              <Link to="/company/detail">
                <img
                  className="w-36 h-36 rounded-full"
                  src="https://res.cloudinary.com/aquarii/image/upload/v1643955196/Forte-Life-Assurance-2.jpg"
                />
              </Link>
              <p className="text-lg font-bold my-4 p-2 text-center">
                Forte Life Insurance
              </p>
              <p className="my-2 text-slate-700">(855) 23 885 077</p>
              <p className="my-4">
                Dai-ichi Life Insurance (Cambodia) PLC. (“Dai-ichi Life”) is a
                subsidiary of Dai-ichi Life Holdings, Inc. (“DLHD”) which is a
                Established in 2019, Forte Life Assurance is a fast-growing life
                insurer committed to providing life protection and investment
                products which fit the needs and aspirations of today's modern
                Cambodians. Leveraging on Forte's experience of the local market
                for over 20 years, Forte Life Assurance aims to make insurance
                accessible to every family at any income level.
              </p>
              <img className="w-32" src="imgs/stars.jpeg" />
            </div>
            <div className="border-2 m-2 h-full w-3/12 p-6 rounded-md bg-white flex flex-col justify-center items-center">
              <Link to="/company/detail">
                <img
                  className="w-36 h-36 rounded-full"
                  src="https://www.gc-life.com.kh/wp-content/uploads/2022/08/1660268156-GC-Life-Logo_3.svg"
                />
              </Link>
              <p className="text-lg font-bold my-4 p-2 text-center">
                Grand China Life Insurance
              </p>
              <p className="my-2 text-slate-700">(855) 23 989 218</p>
              <p className="my-4">
                GC Life Insurance PLC. (“GC Life”) is a life insurance company
                with its headquarter based in Phnom Penh. The founding partners
                are from Macao and China, and the technical team is comprised of
                experts from around the world such as the US, Macau, Malaysia,
                China and Cambodia.
              </p>
              <img className="w-32" src="imgs/stars.jpeg" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
