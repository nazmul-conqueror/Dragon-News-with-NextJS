import Image from "next/image";
import headerImg from "@/assets/logo.png"
import {  format } from "date-fns";

const Header = () => {
    return (
        <div className=" py-6 text-center space-y-2">
         <Image src={headerImg} width={400} height={400} alt="header image" className=" mx-auto"/>
         <p>Journalism Without Fear or Favour</p>
         <p>{format(new Date(), "EEEE, MMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;