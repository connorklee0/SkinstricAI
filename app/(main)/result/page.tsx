import Image from "next/image";
import LeftButton from "@/components/UI/LeftButton";
import Border from "@/components/UI/Border";
import Camera from "@/public/camera.svg";
import Gallery from "@/public/gallery.svg";
import GalleryLine from "@/public/galleryline.svg";
import CameraLine from "@/public/cameraline.svg";

const Result = () => {
  return (
    <div>
      <div className="uppercase text-xs font-bold m-8">To start analysis</div>
      <div className="absolute right-10 top-20">
        <p className="text-sm">Preview</p>
        <div className="border border-[#a0a4ab73] w-30 h-30"></div>
      </div>

      {/* Main Content */}
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
        {/* Camera */}
        <Border size={50} className="-translate-x-30">
          <button className="cursor-pointer">
            <Image
              src={Camera}
              alt="Camera"
              className="hover:scale-110 transition duration-800"
            />
          </button>
          <div className="absolute -top-7 -right-8">
            <div className="absolute left-8 -top-8 w-40">
              <p className="uppercase text-xs text-left">
                Allow A.I. <br /> to scan your face
              </p>
            </div>
            <Image src={CameraLine} alt="" />
          </div>
        </Border>

        {/* Gallery */}
        <Border size={50} className="translate-x-30">
          <button className="cursor-pointer">
            <Image
              src={Gallery}
              alt="Gallery"
              className="hover:scale-110 transition duration-800"
            />
          </button>
          <div className="absolute -bottom-9 -left-5">
            <Image src={GalleryLine} alt="" />
            <div className="absolute right-12 w-40">
              <p className="uppercase text-xs text-right">
                Allow A.I. <br /> access to gallery
              </p>
            </div>
          </div>
        </Border>
      </div>

      <div className="absolute bottom-10 left-10">
        <LeftButton text={"Back"} link={"/testing"} />
      </div>
    </div>
  );
};

export default Result;
