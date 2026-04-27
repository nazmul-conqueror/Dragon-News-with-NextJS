'use client'
import Image from "next/image";
import Link from "next/link";
import logo from  "@/assets/user.png"
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session ,isPending} = authClient.useSession()
    const user = session?.user
    console.log(user);
    
   
    
    
    return (
        <div className="flex justify-between items-center gap-4 container mx-auto">
            <div></div>
            <ul className="flex justify-between items-center gap-3 text-gray-700">
                <li><Navlink href={"/"}>Home</Navlink></li>
                <li><Navlink href={"/about"}>About</Navlink></li>
                <li><Navlink href={"/career"}>Career</Navlink></li>
               
            </ul>
          {isPending? (<span className="loading loading-ring loading-lg"></span>) :user ? (
  <div className="flex justify-between items-center gap-3">
    <h2>{user.name}</h2>
    <Image
      src={user?.image || logo}
      width={50}
      height={50}
      alt="logo img"
    />
    <button onClick={async()=>await authClient.signOut()} className="btn bg-neutral-800 text-amber-50">
      Log Out
    </button>
  </div>
) : (
  <Link href="/login">
    <button className="btn bg-neutral-800 text-white">
      Login
    </button>
  </Link>
)}
        </div>
    );
};

export default Navbar;