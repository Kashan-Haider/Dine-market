import Image from "next/image";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center overflow-hidden w-full">
      <div className="flex flex-col gap-5 max-w-[400px] ">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-600 bg-blue-70 px-4 py-1 max-w-fit mb-5 bg-blue-100 rounded-sm">
          Sale 70%
        </h4>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link href={"/"} ><Button body = "Start Shopping"/></Link>
        <div className="flex gap-2 flex-wrap">
          <Image
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"
            }
            width={70}
            height={70}
            alt="image"
          />
          <Image
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"
            }
            width={70}
            height={70}
            alt="image"
          />
          <Image
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"
            }
            width={70}
            height={70}
            alt="image"
          />
          <Image
            src={
              "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"
            }
            width={70}
            height={70}
            alt="image"
          />
        </div>
      </div>
      <div className="relative hidden lg:flex justify-end w-fit overflow-hidden">
        <div className="bg-orange-100 w-[400px] h-[400px] xl:w-[550px] xl:h-[550px] rounded-full absolute top-0  transform -translate-x-50"></div>
        <Image
          className="z-10"
          src={"/images/header.png"}
          alt="Header Image"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Header;
