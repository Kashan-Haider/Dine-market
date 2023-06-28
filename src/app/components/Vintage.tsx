import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Vintage = () => {
  return (
    <div>
        <h1 className="text-3xl sm:text-5xl font-bold flex lg:ml-auto lg:max-w-[500px] mt-20" >Unique and Authentic Vintage Designer Jewellery</h1>
      <div className="grid lg:grid-cols-2 gap-5 my-5">
        <div className="grid grid-cols-2 gap-5 relative">
          <div className="absolute leading-[80px] text-gray-200 -z-10">
            <h1 className="text-7xl sm:text-[100px] font-extrabold">
              Different from others
            </h1>
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-wide">
              Using Good Quality Materials
            </h1>
            <p className="tracking-wide">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-wide">
              100% Handmade Products
            </h1>
            <p className="tracking-wide">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-wide">
              Modern Fashion Design
            </h1>
            <p className="tracking-wide">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-wide">
              Discount for Bulk Orders
            </h1>
            <p className="tracking-wide">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mx-3 sm:grid sm:grid-cols-2 gap-5">
          <div>
            <Image
              src={"/images/vintage-img.png"}
              alt="Vintage Image"
              width={300}
              height={300}
              className=""
            />
          </div>
          <div>
            <p className="sm:tracking-widest mb-3">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href={"/"} >
            <Button body = "See All Product" className="mt-3"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vintage;
