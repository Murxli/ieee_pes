'use client'
import './Navbar.css'

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import {GoHome} from "react-icons/go";
import {BsCalendar4Event} from "react-icons/bs"
import {FaPeopleGroup} from "react-icons/fa6"
import {GrContact} from "react-icons/gr"


const navitems = [
  {name:"Home", path : "/", icon:<GoHome/>},
  {name:"Team", path:"/team", icon:<FaPeopleGroup/>},
  {name:"Events", path:"/events", icon:<BsCalendar4Event/>},
  {name:"Contact", path:"/contact", icon:<GrContact/>}
]

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [toggled, setToggled] = useState(false)
    const path = usePathname();
  
    useEffect(() => {
      setActive(path);
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 40) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [path]);

    return (
      <div className={`${toggled ? "nav-open" :""}`}>
        <div className={`navbar-container  ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
            <nav className={`navbar stroke`}>
              <Link
                  href="/"
                  onClick={() => {window.scrollTo(0, 0);}}
                  className="flex items-center"
              >
                <Image src={"/ssnlogo1.png"} alt="SSN Logo" width={120} height={100}  className="max-w-20 md:max-w-36" priority/>
                <Image src={"/ieee-pes-logo.png"} alt="PES logo"  width={75} height={100} className="max-w-16 md:max-w-36" priority/>
              </Link>
              <ul className="nav-items">
                {navitems.map( item => <li className={`${active === item.path ? "clicked" : ""}`} key={item.name}><Link href={item.path}>{item.name}</Link></li>)}
              </ul>
              <div className='relative sm:hidden '>
                <p className={`text-4xl text-gray-400  ${!toggled ? "" : "hidden" }`} onClick={()=>setToggled(true)}>
                  <IoIosMenu/> 
                </p>
                
              </div>
            </nav>
        </div>
        <div className={`backdrop ${toggled ? "" : "hidden"}`} onClick={() => setToggled(false)}></div>
        <aside className={`fixed top-0 ${toggled ? "right-0 flex flex-col" : "hidden -right-full"}  w-[70%] h-full bg-black/90 backdrop-blur-sm z-50  `}>
          <p className={`absolute top-6 right-4 text-4xl text-white  ${!toggled ? "hidden" : "" }`} onClick={()=>setToggled(false)}>
            <IoMdClose />
          </p>
          <ul className='h-2/3 my-auto text-white'>
            {navitems.map(item => 
              <li className={`${active === item.path ? "clicked" : ""} px-20 py-8 flex gap-4 items-center`} key={item.name}>
                {item.icon}
                <Link href={item.path} onClick={() => setToggled(false)}>{item.name}</Link>
              </li>
            )}
          </ul>
        </aside>
      </div>
    );
  };

  
  
  export default Navbar;