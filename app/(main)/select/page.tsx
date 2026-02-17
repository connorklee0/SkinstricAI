import LeftButton from "@/components/UI/LeftButton";
import RightButton from "@/components/UI/RightButton";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* Header */}
      <div className="mt-8 ml-8">
        <div className="uppercase text-xs font-bold">A.I. analysis</div>
        <div className="uppercase text-xs">
          A.I has estimated the following.
        </div>
        <div className="uppercase text-xs">
          Fix estimated information if needed.
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Selection Buttons */}
        <div className="relative w-72 h-72 group">
          {/* Border */}
          <div className="w-80 h-80 border-2 border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
          <Link
            href={"/summary"}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-30 h-30 bg-[#E8EBED] hover:bg-[#D5DADD]  transition-colors duration-300 rotate-45 flex items-center justify-center cursor-pointer"
          >
            <span className="-rotate-45 uppercase font-bold text-sm tracking-wide">
              Demographics
            </span>
          </Link>
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 w-30 h-30 hover:bg-[#D5DADD] transition-colors duration-300 rotate-45 flex items-center justify-center cursor-not-allowed">
            <span className="-rotate-45 uppercase font-bold text-sm tracking-wide text-center leading-tight">
              Cosmetic
              <br />
              Concerns
            </span>
          </button>
          {/* Right button - Skin Type Details */}
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 w-30 h-30 hover:bg-[#D5DADD] transition-colors duration-300 rotate-45 flex items-center justify-center cursor-not-allowed">
            <span className="-rotate-45 uppercase font-bold text-sm tracking-wide text-center leading-tight">
              Skin Type
              <br />
              Details
            </span>
          </button>
          {/* Bottom button - Weather */}
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-30 h-30 hover:bg-[#D5DADD] transition-colors duration-300 rotate-45 flex items-center justify-center cursor-not-allowed">
            <span className="-rotate-45 uppercase font-bold text-sm tracking-wide">
              Weather
            </span>
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-10">
        <LeftButton text={"Back"} link={"/result"} />
      </div>

      <div className="absolute bottom-10 right-10">
        <RightButton text={"Get Summary"} link={"/summary"} />
      </div>
    </div>
  );
};

export default page;
