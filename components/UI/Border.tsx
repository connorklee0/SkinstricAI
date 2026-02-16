import React, { ReactNode } from "react";

interface BorderProps {
  size?: number;
  children?: ReactNode;
  className?: string;
}

const Border = ({ size = 50, children, className = "" }: BorderProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Inner border */}
      <div
        className="border-3 border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: `${size * 0.25}rem`,
          height: `${size * 0.25}rem`,
        }}
      />
      {/* Outer border */}
      <div
        className="border-3 border-dotted border-[#a0a4ab73] rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-105 pointer-events-none"
        style={{
          width: `${size * 0.25}rem`,
          height: `${size * 0.25}rem`,
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Border;
