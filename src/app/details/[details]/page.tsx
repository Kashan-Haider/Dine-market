"use client"
import React from 'react'
import { client } from "@/lib/sanityClient";
import { Image as SanityImage } from 'sanity'
import DetailBox from '@/app/components/DetailBox';

const page = async ({ params }: any) => {
  interface productInterface {
    title: string,
    image: SanityImage,
    price: number,
    _id: number,
    category: { name: string },
    sub_category: string,
  }

  const getData = async () => {
    const res = await client.fetch(`*[_type == "product" && _id == '${params.details}'] {
      _id,
      title,
      price,
      description,
      sub_category,
      image
    }`);
    return res;
  };

  const data: productInterface[] = await getData();
  return (
    <div className='px-3 md:px-10 lg:px-24 pt-3 md:pt-7' >
    <h1 className='' >{data.map(
      ((item)=>{
        return <DetailBox title={item.title} image={item.image} price={item.price} subCategory={item.sub_category} key={item._id }id = {item._id}  />
      })
    )}  </h1>
    </div>
  );
}

export default page;
