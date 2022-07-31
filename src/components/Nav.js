import React from "react";
const Nav = () => {
  return (   
  <header className="nav-wrap clearfix z-10 shadow-lg sm:shadow-none bg-grayCustom w-full fixed top:0">
      <nav className="navbar content mx-auto flex items-center py-4 w-[90%]">  
        <a href="#" className="nav-logo content"> <img src="../images/logo.png" alt="logo" className="w-[110px] md:w-[140px] mr-10 content" /> </a>
         <div className="hidden sm:block content">
            <ul className="content nav-menu flex justify-between items-center">
                <li className="nav-item mx-3 content">
                  <a href="#" className="font-DMSansmedium nav-link font-medium text-white hover:text-[#4E9A48] content"> Courses library </a>
                </li>
            
                <li className="nav-item mx-5 content">
                  <a href="#" className="font-DMSansmedium nav-link font-medium text-white hover:text-[#4E9A48] content"> One Neuron </a>
                </li>
                <li className="nav-item mx-3 content">
                  <a href="#" className="font-DMSansmedium nav-link font-medium text-white hover:text-[#4E9A48] content"> Internship </a>
                </li>
            </ul>
         </div>
              <div className="hamburger cursor-pointer" onclick="myFunctionnav()">
                <span className="bar mt-1 w-[25px] h-[2.6px]"></span>
                <span className="bar mt-1 w-[25px] h-[2.6px]"></span>
                <span className="bar mt-1 w-[17px] h-[2.6px]"></span>
              </div>
      </nav>
  </header>
  );
};
export default Nav;
