"use client";

import { useState } from "react";
import Image from "next/image";
import LeftButton from "@/components/UI/LeftButton";
import Border from "@/components/UI/Border";
import AccessModal from "@/components/AccessModal";
import { LoadingEllipsis } from "@/components/UI/LoadingEllipsis";
import { useImageUpload } from "@/hooks/useImageUpload";
import GalleryOption from "@/components/GalleryOption";
import CameraOption from "@/components/CameraOption";

const Result = () => {
  const {
    previewImage,
    isUploading,
    fileInputRef,
    handleFileInputChange,
    triggerFileInput,
  } = useImageUpload();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="uppercase text-xs font-bold m-8">To start analysis</div>
      <div
        className={
          isModalOpen
            ? "pointer-events-none opacity-50 transition duration-500"
            : ""
        }
      >
        <div className="absolute right-10 top-20">
          <p className="text-sm">Preview</p>
          <div className="border border-[#a0a4ab73] w-30 h-30 relative">
            {previewImage && (
              <Image
                src={previewImage}
                alt="Preview Image"
                className="object-cover"
                fill
                draggable={false}
              />
            )}
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Main Content */}
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex ">
        {isUploading ? (
          <Border size={90}>
            <div className="flex flex-col">
              <div className="text-lg font-bold uppercase flex flex-col items-center">
                Preparing your analysis
                <LoadingEllipsis />
              </div>
            </div>
          </Border>
        ) : (
          <>
            {/* Camera */}
            <CameraOption onClick={() => setIsModalOpen(true)} />

            {isModalOpen && (
              <div className="absolute right-15 top-5">
                <AccessModal onClose={() => setIsModalOpen(false)} />
              </div>
            )}

            {/* Gallery */}
            <div
              className={
                isModalOpen
                  ? "pointer-events-none opacity-50 transition duration-500"
                  : ""
              }
            >
              <GalleryOption onClick={triggerFileInput} />
            </div>
          </>
        )}
      </div>

      <div className="absolute bottom-10 left-10">
        <LeftButton text={"Back"} link={"/testing"} />
      </div>
    </div>
  );
};

export default Result;
