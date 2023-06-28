'use client'
import Link from "next/link";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import {GrFormClose} from "react-icons/gr"
import{HiBars3CenterLeft} from "react-icons/hi2"
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/redux/store";

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="px-3 md:px-10 lg:px-24 pt-3 md:pt-7 flex justify-between items-center overflow-hidden">
      <div >
      <Link className="flex items-center" href={"/"} >
        <h2 className="scroll-m-20 mr-2 md:text-3xl font-bold tracking-tight transition-colors first:mt-0">
          O
        </h2>
        <h2 className="scroll-m-20 md:text-2xl font-bold tracking-tight transition-colors first:mt-0">
          Dine Market
        </h2>
        </Link>
      </div>
      <div className=" hidden md:flex items-center gap-7">
        <Link className="hover:text-gray-500" href={"/female"}> Female </Link>
        <Link className="hover:text-gray-500" href={"/male"}> Male </Link>
        <Link className="hover:text-gray-500" href={"/kids"}> Kids </Link>
        <Link className="hover:text-gray-500" href={"/allProducts"}> All Products </Link>
      </div>
      <div className="flex items-center">
        <div className="hidden lg:block relative">
          <input
            className="w-[160px] md:w-[300px] border border-gray-200 placeholder:text-sm px-2 outline-none"
            type="text"
            placeholder="What are you looking for"
          />
          <div className="hidden md:block absolute right-1 top-1" >
            <AiOutlineSearch className="hover:cursor-pointer" />
          </div>
        </div>
        <div className="mr-5 md:mr-0 ml-1 md:ml-5 bg-gray-100 rounded-full p-2 relative" >
          <Link href={"/cart"}><BsCart2 className="text-xl hover:cursor-pointer" /></Link>
          <div className="bg-red-500 px-1 text-xs rounded-full absolute top-0 right-0 text-white" >{cart.length}</div>
        </div>
      </div>
    </div>

{/* Mobile Menu */}
    <div className={`absolute ${!isOpen ? "block" : 'hidden'} md:hidden  left-1/2 transform -translate-x-1/2  flex items-center justify-center gap-y-7 flex-col bg-white w-full h-full z-20`} >
        <Link onClick={toggleMenu} className="hover:text-gray-500" href={"/female"}> Female </Link>
        <Link onClick={toggleMenu} className="hover:text-gray-500" href={"/male"}> Male </Link>
        <Link onClick={toggleMenu} className="hover:text-gray-500" href={"/kids"}> Kids </Link>
        <Link onClick={toggleMenu} className="hover:text-gray-500" href={"/allProducts"}> All Products </Link>
    </div>
    <GrFormClose className={`md:hidden absolute ${!isOpen ? "block": "hidden" } top-5 right-1 text-2xl file:hover:cursor-pointer`} onClick={()=> toggleMenu()} />
    <HiBars3CenterLeft className={`md:hidden absolute ${isOpen ? "block": "hidden" } top-5 right-1 text-2xl file:hover:cursor-pointer`} onClick={()=> toggleMenu()} />
    </div>
  );
};

export default Navbar;
