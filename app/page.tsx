import RightButton from "@/public/buttin-icon-shrunk-right.svg";
import LeftButton from "@/public/buttin-icon-shrunk-left.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Discover A.I. Button */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 overflow-hidden w-100 h-150">
        <div className="w-90 h-90 border-2 border-dotted border-[#A0A4AB] rotate-45 absolute -left-50 top-1/2 -translate-y-1/2" />
        <button className="flex gap-3 items-center absolute top-1/2 -translate-y-1/2 left-8 z-10 cursor-not-allowed group">
          <Image
            src={LeftButton}
            alt="go to Discover A.I. page"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className=" text-sm uppercase">Discover A.I.</div>
        </button>
      </div>

      {/* Title */}
      <div className="text-7xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Sophisticated
        <br />
        skincare
      </div>

      {/* Take Test Button */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 overflow-hidden w-100 h-150">
        <div className="w-90 h-90 border-2 border-dotted border-[#A0A4AB] rotate-45 absolute -right-50 top-1/2 -translate-y-1/2" />
        <Link
          href="/testing"
          className="flex gap-3 items-center absolute top-1/2 -translate-y-1/2 right-8 z-10 cursor-pointer group"
        >
          <div className="text-sm uppercase">Take Test</div>
          <Image
            src={RightButton}
            alt="go to Take Test page"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      </div>

      {/* Description */}
      <div className="absolute uppercase text-sm bottom-15 left-15">
        Skinstric developed an A.I. that creates a <br /> highly-personalized
        routine tailored to <br />
        what your skin needs.
      </div>
    </div>
  );
}
