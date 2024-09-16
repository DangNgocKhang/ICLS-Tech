import React from "react";

interface FormSelectProps {
  label: string;
  id: string;
  name: string;
  defaultSelectOption: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  id,
  name,
  defaultSelectOption,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full tracking-tight max-md:max-w-full text-black">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-1.5 bg-white border border-[#707070] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue-lighter"
      >
        <option value="" disabled>
          {defaultSelectOption}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
