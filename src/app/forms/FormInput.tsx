import React from "react";

interface FormInputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  id,
  name,
  value,
  required = true,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full tracking-tight max-md:max-w-full text-black">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="flex w-full bg-[#E6F8FE] rounded border border-solid border-[#707070] py-1.5 text-base max-md:max-w-full px-3"
      />
    </div>
  );
};

export default FormInput;
