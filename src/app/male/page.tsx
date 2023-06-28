import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as SanityImage } from 'sanity'
import { urlForImage } from "../../../sanity/lib/image";
import Card from "../components/Card";

const page = async() => {
    interface productInterface {
      title: string,
      image: SanityImage,
      price: number,
      _id: number,
      category: {name: string},
      sub_category: string,

    }
  const getData = async () => {
    const res = await client.fetch(`*[_type == "product" && category._ref == "dca498bc-3f1f-4e41-bbb4-3ca6288c67f1"] {
        _id,
        title,
        price,
        sub_category,
        image
      }
      `);
    return res
  };
  const data: productInterface[] = await getData()
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 px-3 md:px-10 lg:px-24 pt-3 md:pt-7" >
      {data.map(product => (
        <Card image = {product.image} title ={product.title} price = {product.price} subCategory = {product.sub_category} id={product._id}/>
      ))}
  
  </div>)
};

export default page;
