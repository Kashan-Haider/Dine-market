"use client";
import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { Image as SanityImage } from "sanity";
import SizeButtton from "./SizeButtton";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";
import Button from "./Button";
import type { RootState } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/features/Cart/cartSlice";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

interface DetailsProps {
  image: SanityImage;
  title: string;
  price: number;
  subCategory: string;
  id: number;
}

const DetailBox: React.FC<DetailsProps> = ({
  image,
  title,
  price,
  subCategory,
  id,
}) => {
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const [selected, setSelected] = useState("");
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const showToast = () => {
      toast.success(`${quantity} ${title} added successfully!`);
  };

  return (
    <div className="md:flex gap-12 items-center justify-center mt-10 md:mt-20">
      <Toaster position="top-right" reverseOrder={false} />
      <div>
        <Image
          src={urlForImage(image).toString()}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="text-3xl font-bold mt-5 sm:mt-0 mb-1">{title}</h1>
          <p className="text-gray-500 text-xl font-bold">{subCategory}</p>
        </div>
        <div className="">
          <h1 className="text-xl font-bold mb-3">Select Size:</h1>
          <div className="flex gap-10">
            <div
              onClick={() => {
                setSelected("XS");
              }}
            >
              <SizeButtton size="XS" selected={selected} />
            </div>
            <div
              onClick={() => {
                setSelected("S");
              }}
            >
              <SizeButtton size="S" selected={selected} />
            </div>
            <div
              onClick={() => {
                setSelected("M");
              }}
            >
              <SizeButtton size="M" selected={selected} />
            </div>
            <div
              onClick={() => {
                setSelected("L");
              }}
            >
              <SizeButtton size="L" selected={selected} />
            </div>
            <div
              onClick={() => {
                setSelected("XL");
              }}
            >
              <SizeButtton size="XL" selected={selected} />
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <h1 className="text-xl font-bold">quantity:</h1>
          <div className="flex gap-2 items-center">
            <AiOutlineMinusCircle
              className="text-2xl cursor-pointer"
              onClick={() => {
                handleDecrement();
              }}
            />
            <h1 className="text-xl">{quantity}</h1>
            <AiOutlinePlusCircle
              className="text-2xl cursor-pointer"
              onClick={() => {
                handleIncrement();
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            onClick={() => {
              dispatch(addToCart({ id: id, quantity: quantity }));
              showToast();
            }}
          >
            <Button body="Add To Cart" />
          </div>
          <p className="font-bold text-xl">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
