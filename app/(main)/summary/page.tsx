"use client";

import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import LeftButton from "@/components/UI/LeftButton";
import RightButton from "@/components/UI/RightButton";
import Link from "next/link";

const page = () => {
  const analysisData = useAppSelector((state) => state.analysis.data);

  return (
    <div>
      {/* Header */}
      <div className="mt-8 ml-8">
        <div className="uppercase text-xs font-bold">A.I. analysis</div>
        <div className="uppercase text-5xl">Demographics</div>
        <div className="uppercase text-xs">Predicted race & age</div>
      </div>

      {/* Main Content */}
      {!analysisData ? (
        <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-2">
            No analysis data found. Please upload an image first.
            <Link
              href={"/result"}
              className="bg-black text-white rounded py-2 px-4 text-sm"
            >
              Go to Upload Page or take a Picture with your device
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-10">
        <LeftButton text={"Back"} link={"/select"} />
      </div>

      <div className="absolute bottom-10 right-10">
        <RightButton text={"Home"} link={"/"} />
      </div>
    </div>
  );
};

export default page;
