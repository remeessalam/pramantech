import React from "react";
import { allServices, companyDetails, logoImg, routes } from "../../constant";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoMail } from "react-icons/io5";

const WebsiteFooter = () => {
  const links = routes.filter((option) => option.path !== "/blogs/:id");
  return (
    // <div className="py-[3rem]">
    //   <div className="wrapper flex lg:flex-row flex-col gap-7 sm:gap-14 justify-between">
    //     <div className="">
    //       <Helmet>
    //         {/* Preload the logo image */}
    //         <link rel="preload" href={logoImg} as="image" type="image/png" />
    //       </Helmet>
    //       <img
    //         width="200"
    //         height="50"
    //         src={logoImg}
    //         className="w-[12rem] object-contain"
    //         alt="logo"
    //       />
    //       <p className="desc text-sm max-w-[22rem] mt-3">
    //         At Praman Tech, we're dedicated to driving your business forward
    //         with innovative software solutions. With a passion for technology
    //         and a commitment to excellence, we specialize in delivering tailored
    //         software products and services to meet your unique needs.
    //       </p>
    //       <div className="flex items-center gap-3 mt-5">
    //         <Link
    //           aria-label="Contact us on Instagram"
    //           to={companyDetails.instagram}
    //           className="w-[2rem] h-[2rem] rounded-full p-2 bg-secondary hover:bg-primary text-primary_text hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
    //         >
    //           <Instagram strokeWidth={1.5} size={20} />
    //         </Link>
    //         <Link
    //           aria-label="Contact us on Twitter"
    //           to={companyDetails.twitter}
    //           className="w-[2rem] h-[2rem] rounded-full p-2 bg-secondary hover:bg-primary text-primary_text hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
    //         >
    //           <Twitter strokeWidth={1.5} size={20} />
    //         </Link>
    //         <Link
    //           aria-label="Contact us on LinkedIn"
    //           to={companyDetails.linkedin}
    //           className="w-[2rem] h-[2rem] rounded-full p-2 bg-secondary hover:bg-primary text-primary_text hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
    //         >
    //           <Linkedin strokeWidth={1.5} size={20} />
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="flex flex-col lg:flex-row gap-7 sm:gap-14">
    //       <div className="flex flex-col gap-2 text-primary_text">
    //         <h6 className="font-semibold">Company</h6>
    //         <ul className="flex flex-col gap-3 mt-1">
    //           {links.map(({ path, name }) => (
    //             <li key={path}>
    //               <Link
    //                 to={path}
    //                 className="max-w-[22rem] flex gap-2 items-center text-primary_text/70 hover:text-primary transition-colors duration-200"
    //               >
    //                 <ChevronRight size={17} strokeWidth={3} />
    //                 <span className="text-sm">{name}</span>
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className="flex flex-col gap-2 text-primary_text">
    //         <h6 className="font-semibold">Contact Us</h6>
    //         <ul className="flex flex-col gap-3 mt-1">
    //           {/* <li className="max-w-[22rem] flex gap-3 text-primary_text/70">
    //             <MapPin
    //               strokeWidth={1.5}
    //               size={20}
    //               className="text-primary inline min-w-5"
    //             />{" "}
    //             <span className="text-sm">{companyDetails.address}</span>
    //           </li> */}
    //           <li className="flex gap-3 text-primary_text/70">
    //             <Link
    //               aria-label="Contact us on Email"
    //               to={`mailto:${companyDetails.email}`}
    //               className="flex gap-3 text-primary_text/70 hover:text-primary transition-colors duration-200"
    //             >
    //               <Mail
    //                 strokeWidth={1.5}
    //                 size={20}
    //                 className="text-primary inline"
    //               />{" "}
    //               <span className="text-sm">{companyDetails.email}</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               aria-label="Contact us on Phone"
    //               to={`tel:${companyDetails.phone}`}
    //               className="flex gap-3 text-primary_text/70 hover:text-primary transition-colors duration-200"
    //             >
    //               <Phone
    //                 strokeWidth={1.5}
    //                 size={20}
    //                 className="text-primary inline"
    //               />{" "}
    //               <span className="text-sm">{companyDetails.phone}</span>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <footer className="bg-primary/40 text-gray-900 py-12 px-6">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6">
            <img
              width="200"
              height="50"
              src={logoImg}
              className="w-[12rem] object-contain"
              alt="logo"
            />
            <p className="text-lg">
              Driving Innovation, Redefining Possibilities, Powering Success!
            </p>
            <div className="space-y-4">
              <Link
                to={`mailto:${companyDetails?.email}`}
                className="flex items-center gap-2"
              >
                <IoMail className="h-5 w-5" />
                {companyDetails.email}
              </Link>
              <Link
                to={`mailto:${companyDetails?.email2}`}
                className="flex items-center gap-2"
              >
                <IoMail className="h-5 w-5" />
                {companyDetails.email2}
              </Link>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white">
                  <FaFacebookF />
                </Link>
                <Link href="#" className="hover:text-white">
                  <FaInstagram />
                </Link>
                <Link href="#" className="hover:text-white">
                  <FaYoutube />
                </Link>
                <Link href="#" className="hover:text-white">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-black text-xl font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {links.map(({ path, name }) => (
                <li>
                  <Link to={path} className="hover:text-white">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-black text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {allServices.map((obj) => (
                <li key={obj.id}>
                  <Link to="/services" className="hover:text-white">
                    {obj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-2">
              <HiLocationMarker className="h-6 w-6 mt-1" />
              <div>
                <h4 className="text-black font-semibold">Canada</h4>
                <p>{companyDetails?.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <HiLocationMarker className="h-6 w-6 mt-1" />
              <div>
                <h4 className="text-black font-semibold">India</h4>
                <p>{companyDetails?.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <HiLocationMarker className="h-6 w-6 mt-1" />
              <div>
                <h4 className="text-black font-semibold">UAE</h4>
                <p>{companyDetails?.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <HiLocationMarker className="h-6 w-6 mt-1" />
              <div>
                <h4 className="text-black font-semibold">USA</h4>
                <p>{companyDetails?.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyrights © 2025 Miraki Tech</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Terms and Conditions
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
