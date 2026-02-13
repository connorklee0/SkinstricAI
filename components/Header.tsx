import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between mt-5 mx-8 text-[4px] items-center text-center">
      <div className="flex font-bold gap-5 uppercase">
        <button className="cursor-pointer">
          <Link href={"/"}>SKINSTRIC</Link>
        </button>
        <div className="text-[#313030af]">[ Intro ]</div>
      </div>

      <div className="uppercase border bg-black text-white py-2 px-4">Enter Code</div>
    </div>
  );
};

export default Header;
