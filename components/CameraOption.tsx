"use client";

import Image from "next/image";
import Border from "@/components/UI/Border";
import Camera from "@/public/camera.svg";
import CameraLine from "@/public/cameraline.svg";

interface CameraOptionProps {
  onClick: () => void;
}

const CameraOption: React.FC<CameraOptionProps> = ({ onClick }) => {
  return (
    <>
      {/* Desktop View */}
      <div className="max-md:hidden">
        <Border size={50} className="-translate-x-50">
          <button className="cursor-pointer" onClick={onClick}>
            <Image
              src={Camera}
              alt="Camera"
              className="hover:scale-110 transition duration-800"
              draggable={false}
              loading="eager"
            />
          </button>
          <div className="absolute -top-7 -right-8">
            <div className="absolute left-8 -top-8 w-40">
              <p className="uppercase text-xs text-left">
                Allow A.I. <br /> to scan your face
              </p>
            </div>
            <Image src={CameraLine} alt="" draggable={false} />
          </div>
        </Border>
      </div>

      {/* Mobile and Tablet View */}
      <div className="md:hidden scale-60">
        <Border size={50} className="">
          <button className="cursor-pointer" onClick={onClick}>
            <Image
              src={Camera}
              alt="Camera"
              className="hover:scale-110 transition duration-800"
              draggable={false}
              loading="eager"
            />
          </button>

          <p className="uppercase text-xs text-left">
            Allow A.I. <br /> to scan your face
          </p>
        </Border>
      </div>
    </>
  );
};

export default CameraOption;
