import React from "react";

interface ButtonPrimaryBlueProps {
  value: string;
  handleClick?: () => void;
  stylElement?: string;
  type?: "button" | "submit" | "reset";
}

const ButtonPrimaryBlue: React.FC<ButtonPrimaryBlueProps> = ({
  value,
  handleClick,
  stylElement,
  type,
}) => {
  return (
    <button
      type={type}
      className={`group transition-all duration-300 ease-in-out border hover:border-primary-blue-lighter hover:text-primary-blue-lighter hover:bg-white hover:shadow-register-blue-dark flex flex-col justify-center items-center px-3 py-2 md:py-3 max-w-full text-sm md:text-xl font-bold text-center text-white uppercase bg-primary-blue-lighter shadow-register-blue h-max w-max md:w-[230px] ${stylElement}`}
      onClick={handleClick}
    >
      <span className="flex-1">{value}</span>
      <div className="transition-all duration-300 ease-in-out mt-1 md:mt-2.5 w-full group-hover:bg-primary-blue-lighter group-hover:border-primary-blue-lighter bg-white border-white border-solid h-[2px] md:h-[3px]" />
    </button>
  );
};

export default ButtonPrimaryBlue;
