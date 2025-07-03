import React from "react";
import { allServices, companyDetails, logoImg, routes } from "../../constant";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoMail } from "react-icons/io5";

const WebsiteFooter = () => {
  const links = routes.filter((option) => option.path !== "/blogs/:id");
  return (
    <footer className="bg-primary/40 text-gray-900 py-12 px-6">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6">
            <NavLink
              aria-label="Home"
              smooth={true}
              to="/"
              className="cursor-pointer"
            >
              <img
                width="200"
                height="50"
                src={logoImg}
                className="w-[12rem] object-contain"
                alt="logo"
              />
            </NavLink>
            <p className="text-lg">
              Driving Innovation, Redefining Possibilities, Powering Success!
            </p>
            <div className="space-y-4">
              <Link
                to={`mailto:${companyDetails?.email2}`}
                className="flex items-center gap-2"
              >
                <IoMail className="h-5 w-5" />
                {companyDetails.email2}
              </Link>
              <div className="flex gap-4">
                {/* <Link to="#" className="hover:text-white">
                  <FaFacebookF />
                </Link> */}
                <Link
                  to={companyDetails?.instagram}
                  className="hover:text-white"
                >
                  <FaInstagram />
                </Link>
                {/* <Link to="#" className="hover:text-white">
                  <FaYoutube />
                </Link> */}
                <Link
                  to={companyDetails?.linkedin}
                  className="hover:text-white"
                >
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
              <div className="space-y-3">
                <h3 className="text-black text-xl font-semibold mb-6">
                  Contact
                </h3>
                <p>
                  <b>Phone</b> : {companyDetails?.phone}
                </p>
                <p>
                  <b>Location</b> : {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-center items-center gap-4">
          <p>Copyrights © 2025 Praman Tech</p>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
