"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setAnalysisData } from "@/store/slices/analysisSlice";
import { submitImageAnalysis, ImageUploadError } from "@/library/imageUpload";
import { AnalysisResult } from "@/store/slices/analysisSlice";

export const useCamera = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string>("");

  // Start camera
  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsCameraActive(true);
        setError("");
      }
    } catch (err) {
      console.error("Camera error:", err);
      setError("Camera access error: Permission denied. Redirecting...");
      setTimeout(() => router.push("/result"), 2000);
    }
  }, [router]);

  // Stop camera
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  }, []);

  // Capture photo
  const capturePhoto = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    if (context) {
      context.drawImage(video, 0, 0);
      const imageData = canvas.toDataURL("image/jpeg");
      setCapturedImage(imageData);
      stopCamera();
    }
  }, [stopCamera]);

  // Retake photo
  const retakePhoto = useCallback(() => {
    setCapturedImage(null);
    startCamera();
  }, [startCamera]);

  // Upload captured image to API
  const usePhoto = useCallback(async () => {
    if (!capturedImage) return;

    setIsUploading(true);
    setError("");

    try {
      // Extract just the base64 data (remove "data:image/jpeg;base64," prefix)
      const base64Data = capturedImage.split(",")[1];

      // Submit directly to API
      const result = (await submitImageAnalysis(base64Data)) as AnalysisResult;

      dispatch(setAnalysisData(result));
      router.push("/select");
    } catch (err) {
      const errorMessage =
        err instanceof ImageUploadError
          ? err.message
          : "An unexpected error occurred";
      setError(errorMessage);
    } finally {
      setIsUploading(false);
    }
  }, [capturedImage, dispatch, router]);

  return {
    videoRef,
    canvasRef,
    isCameraActive,
    capturedImage,
    isUploading,
    error,
    startCamera,
    stopCamera,
    capturePhoto,
    retakePhoto,
    usePhoto,
  };
};
