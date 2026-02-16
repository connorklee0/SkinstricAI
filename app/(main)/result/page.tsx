import Image from "next/image";
import LeftButton from "@/components/UI/LeftButton";
import Border from "@/components/UI/Border";
import Camera from "@/public/camera.svg";
import Gallery from "@/public/gallery.svg";

const Result = () => {
  return (
    <div>
      <div className="uppercase text-xs font-bold m-8">To start analysis</div>

      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
        <Border size={50} className="-translate-x-30">
          <Image src={Camera} alt="Camera" />
        </Border>
        <Border size={50} className="translate-x-30">
          <Image src={Gallery} alt="Gallery" />
        </Border>
      </div>

      <div className="absolute bottom-10 left-10">
        <LeftButton text={"Back"} link={"/testing"} />
      </div>
    </div>
  );
};

export default Result;
