import React from "react";
import Image from "next/image";
import user from "../../assets/images/tipu.webp";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-[530px] text-center">
      <div className="">
        <Image
          src={user}
          alt="my images"
          className="w-[110px] h-[110px] rounded-full mb-[20px] mx-auto"
        />

        <h2 className="text-[50px] font-bold text-[#000000] leading-[65px] mb-[10px]">
          Tipu Sultan
        </h2>
        <p className="text-[#868A9B] font-medium text-[18px]">
          Software Engineer
        </p>
      </div>
    </div>
  );
};

export default HomePage;
