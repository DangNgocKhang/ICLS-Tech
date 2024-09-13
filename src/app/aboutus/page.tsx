import React, { ReactElement } from "react";
import CircularBackground from "./components/CircularBackground";
import AboutICLS from "./components/AboutICLS";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Core from "./components/Core";
import Partner from "./components/Partner";

export default function Page(): ReactElement {
  return (
    <div className="">
      <CircularBackground title={"VỀ ICLS TECH"} />
      <AboutICLS />
      <Image
        loading="lazy"
        src={assets.effectWaveBlue}
        height={678}
        width={711}
        alt="effectWaveBlue"
        className="w-screen max-md:max-w-full -translate-y-4"
      />
      <Vision />
      <Image
        loading="lazy"
        src={assets.effectPoint}
        height={321}
        width={1440}
        alt="effectPoint"
        className="w-screen max-md:max-w-full"
      />
      <Mission />
      <Core />
      <Image
        loading="lazy"
        src={assets.effectWave}
        height={10}
        width={1440}
        alt={`effectWave `}
        className="w-screen max-md:max-w-full bg-primary-blue-lighter scale-y-50"
      />
      <Partner/>
    </div>
  );
}
