"use client";
import React from "react";
import { useField } from "formik";

interface TextFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`px-3 py-2 border rounded ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        } ${className}`}
      />
      {meta.touched && meta.error && (
        <p className="text-sm text-red-600">{meta.error}</p>
      )}
    </div>
  );
};

export default TextField;
