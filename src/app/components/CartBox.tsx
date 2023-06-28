import Image from "next/image";
import React from "react";
import { Image as SanityImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteItem } from "../redux/features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

interface CartBoxProps {
  image: SanityImage;
  title: string;
  subCategory: string;
  price: number;
  quantity: number;
  id: number;
}

const CartBox: React.FC<CartBoxProps> = ({
  image,
  title,
  subCategory,
  price,
  quantity,
  id,
}) => {
  const showToast = () => {
    toast.success(`${title} deleted successfully!`);
  };
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <Image
        src={urlForImage(image).toString()}
        alt="image"
        height={200}
        width={200}
        className="h-[200px] w-[200px] "
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">{title}</h1>
          <h2 className="font-bold text-gray-600">{subCategory}</h2>
          <h2 className="font-bold">Delivery Estimation</h2>
          <h2 className="font-bold text-yellow-500">5 Working Days</h2>
          <h1 className="text-xl font-bold">${price}</h1>
          <h1>{quantity} Items</h1>
        </div>
        <div
          className="top-5 right-5 text-xl cursor-pointer"
          onClick={async() => {
            showToast();
            dispatch(deleteItem(id));
          }}
        >
          <RiDeleteBin6Line />
        </div>
      </div>
    </div>
  );
};

export default CartBox;
