"use client"
import React, { useState, useEffect } from "react";

const SizeButtton = ({ size, selected }: any) => {
  const [buttonSelected, setButtonSelected] = useState(false);

  useEffect(() => {
    if (selected === size) {
      setButtonSelected(true);
    } else {
      setButtonSelected(false);
    }
  }, [selected, size]);

  return (
    <div
      className={`text-base font-bold relative ${
        buttonSelected ? "text-white " : "text-gray-500"
      } cursor-pointer flex items-center justify-center`}
    >
      {size}
      <div
        className={`h-[40px] w-[40px] rounded-full absolute ${
          buttonSelected ? "bg-black  " : "bg-gray-200 "
        } -z-10`}
      ></div>
    </div>
  );
};

export default SizeButtton;
