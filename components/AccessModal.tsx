import Link from "next/link";

interface AccessModalProps {
  onClose: () => void;
}

const AccessModal: React.FC<AccessModalProps> = ({ onClose }) => {
  return (
    <div className="w-60 h-30 bg-black flex flex-col justify-between">
      <div className="text-white text-md uppercase text-left px-4 py-2">
        Allow A.I. to access your camera
      </div>
      <div className="border-t border-white flex gap-10 justify-end px-4 py-2">
        <button
          onClick={onClose}
          className="text-[#bbb8b8] hover:text-[#838181] text-sm cursor-pointer"
        >
          Deny
        </button>
        <Link
          href={"/camera"}
          className="text-white text-sm cursor-pointer hover:text-[#838181]"
        >
          Allow
        </Link>
      </div>
    </div>
  );
};

export default AccessModal;
