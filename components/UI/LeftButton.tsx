import LeftBtn from "@/public/buttin-icon-shrunk-left.svg";
import Image from "next/image";
import Link from "next/link";

interface LeftButtonProps {
  text: string;
  link: string;
  disabled?: boolean;
}

const LeftButton = ({ text, link, disabled = false }: LeftButtonProps) => {
  return (
    <>
      {/* Desktop View */}
      <div className="max-md:hidden">
        <Link
          href={link}
          className={`flex gap-3 items-center group ${
            disabled ? "pointer-events-none opacity-50" : ""
          }`}
          aria-label={text}
        >
          <Image
            src={LeftBtn}
            alt=""
            className="transition-transform duration-300 group-hover:scale-110 size-12"
            aria-hidden="true"
            draggable={false}
          />
          <span className="text-sm uppercase font-bold">{text}</span>
        </Link>
      </div>

      {/* Mobile and Tablet View */}
      <div className="md:hidden relative transition duration-300 hover:scale-110">
        <div className="w-14 h-14 border-2 border-[#A0A4AB] rotate-45 " />
        <Link
          href={link}
          className={`absolute inset-0 flex items-center justify-center group ${
            disabled ? "pointer-events-none opacity-50" : ""
          }`}
          aria-label={text}
        >
          <span className="text-xs uppercase font-bold ">{text}</span>
        </Link>
      </div>
    </>
  );
};

export default LeftButton;
