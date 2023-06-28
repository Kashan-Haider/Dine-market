import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { Image as SanityImage } from "sanity";
import Link from "next/link";

interface CardProps {
  image: SanityImage;
  title: string;
  price: number;
  subCategory: string;
  id: number;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  price,
  subCategory,
  id,
}) => {
  return (
    <Link href={`/details/${id}`} className="group" >
      <Image
        src={urlForImage(image).toString()}
        alt={title}
        width={250}
        height={250}
        className="mb-3 opacity-75 group-hover:opacity-100 rounded-md transition-all transform ease-in-out"
      />

      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-gray-500 font-bold">{subCategory}</p>
      <p className="font-bold text-xl">${price}</p>
    </Link>
  );
};

export default Card;
