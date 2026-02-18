"use client";

import React from "react";

interface UserInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  onSubmit: (e: React.FormEvent) => void;
}

export const UserInput: React.FC<UserInputProps> = ({
  value,
  onChange,
  placeholder,
  error,
  onSubmit,
}) => {
  return (
    <div className="relative z-10 transform -translate-y-8">
      <div className="uppercase tracking-widest text-[#313030af] font-extralight text-sm leading-12">
        Click to type
      </div>

      {/* Error message */}
      {error && (
        <p
          className="text-red-400 text-sm absolute left-1/2 transform -translate-x-1/2 -translate-y-3 whitespace-nowrap"
          role="alert"
        >
          {error}
        </p>
      )}

      {/* Form */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-4xl sm:text-5xl text-center bg-transparent border-b border-black focus:outline-none appearance-none w-105 sm:w-108 pt-1 tracking-1 leading-16 text-[#1A1B1C] z-10"
          autoFocus
          autoComplete="off"
        />

        {/* Hidden submit button for Enter key */}
        <button type="submit" className="hidden" />
      </form>
    </div>
  );
};
