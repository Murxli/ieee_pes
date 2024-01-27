import React from "react";
import { FaRegCopyright } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const socialLinks = [
    { src: <SiGmail size={24} className="w-6 h-6 hover:scale-125 transition-all"/>, href:"mailto:ieeepes@ssn.edu.in" },
    { src: <FaLinkedin size={24} className="w-6 h-6 hover:scale-125 transition-all" />, href:"https://www.linkedin.com/company/ssn-ieee-power-electronics-society/" },
    { src: <GrInstagram size={24} className="w-6 h-6 hover:scale-125 transition-all"/>, href:"https://www.instagram.com/ssn_ieee_pes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
]

const Footer = () => {
  return (
    <section className="bg-gray-100">
      <footer className="flex flex-col sm:flex-row content-center justify-center max-container ">
          <div className="flex flex-col items-center sm:px-12 px-8 sm:py-12 py-8">
              <img src={"ieee-pes-logo.png"} alt="logo" className="w-full h-full max-w-60 object-contain" />       
          </div>
          <div className="flex flex-col justify-between text-white-400 max-sm:flex-col max-sm:items-center sm:px-12 px-8 sm:py-12 pb-8">
            <div className="flex items-center gap-5 sm:mt-8">
                {socialLinks.map((icon, index) => (
                  <a href={icon.href} target="blank">
                    <div key={index} className="p-4 rounded-full bg-slate-50 cursor-pointer">
                      {icon.src}
                    </div>
                  </a>
                ))}
              </div>
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <FaRegCopyright />
              <p>Copyright. All rights reserved.</p>
            </div>
          </div>
      </footer>
    </section>
  );
};

export default Footer;
