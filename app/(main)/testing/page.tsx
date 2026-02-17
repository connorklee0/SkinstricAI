"use client";

import LeftButton from "@/components/UI/LeftButton";
import RightButton from "@/components/UI/RightButton";
import Border from "@/components/UI/Border";
import { UserInput } from "@/components/UserInput";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { LoadingEllipsis } from "@/components/UI/LoadingEllipsis";

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
      <div className="uppercase text-xs font-bold m-8">To start analysis</div>

      {/* Main Content */}
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Border size={90}>
          {/* Input fields */}
          {isSubmitting ? (
            <div className="flex flex-col">
              <div className="text-lg uppercase text-[#313030af] flex flex-col items-center">
                Processing submission
                <LoadingEllipsis />
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
        </Border>
      </div>

      {/* Back button */}
      <div className="absolute bottom-10 left-10">
        <LeftButton text={"Back"} link={"/"} />
      </div>

      {/* Proceed button */}
      {step === "submitted" && (
        <div className="absolute bottom-10 right-10">
          <RightButton text={"Proceed"} link={"/result"} />
        </div>
      )}
    </div>
  );
};

export default Testing;
