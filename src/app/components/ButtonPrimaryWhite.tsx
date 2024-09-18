import React from "react";

interface ButtonPrimaryWhiteProps {
  value: string;
  handleClick?: () => void;
  stylElement?: string;
  type?: "button" | "submit" | "reset";
}

const ButtonPrimaryWhite: React.FC<ButtonPrimaryWhiteProps> = ({
  value,
  handleClick,
  stylElement,
  type,
}) => {
  return (
    <button
      type={type}
      className={`transition-all duration-300 ease-in-out hover:shadow-register-blue-dark flex flex-col justify-center items-center px-3 py-2 md:py-3 max-w-full text-sm md:text-xl font-bold text-center text-primary-blue-lighter uppercase bg-white shadow-register h-max w-max md:w-[230px] ${stylElement}`}
      onClick={handleClick}
    >
      <span className="flex-1">{value}</span>
      <div className="transition-all duration-300 ease-in-out mt-1 md:mt-2.5 w-full bg-primary-blue-lighter border-primary-blue-lighter border-solid h-[2px] md:h-[3px]" />
    </button>
  );
};

export default ButtonPrimaryWhite;
