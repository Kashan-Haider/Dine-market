import React from "react";
import Button from "./Button";
const Newsletter = () => {
  return (
    <div className="my-32 flex flex-col items-center gap-5 relative">
        <h1 className="text-7xl sm:text-[100px] font-extrabold absolute leading-[80px] text-gray-200 -z-10" >Newsletter</h1>
      <h1 className="text-3xl sm:text-5xl font-bold text-center" >Subscribe Our Newsletter</h1>
      <p className="sm:text-xl tracking-wide text-center" >Get the latest information and promo offers directly</p>
      <div className="relative" >
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your Email Address"
          className="outline-none border border-gray-300 py-2 px-2 w-[350px] sm:w-[500px]"
        />
        <div className = "absolute top-0 right-0"  >
        <Button body="Get Started"/>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
