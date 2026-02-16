import React from "react";

interface LoadingEllipsisProps {
  className?: string;
}

export const LoadingEllipsis: React.FC<LoadingEllipsisProps> = ({
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center gap-4 mt-5 text-[#313030af] ${className}`}
    >
      <span
        className="inline-block animate-ellipsis-bounce"
        style={{ animationDelay: "0s" }}
      >
        ●
      </span>
      <span
        className="inline-block animate-ellipsis-bounce"
        style={{ animationDelay: "0.2s" }}
      >
        ●
      </span>
      <span
        className="inline-block animate-ellipsis-bounce"
        style={{ animationDelay: "0.4s" }}
      >
        ●
      </span>
    </span>
  );
};
