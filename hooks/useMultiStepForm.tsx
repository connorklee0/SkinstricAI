"use client";

import { useState, useCallback } from "react";
import { validators, ValidationError } from "@/library/userValidation";
import { submitFormData, APIError } from "@/library/userApi";

type FormStep = "name" | "city" | "submitted";

export const useMultiStepForm = () => {
  const [step, setStep] = useState<FormStep>("name");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      try {
        validators.validateName(name);
        setStep("city");
      } catch (err) {
        if (err instanceof ValidationError) {
          setError(err.message);
        }
      }
    },
    [name],
  );

  const handleCitySubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      setIsSubmitting(true);

      try {
        const validatedName = validators.validateName(name);
        const validatedCity = validators.validateCity(city);

        await submitFormData({
          name: validatedName,
          location: validatedCity,
        });

        setStep("submitted");
      } catch (err) {
        if (err instanceof ValidationError || err instanceof APIError) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [name, city],
  );

  const clearError = useCallback(() => setError(""), []);

  return {
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
  };
};
