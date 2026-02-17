"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setAnalysisData } from "@/store/slices/analysisSlice";
import {
  convertImageToBase64,
  submitImageAnalysis,
  ImageUploadError,
} from "@/library/imageUpload";
import { AnalysisResult } from "@/store/slices/analysisSlice";

export const useImageUpload = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    async (file: File) => {
      setError("");
      setIsUploading(true);

      try {
        // Create preview
        const previewUrl = URL.createObjectURL(file);
        setPreviewImage(previewUrl);

        // Convert to base64
        const base64Image = await convertImageToBase64(file);

        // Submit to API
        const result = (await submitImageAnalysis(
          base64Image,
        )) as AnalysisResult;

        // Store result in Redux
        dispatch(setAnalysisData(result));

        // Success state
        alert("Image analyzed successfully!");

        // Navigate to summary
        router.push("/select");

        return result;
      } catch (err) {
        const errorMessage =
          err instanceof ImageUploadError
            ? err.message
            : "An unexpected error occurred";

        setError(errorMessage);
        setPreviewImage(null);
      } finally {
        setIsUploading(false);
      }
    },
    [dispatch, router],
  );

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFileSelect(file);
      }
    },
    [handleFileSelect],
  );

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const clearImage = useCallback(() => {
    setPreviewImage(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  return {
    previewImage,
    isUploading,
    error,
    fileInputRef,
    handleFileInputChange,
    triggerFileInput,
    clearImage,
  };
};
