import Image from "next/image";
import Border from "./UI/Border";
import Gallery from "@/public/gallery.svg";
import GalleryLine from "@/public/galleryline.svg";

interface GalleryOptionProps {
  onClick: () => void;
}

const GalleryOption: React.FC<GalleryOptionProps> = ({ onClick }) => {
  return (
    <>
      {/* Desktop View */}
      <div className="max-md:hidden">
        <Border size={50} className="translate-x-50">
          <button className="cursor-pointer" onClick={onClick}>
            <Image
              src={Gallery}
              alt="Gallery"
              className="hover:scale-110 transition duration-800"
              draggable={false}
              loading="eager"
            />
          </button>

          <div className="absolute -bottom-8 -left-5 ">
            <Image src={GalleryLine} alt="" draggable={false} />
            <div className="absolute right-12 w-40">
              <p className="uppercase text-xs text-right">
                Allow A.I. <br /> access to gallery
              </p>
            </div>
          </div>
        </Border>
      </div>

      {/* Mobile and Tablet View */}
      <div className="md:hidden scale-60">
        <Border size={50} className="">
          <button className="cursor-pointer" onClick={onClick}>
            <Image
              src={Gallery}
              alt="Gallery"
              className="hover:scale-110 transition duration-800"
              draggable={false}
              loading="eager"
            />
          </button>

          <p className="uppercase text-xs text-right">
            Allow A.I. <br /> access to gallery
          </p>
        </Border>
      </div>
    </>
  );
};

export default GalleryOption;
