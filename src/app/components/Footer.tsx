import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
        <div className="px-3 md:px-10 lg:px-24 pt-3 md:pt-7 gap-8 flex flex-col md:flex-row justify-between mb-20 overflow-hidden">
      <div>
        <div className="">
          <Link href={"/"} className="flex items-center" >
          <h2 className="scroll-m-20 pb-2 mr-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
            O
          </h2>
          <h2 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight transition-colors first:mt-0">
            Dine Market
          </h2>
          </Link>
        </div>
        <p className="max-w-[400px]" >
        Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
        </p>
        <div>
            links
        </div>
      </div>
      <div className="flex flex-col" >
        <h1 className="text-xl font-bold text-gray-500 mb-2" >Company</h1>
        <Link href = {''} >About</Link>
        <Link href = {''} >Terms of Use</Link>
        <Link href = {''} >Privacy Policy</Link>
        <Link href = {''} >How it Works</Link>
        <Link href = {''} >Contact Us</Link>
      </div>
      <div className="flex flex-col" >
        <h1 className="text-xl font-bold text-gray-500 mb-2" >Support</h1>
        <Link href = {''} >Support Carrer</Link>
        <Link href = {''} >24h Service</Link>
        <Link href = {''} >Quick Chat</Link>
      </div>
      <div className="flex flex-col" >
        <h1 className="text-xl font-bold text-gray-500 mb-2" >Contact</h1>
        <Link href = {''} >Whatsapp</Link>
        <Link href = {''} >Support 24h</Link>
      </div>
    </div>


<div className="bg-black w-[100%] h-[1px] my-5" ></div>

    <div className="px-3 md:px-10 lg:px-24 pt-3 md:pt-7 gap-10 mb-5 flex flex-col md:flex-row justify-between items-center" >
        <div>
            Copyright Dine Market 2023
        </div>
        <div>
            Designed by <p className="font-bold" >Kashan Haider</p>
        </div>
        <div>
            Code by <p className="font-bold" >Kashan Haider</p>
        </div>
    </div>
    </div>
  );
};

export default Footer;
