'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { exerciseContext } from "@/ContextApi/Context";
import { Ifit } from "@/type";


const Navbar = () => {
  const {todaysPlan,saveLater} = useContext(exerciseContext) as {todaysPlan:Ifit[]; saveLater:Ifit[]}
  const pathName = usePathname()
    return (
       <div className= "shadow-2xl">
         <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
      
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><Link href="/"><span className={pathName === '/'? 'text-[#C2F800] text-xs font-bold':'text-slate-300 text-xs font-bold'}>Work Out</span></Link></li>
        <li><Link href="/myPlans"><span className={pathName === '/myPlans'? 'text-[#C2F800] text-xs font-bold':'text-slate-300 text-xs font-bold'}>My Plan</span></Link></li>
      </ul>
    </div>
    <div className="text-xl">
      <span className="inline-flex items-center gap-2">
        <Image src={logo} alt="Logo" width={28} height={28} />
        <span className="text-white font-semibold">FITLOG</span>
      </span>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/"><span className={pathName === '/'? 'text-[#C2F800] text-xs font-bold':'text-slate-300 text-xs font-bold'}>Work Out</span></Link></li>
        <li><Link href="/myPlans"><span className={pathName === '/myPlans'? 'text-[#C2F800] text-xs font-bold':'text-slate-300 text-xs font-bold'}>My Plan</span></Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href='/myPlans'>
    <p className="text-slate-300 text-xs font-bold">Plan <span className="bg-[#C2F800] rounded-4xl px-2 py-1 text-black">
      {todaysPlan.length}
      </span></p>
    </Link>

    <Link href='/myPlans'>
    <p className="pl-3 text-slate-300 text-xs font-bold ">Saved <span className="">
      {saveLater.length}
      </span></p>
    </Link>
  </div>
</div>
<hr />
       </div>
       
    );
};

export default Navbar;