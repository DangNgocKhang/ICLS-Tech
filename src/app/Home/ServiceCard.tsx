import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconSrc }) => {
  return (
    <article className="flex flex-col p-5 mt-5 w-full border border-solid border-zinc-500 border-opacity-60 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center w-full text-4xl font-bold max-md:max-w-full">
        <h3 className="flex-1 shrink self-stretch my-auto basis-0">{title}</h3>
        <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
      </div>
      {description && (
        <p className="mt-5 text-xl leading-8 max-md:max-w-full">{description}</p>
      )}
    </article>
  );
};

export default ServiceCard;