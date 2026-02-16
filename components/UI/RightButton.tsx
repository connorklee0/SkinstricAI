import RightBtn from "@/public/buttin-icon-shrunk-right.svg";
import Image from "next/image";
import Link from "next/link";

interface RightButtonProps {
  text: string;
  link: string;
  disabled?: boolean;
}

const RightButton = ({ text, link, disabled = false }: RightButtonProps) => {
  return (
    <Link
      href={link}
      className={`flex gap-3 items-center group ${
        disabled ? "pointer-events-none opacity-50" : ""
      }`}
      aria-label={text}
    >
      <span className="text-sm uppercase font-bold">{text}</span>
      <Image
        src={RightBtn}
        alt=""
        className="transition-transform duration-300 group-hover:scale-110 size-12"
        aria-hidden="true"
        draggable={false}
      />
    </Link>
  );
};

export default RightButton;
