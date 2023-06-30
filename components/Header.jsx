import Image from "next/image";
import React from "react";
import Logo from "../icons/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-[140px] bg-black flex justify-between items-center p-16">
      <div className="logo">
        <Image
          src={"/assets/logo header.png"}
          width={50}
          height={50}
          className="w-[108px] h-[38.89px]"
          alt="logo"
        ></Image>
      </div>
      <div className="flex flex-row items-center gap-14">
        <Link
          href={'"#'}
          className="text-center text-white text-[18px] leading-relaxed"
        >
          Products
        </Link>
        <Link
          href={'"#'}
          className="text-center text-white text-[18px] leading-relaxed"
        >
          Meet the team
        </Link>
        <Link
          href={'"#'}
          className="text-center text-white text-[18px] leading-relaxed"
        >
          Network
        </Link>
        <Link
          href={'"#'}
          className="text-center text-white text-[18px] leading-relaxed"
        >
          Blog
        </Link>

        <button className="w-36 h-[50px] bg-cyan-200 rounded-[88px] text-center text-black text-[18px]">
          Go to App
        </button>
      </div>
    </div>
  );
};

export default Header;
