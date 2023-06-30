import Image from "next/image";
import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <div className="w-full px-48 pb-20 bg-black py-2">
      <p className="w-full text-center text-cyan-200 text-[40px] font-bold pb-20 uppercase py-24">
        NEWS
      </p>
      <div className="flex flex-row justify-center mb-32 text-white gap-28">
        <div className="">
          <Image
            src={"/assets/logo (2).png"}
            width={220}
            height={81}
            className="pb-2"
            alt="logo"
          ></Image>
        </div>
        <div className="">
          <Image
            src={"/assets/logo (3).png"}
            width={297}
            height={43}
            className="pb-2"
            alt="logo"
          ></Image>
        </div>
        <div className="">
          <Image
            src={"/assets/logo (1).png"}
            width={257}
            height={73}
            className="pb-2"
            alt="logo"
          ></Image>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row justify-center gap-8 text-white">
          <Link href={"https://twitter.com/fenc3_com"}>
            <Image
              src={"/assets/social network (1).png"}
              width={77}
              height={63}
              className="pb-2"
              alt="logo"
            ></Image>
          </Link>
          <Link href={"https://t.me/Fenc3ecosystem_ann"}>
            <Image
              src={"/assets/social network (3).png"}
              width={73}
              height={63}
              className="pb-2"
              alt="logo"
            ></Image>
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/uncle-dre-056a50280?trk=contact-info"
            }
          >
            <Image
              src={"/assets/social network (2).png"}
              width={63}
              height={63}
              className="pb-2"
              alt="logo"
            ></Image>
          </Link>
        </div>
        <p className="text-white text-center text-[20px] mt-5">
          Keep up to date with the latest innovations in the DeFi space.
        </p>
      </div>
    </div>
  );
};

export default Social;
