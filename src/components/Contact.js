import React from "react";
const Contact = () => {
  return (
  <div className="footer-wrap">
          <footer className="bg-grayCustom p-3 mb-20 md:mb-16">
            <div className="content mx-auto md:flex w-[98%] md:w-[88%] justify-between">
                <div className="footer-left content md:flex text-white font-semibold items-center">
                  <img src="../images/logo.png" alt="img" className="content mx-auto md:mr-6 my-3 w-[110px] md:w-[140px] " />
                    <div className="display-block text-center md:text-left my-3 md:my-0 content">
                      <p className="content text-gray-300 text-xs font-normal font-DMSansRegular"> Terms of Use | Privacy Policy </p>
                      <p className="content text-gray-600 text-xs block md:flex font-normal font-DMSansRegular">
                        <span className="w-full md:w-auto content text-gray-500">  © iNeuron Intelligence Pvt. Ltd. </span>
                        <span className="w-full md:w-auto content text-gray-500"> 2022. All Rights Reserved. </span> 
                      </p>
                    </div>
                </div>
                <div className="footer-right content flex justify-center md:justify-end items-center">
                  <a href="#!" className="text-gray-600 pl-3 pr-2 md:pl-2 md:pr-2 content">
                    <img src="../images/youtube.png" alt="img" className="w-[20px] sm:w-auto content" />
                  </a>
                  <a href="#!" className="text-gray-600 pl-3 pr-2 md:pl-2 md:pr-2 content">
                    <img src="../images/twitter.png" alt="img" className="w-[20px] sm:w-auto content" />
                  </a>
                  <a href="#!" className="text-gray-600 pl-3 pr-2 md:pl-2 md:pr-2 content">
                    <img src="../images/linkedin.png" alt="img" className="w-[20px] sm:w-auto content" />
                  </a>
                  <a href="#!" className="text-gray-600 pl-3 pr-2 md:pl-2 md:pr-2 content">
                    <img src="../images/fb.png" alt="img" className="w-[10px] sm:w-auto content" />
                  </a>
                </div>
            </div>
        </footer>
  </div>
  );
};

export default Contact;
