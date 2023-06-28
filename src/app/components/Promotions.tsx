import Image from "next/image";
import React from "react";

const Promotions = () => {
  return (
    <div className="mt-20">
      <p className="text-blue-700 text-center font-bold mb-1">Promotions</p>
      <h1 className="text-center text-3xl font-bold mb-8">
        Our Promotions Event
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 mx-3 sm:mx-10 md:mx-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5 ">
          <div className="bg-gray-200 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="ml-3 mt-3 lg:ml-10">
              <h1 className="text-2xl lg:text-3xl font-bold">GET UP TO</h1>
              <h1 className="text-3xl lg:text-5xl font-bold">60%</h1>
              <p className="lg:text-xl" >For the summer season</p>
            </div>
            <div className="flex justify-center" >
              <Image
                src={
                  "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75"
                }
                alt="image"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="bg-[#201717] text-white p-5 flex justify-center items-center flex-col rounded-sm">
            <h1 className="text-2xl lg:text-3xl font-bold mb-5">GET 30% Off</h1>
            <p className="lg:text-xl mb-1">USE PROMO CODE</p>
            <button className="bg-gray-800 px-4 py-1 rounded-sm tracking-wider">
              D I N E W E E K E N D S A L E
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-orange-200 flex flex-col justify-between">
            <div className="mt-5 mx-3">
              <p>Flex Sweatshirt</p>
              <div className="flex gap-1">
                <h1 className="text-sm line-through">$100.00</h1>
                <h1 className="sm:text-2xl font-bold">$75.00</h1>
              </div>
            </div>
            <Image
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75"
              }
              alt="image"
              width={250}
              height={300}
            />
          </div>
          <div className="bg-purple-100">
            <div className="mt-5 mx-3">
              <p>Flex Push Button Bomber</p>
              <div className="flex gap-1">
                <h1 className="text-sm line-through" >$225.00</h1>
                <h1 className="sm:text-2xl font-bold" >$190.00</h1>
              </div>
            </div>
            <Image
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75"
              }
              alt="image"
              width={250}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
