import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[457px] w-full text-white bg-gray-950 flex justify-between px-48 py-20">
      <div className="">
        <Link
          href={"#"}
          className="text-left text-cyan-200 text-[30px] font-bold mb-[45px]"
        >
          Website
        </Link>
        <div className="flex flex-col gap-1">
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Sitemap
          </Link>
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Privacy Policy
          </Link>
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Term & Conditions
          </Link>
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Audits
          </Link>
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Brand Assets
          </Link>
        </div>
        <div className="flex flex-row gap-4 social mt-[27px]">
          <Link href={"https://twitter.com/fenc3_com"}>
            <Image
              src={"/assets/social network (1).png"}
              width={20}
              height={20}
              className="pb-2"
              alt="logo"
            ></Image>
          </Link>

          <Link href={"https://t.me/Fenc3ecosystem_ann"}>
            <Image
              src={"/assets/social network (3).png"}
              width={20}
              height={20}
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
              width={20}
              height={20}
              className="pb-2"
              alt="logo"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
