import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center w-full p-48 bg-slate-950">
        <div className="w-1/2">
          <div className="anh">
            <Image
              src={"/assets/text logo.png"}
              width={238}
              height={54}
              alt="logo"
            ></Image>
            <Image
              src={"/assets/Ecosystem.png"}
              width={388}
              height={85}
              alt="logo"
            ></Image>
          </div>
          <div className="text-3xl font-medium text-white">
            Decentralized, web3 security, trusted.
            <br />
            Welcome to Fenc3.
          </div>
          <div className="mt-16 flex">
            <button className="bg-cyan-200 rounded-3xl px-5 py-2 text-center text-black text-2xl mr-10">
              Go to App
            </button>
            <button className="border border-cyan-200 text-white bg-transparent px-5 py-2 rounded-3xl text-center text-2xl mr-6">
              Documentation
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src={"/assets/Hero.png"}
            width={388}
            height={50}
            className="w-[511px] h-[511px]"
            alt="logo"
          ></Image>
        </div>
      </div>
      <div className="flex pt-[156px] flex-row justify-center w-full gap-9 bg-slate-900 ">
        <div className="flex bg-slate-900 rounded-xl">
          <div className="w-1/2">
            <Image
              src={"/assets/Asset 1@300x 2 (1).png"}
              width={388}
              height={50}
              className="w-[194px] h-[150px]"
              alt="logo"
            ></Image>
          </div>
          <div className="">
            <div className="w-[185px] mb-10 h-[44px] text-center text-white text-[24px] font-semibold">
              Audit &<br />
              Audit Certificate{" "}
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl">
              <button className="w-40 h-8 bg-cyan-200 rounded-[88px]">
                Go to app
              </button>
              <button className="w-40 h-8 text-white bg-transparent border border-cyan-200 bg-cyan-200 rounded-[88px]">
                Documentation
              </button>
            </div>
          </div>
        </div>
        <div className="h-[292px] bg-slate-900 rounded-xl flex">
          <div className="w-1/2">
            <Image
              src={"/assets/Asset 2@300x 1.png"}
              width={388}
              height={50}
              className="w-[194px] h-[150px]"
              alt="logo"
            ></Image>
          </div>
          <div className="">
            <div className="w-[185px] h-[44px] mb-10 text-center text-white text-[24px] font-semibold">
              Super
              <br />
              Degen Bot{" "}
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl">
              <button className="w-40 h-8 bg-cyan-200 rounded-[88px]">
                Go to app
              </button>
              <button className="w-40 h-8 text-white bg-transparent border border-cyan-200 bg-cyan-200 rounded-[88px]">
                Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
