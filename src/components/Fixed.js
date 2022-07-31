import React from "react";
const Fixed = () => {
  return (
<div className="all-form mx-auto w-[90%] md:w-[80%] lg:w-[70%] shadow-xl mb-10">

    <div className="bottom-button z-10 block sm:flex fixed left-0 w-full bottom-0 rounded-none">
            <div className="w-[100%] sm:w-[50%] text-center items-center border-r-2 rounded-none">
                 <button className="w-[100%] flex justify-center items-center mx-auto bg-[#4E9A48] hover:bg-[#24311C] text-sm text-white py-6 px-10 border-none font-medium font-DMSansmedium"> <img src="../images/mike 2.png" width="25px" className="bg-transparent mr-2"/> Request speaker </button>
            </div>
            <div className="sm:block hidden w-[100%] sm:w-[50%] text-center items-center rounded-none">
                 <button className="w-[100%] flex justify-center items-center mx-auto bg-[#4E9A48] hover:bg-[#24311C] text-sm text-white py-6 px-10 border-none font-medium font-DMSansmedium"> <img src="../images/money-sack 1.png" width="25px" className="bg-transparent mr-2"/> Request sponsorship </button>
            </div>
    </div>

</div>
  );
};

export default Fixed;
