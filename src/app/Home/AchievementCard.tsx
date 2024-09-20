import React from "react";

interface AchievementCardProps {
  icon: string;
  count: string;
  description: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  icon,
  count,
  description,
}) => {
  return (
    <section className="h-full col-span-6 xl:col-span-3 flex flex-col grow shrink justify-center self-stretch px-2 md:px-5 p-6 md:py-9 my-auto bg-white border border-primary-blue-lighter border-solid ">
      <div className="flex flex-col w-full">
        <div className="flex gap-2 md:gap-5 justify-center items-center self-center text-5xl font-bold text-primary-blue-lighter whitespace-nowrap max-md:text-4xl">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              loading="lazy"
              src={icon}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square stroke-[2px] stroke-primary-blue-lighter w-[40px] md:w-[60px]"
            />
          }
          <div className="self-stretch my-auto md:w-[115px] max-md:text-4xl">
            {count}
          </div>
        </div>
        <p className="mt-3 text-sm md:text-lg md:leading-8 text-center text-black">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AchievementCard;
