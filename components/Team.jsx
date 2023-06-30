import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-slate-950">
      <p className="w-full text-center text-cyan-200 text-[30px] font-bold py-24 uppercase">
        team
      </p>
      <div className="flex flex-row justify-center pb-20 gap-28">
        <div className="">
          <div className="anh">
            <Image
              src={"/assets/CEO.png"}
              width={224}
              height={224}
              className="pb-2"
              alt="logo"
            ></Image>
          </div>
          <p className="text-center text-cyan-200 text-[24px] font-bold uppercase">
           Uncle Dre
          </p>
          <p className="text-white text-center text-[18px] font-medium leading-relaxed">
            CEO
          </p>
        </div>
        <div className="">
          <div className="anh">
            <Image
              src={"/assets/CTO.png"}
              width={224}
              height={224}
              className="pb-2"
              alt="logo"
            ></Image>
          </div>
          <p className="text-center text-cyan-200 text-[24px] font-bold uppercase">
            Matthew Jones
          </p>
          <p className="text-white text-center text-[18px] font-medium leading-relaxed">
            Designer
          </p>
        </div>
        <div className="">
          <div className="anh">
            <Image
              src={"/assets/Designer.png"}
              width={224}
              height={224}
              className="pb-2"
              alt="logo"
            ></Image>
          </div>
          <p className="text-center text-cyan-200 text-[24px] font-bold uppercase">
            K.Muller
          </p>
          <p className="text-white text-center text-[18px] font-medium leading-relaxed">
            CTO
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
