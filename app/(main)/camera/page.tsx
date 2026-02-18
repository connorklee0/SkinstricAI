import Border from "@/components/UI/Border";
import Camera from "@/public/camera.svg";
import Image from "next/image";

const page = () => {
  return (
    <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
      <Border size={70}>
        <div className="flex flex-col items-center gap-5 animate-pulse">
          <Image src={Camera} alt="" />
          <p className="uppercase font-bold">Setting up camera...</p>
        </div>
      </Border>
    </div>
  );
};

export default page;
