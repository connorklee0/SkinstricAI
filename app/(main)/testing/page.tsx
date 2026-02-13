"use client";

import LeftButton from "@/components/UI/LeftButton";
import { UserInput } from "@/components/UI/UserInput";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";

const Testing = () => {
  const {
    step,
    name,
    setName,
    city,
    setCity,
    error,
    isSubmitting,
    handleNameSubmit,
    handleCitySubmit,
    clearError,
  } = useMultiStepForm();
  return (
    <div>
      {/* Header */}
      <div className="uppercase text-xs font-bold m-8">To start analysis</div>

      {/* Main Content */}
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-90 h-90 border-3 border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-37 pointer-events-none" />
        <div className="w-90 h-90 border-3 border-dotted border-[#a0a4ab73] rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-37 scale-105 pointer-events-none" />

        {/* Input fields */}
        {isSubmitting ? (
          <div className="flex flex-col">
            <div className="text-lg font-normal text-[#313030af]">
              Processing submission
              <div className="text-6xl">...</div>
            </div>
          </div>
        ) : step === "submitted" ? (
          <div className="flex flex-col gap-4">
            <div className="text-xl">Thank you!</div>
            <div className="text-[#313030af]">Proceed for the next step</div>
          </div>
        ) : step === "name" ? (
          <UserInput
            value={name}
            onChange={(value) => {
              setName(value);
              clearError();
            }}
            placeholder="Introduce Yourself"
            error={error}
            onSubmit={handleNameSubmit}
          />
        ) : (
          <UserInput
            value={city}
            onChange={(value) => {
              setCity(value);
              clearError();
            }}
            placeholder="Your City Name"
            error={error}
            onSubmit={handleCitySubmit}
          />
        )}
      </div>

      {/* Back button */}
      <div className="absolute bottom-10 left-10">
        <LeftButton text={"Back"} link={"/"} />
      </div>
    </div>
  );
};

export default Testing;
