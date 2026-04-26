
import Image from "next/image";
import Link from "next/link";
import logo from  "@/assets/user.png"
import Navlink from "./Navlink";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center gap-4 container mx-auto">
            <div></div>
            <ul className="flex justify-between items-center gap-3 text-gray-700">
                <li><Navlink href={"/"}>Home</Navlink></li>
                <li><Navlink href={"/about"}>About</Navlink></li>
                <li><Navlink href={"/career"}>Career</Navlink></li>
               
            </ul>
            <div className="flex justify-between items-center gap-3">
                <Image src={logo} width={50} height={50} alt="logo img"/>
                <button className="btn bg-neutral-800 text-white">login</button>
                
            </div>
        </div>
    );
};

export default Navbar;