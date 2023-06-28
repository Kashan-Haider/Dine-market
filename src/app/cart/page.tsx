"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { client } from "@/lib/sanityClient";
import { Image as SanityImage } from "sanity";
import Button from "../components/Button";
import CartBox from "../components/CartBox";
import getStripePromise from "@/lib/stripe";
import { Toaster } from "react-hot-toast";

const page = () => {
  interface productInterface {
    title: string;
    image: SanityImage;
    price: number;
    _id: number;
    category: { name: string };
    sub_category: string;
    quantity: number;
  }

  const cart = useSelector((state: RootState) => state.cart);
  const [products, setProducts]: any = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productArray: productInterface[] = [];

      for (const cartItem of cart) {
        const res = await client.fetch(
          `*[_type == "product" && _id == "${cartItem.id}"] {
          _id,
          title,
          price,
          sub_category,
          image
        }`
        );
        if (res.length > 0) {
          const product = res[0];
          product.quantity = cartItem.quantity;
          productArray.push(product);
        }
      }

      setProducts(productArray);
    };

    fetchProductData();
  }, [cart]);

  const handleProcess = async () => {
    const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });
    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  if (cart.length < 1) {
    return (
      <div className="text-gray-700 flex items-center justify-center flex-col min-h-[70vh] mx-5">
        <AiOutlineShopping className="text-9xl" />
        <h1 className="text-gray-700 text-3xl sm:text-4xl font-bold text-center">
          Your Shopping Bag is Empty
        </h1>
      </div>
    );
  } else {
    let sum = 0;
    return (
      <div className="p-10 md:p-20 lg:p-32">
        <Toaster position="top-right" reverseOrder={false} />
        <h1 className="font-bold text-3xl mb-4 md:mb-7 lg:mb-14">
          Shopping Cart
        </h1>
        <div className="grid md:grid-cols-2 gap-10 md:gap-0">
          <div className="flex flex-col gap-5">
            {products.map((item: productInterface) => {
              return (
                <div className="">
                  <CartBox
                    id={item._id}
                    price={item.price}
                    title={item.title}
                    subCategory={item.sub_category}
                    image={item.image}
                    quantity={item.quantity}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-xl font-bold">Order Summary</h1>
              <div className="flex gap-5">
                <h1 className="font-bold text-xl">Quantity</h1>
                <h1 className="md:text-xl">{products.length} Products</h1>
              </div>
              <div className="flex gap-5">
                <h1 className="font-bold text-xl">Sub Total</h1>
                <h1 className="md:text-xl">
                  $
                  {products.map((product: any) => {
                    sum += product.price * product.quantity;
                  })}
                  {sum}
                </h1>
              </div>
              <div onClick={() => handleProcess()}>
                <Button body="Process to Checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default page;
