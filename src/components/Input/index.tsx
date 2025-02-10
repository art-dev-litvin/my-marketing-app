import React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  name: string;
  error?: string | boolean;
}

export default function Input({ label, name, value, onChange, onBlur, error, type = "text" }: InputProps) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-lg font-semibold text-white">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={name}
        className={`w-full p-3 border-2 border-gray-500 outline-gray-400 rounded-lg  bg-gray-700  ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
