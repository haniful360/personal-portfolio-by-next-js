// import React from 'react';
import { FaFacebook } from "react-icons/fa";

import Link from "next/link";

const Header = () => {
  return (
    <main className="text-center flex items-center h-[630px]">
      <div className="">
        <h2 className="font-bold text-[50px] text-[#000000] text-center leading-[65px] mb-[10px]">
          Tipu
        </h2>
        <ul className="w-[250px] flex flex-col text-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Service</Link>
          <Link href="portfolio">Portfolio</Link>
          <Link href="blog">Blog</Link>
          <Link href="contact">Contact</Link>
        </ul>
        <p>Copyright © 2024 All rights are reserved</p>
        <div className="flex gap-3 mt-10 justify-center">
          <Link href="">
            <FaFacebook />
          </Link>
          <Link href="">
            <FaFacebook />
          </Link>
          <Link href="">
            <FaFacebook />
          </Link>
          <Link href="">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Header;
