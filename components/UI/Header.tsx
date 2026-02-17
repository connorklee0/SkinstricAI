import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between my-5 mx-8 text-[4px] items-center text-center">
      <div className="flex font-bold gap-5 uppercase">
        <Link href={"/"}>SKINSTRIC</Link>
        <div className="text-[#313030af]">[ Intro ]</div>
      </div>

      <div className="uppercase border bg-black text-white py-2 px-4 cursor-not-allowed">
        Enter Code
      </div>
    </div>
  );
};

export default Header;
