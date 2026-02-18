"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCamera } from "@/hooks/useCamera";
import LeftButton from "@/components/UI/LeftButton";
import { LoadingEllipsis } from "@/components/UI/LoadingEllipsis";
import Capture from "@/public/capture.svg";

const Page = () => {
  const {
    videoRef,
    canvasRef,
    isCameraActive,
    capturedImage,
    isUploading,
    error,
    startCamera,
    capturePhoto,
    retakePhoto,
    usePhoto,
  } = useCamera();

  // Start camera on mount
  useEffect(() => {
    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [startCamera, videoRef]);

  return (
    <div>
      {/* Main Camera View */}
      <div>
        {isUploading ? (
          <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center w-70 h-40 bg-[#ada2a2ac] rounded ">
              <div className="text-lg font-bold uppercase flex flex-col items-center">
                Analyzing Image
                <LoadingEllipsis />
              </div>
            </div>
          </div>
        ) : capturedImage ? (
          // Captured Image Preview
          <div className="relative w-full h-[90vh]">
            <Image
              src={capturedImage}
              alt="Captured Image"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          // Live Camera Feed
          <div className="relative w-full h-[90vh]">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {error && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded">
            {error}
          </div>
        )}

        {/* Hidden canvas */}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* Controls */}
      {capturedImage ? (
        // Retake & Use Photo Buttons
        <>
          <div className="uppercase absolute left-1/2 top-50 transform -translate-x-1/2 -translate-y-1/2 text-sm text-white">
            Great Shot!
          </div>
          <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-6">
              <div className="font-bold text-white ">Preview</div>
              <div className="flex gap-6">
                <button
                  onClick={retakePhoto}
                  disabled={isUploading}
                  className="flex flex-col items-center gap-2 text-sm text-[#5b5555] bg-white px-5 py-2 hover:text-black transition disabled:opacity-50 cursor-pointer"
                >
                  Retake
                </button>

                <button
                  onClick={usePhoto}
                  disabled={isUploading}
                  className="flex flex-col items-center gap-2 text-sm text-white bg-black px-5 py-2 font-bold hover:scale-105 transition disabled:opacity-50 cursor-pointer"
                >
                  Use This Photo
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Capture Button
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
          <div className="uppercase flex items-center gap-4 text-sm text-white disabled:opacity-50">
            Take Picture
            <button
              onClick={capturePhoto}
              disabled={!isCameraActive || isUploading}
              className="hover:scale-110 transition rounded-full border-2 border-white p-0.5 cursor-pointer"
            >
              <div className="bg-white rounded-full p-3">
                <Image src={Capture} alt="Take Picture Button" />
              </div>
            </button>
          </div>
        </div>
      )}

      {!capturedImage && !isUploading && (
        <div className="absolute text-center bottom-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex uppercase text-sm text-white">
          <div className="flex flex-col gap-4">
            <p>To get better results make sure to have</p>
            <div className="flex gap-4">
              <p>⬦ Neutral Expression</p>
              <p>⬦ Frontal Post</p>
              <p>⬦ Adequate Lighting</p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="absolute bottom-10 left-10 invert">
        <LeftButton text={"Back"} link={"/result"} />
      </div>
    </div>
  );
};

export default Page;
