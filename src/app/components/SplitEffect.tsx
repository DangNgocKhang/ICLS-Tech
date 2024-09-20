import { assets } from "@/assets/assets";
import Image from "next/image";

export const SplitEffectWaveblue = () => {
  return (
    <div>
      <div className="relative -z-10 -my-6 xl:-mb-24">
        <Image
          loading="lazy"
          src={assets.effectWaveBlue}
          height={678}
          width={711}
          alt="effectWaveBlue"
          className="w-screen scale-y-75"
        />
      </div>
    </div>
  );
};
export const SplitEffectWave = () => {
  return (
    <div className="-z-10 xl:-my-8">
      <Image
        loading="lazy"
        src={assets.effectWave}
        height={10}
        width={1440}
        alt={`effectWave `}
        className="w-screen bg-primary-blue-lighter pb-10 h-[150px] xl:h-[250px]"
      />
    </div>
  );
};
export const SplitEffectPoint = () => {
  return (
    <div className="relative -z-10 -mb-6 xl:-my-16">
      <Image
        loading="lazy"
        src={assets.effectPoint}
        height={321}
        width={1440}
        alt="effectPoint"
        className=" w-screen max-md:max-w-full"
      />
    </div>
  );
};
