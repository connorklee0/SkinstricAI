"use client";

import Border from "@/components/UI/Border";
import Camera from "@/public/camera.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  setTimeout(() => router.push("/camera/capture"), 1200);

  return (
    <>
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
        <Border size={70}>
          <div className="flex flex-col items-center gap-5 animate-pulse">
            <Image src={Camera} alt="" />
            <p className="uppercase font-bold">Setting up camera...</p>
          </div>
        </Border>
      </div>{" "}
      <div className="absolute text-center bottom-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex uppercase text-sm text-[#838181]">
        <div className="flex flex-col gap-4">
          <p>To get better results make sure to have</p>
          <div className="flex gap-4">
            <p>⬦ Neutral Expression</p>
            <p>⬦ Frontal Post</p>
            <p>⬦ Adequate Lighting</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
