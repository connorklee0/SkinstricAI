"use client";

import { useState, useRef, useCallback } from "react";
import {
  convertImageToBase64,
  submitImageAnalysis,
  ImageUploadError,
} from "@/library/imageUpload";

export const useImageUpload = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(async (file: File) => {
    setError("");
    setIsUploading(true);

    try {
      // Create preview
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);

      // Convert to base64
      const base64Image = await convertImageToBase64(file);

      // Submit to API
      const result = await submitImageAnalysis(base64Image);

      alert("Image analyzed successfully!");
      console.log("Analysis result:", result);
      // Handle success - you can navigate or show results here

      return result;
    } catch (err) {
      if (err instanceof ImageUploadError) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
      setPreviewImage(null);
    } finally {
      setIsUploading(false);
    }
  }, []);

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
