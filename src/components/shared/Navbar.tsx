import Image from "next/image";
import LogoNoBg from "../../../public/assets/logoNoBg.png";

const Navbar = () => {
  return (
    <nav className="mt-4">
      <div className="flex items-center justify-center gap-1">
          <Image src={LogoNoBg} alt="logo" width={50} height={50} />
        <span className="font-bold text-3xl uppercase">Influcourse</span>
      </div>
    </nav>
  );
};

export default Navbar;
