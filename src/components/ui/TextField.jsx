import React from "react";

const TextField = ({
  label,
  name,
  type = "text",
  checked,
  value,
  onChange,
  placeholder,
  required,
  className = "",
  error,
  ...rest
}) => {
  const isCheckboxOrRadio = type === "checkbox" || type === "radio";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={!isCheckboxOrRadio ? value : undefined}
        checked={isCheckboxOrRadio ? checked : undefined}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`px-3 py-2 border rounded ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        {...rest}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default TextField;
