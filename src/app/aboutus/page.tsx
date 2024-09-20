import React, { ReactElement } from "react";
import AboutICLS from "./components/AboutICLS";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Core from "./components/Core";
import Partner from "./components/Partner";
import CircularBackground from "../components/CircularBackground";
import {
  SplitEffectPoint,
  SplitEffectWave,
  SplitEffectWaveblue,
} from "../components/SplitEffect";

export default function Page(): ReactElement {
  return (
    <div className="">
      <CircularBackground title={"VỀ ICLS TECH"} />
      <Image
        loading="lazy"
        src={assets.aboutHeader}
        height={340}
        width={1440}
        alt="aboutHeader"
        className="w-screen h-auto xl:h-[250px] object-fill"
      />
      <AboutICLS />
      <SplitEffectWaveblue />
      <Vision />
      <SplitEffectPoint />
      <Mission />
      <Core />
      <SplitEffectWave />
      <Partner />
    </div>
  );
}
