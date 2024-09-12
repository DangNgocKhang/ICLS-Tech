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
    <section className="flex flex-col grow shrink justify-center self-stretch px-5 py-9 my-auto bg-white border border-primary-blue-lighter border-solid min-h-[217px] min-w-[240px] w-full">
      <div className="flex flex-col w-full">
        <div className="flex gap-5 items-center self-center text-6xl font-bold text-primary-blue-lighter whitespace-nowrap max-md:text-4xl">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              loading="lazy"
              src={icon}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square stroke-[2px] stroke-primary-blue-lighter w-[60px]"
            />
          }
          <div className="self-stretch my-auto w-[115px] max-md:text-4xl">
            {count}
          </div>
        </div>
        <p className="mt-3 text-xl leading-8 text-center text-black">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AchievementCard;
