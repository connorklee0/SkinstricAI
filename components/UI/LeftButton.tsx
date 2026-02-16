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
  );
};

export default LeftButton;
