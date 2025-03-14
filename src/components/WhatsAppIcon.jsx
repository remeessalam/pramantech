import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../constant";
import { ReactComponent as WhatsApp } from "../assets/svgs/WhatsappIcon.svg";

const WhatsAppIcon = () => {
  return (
    <Link
      className="fixed group bottom-[1.5rem] hover:-translate-y-1 z-30 bg-white rounded-full right-[1.5rem] transition-all duration-200"
      to="https://api.whatsapp.com/send?phone=%2B916309711233&text=Hello%2C%20I%20want%20to%20inquire%20about%20project&app_absent=0"
      target="_blank"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsApp className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] fill-green-500 group-hover:fill-primary group-hover:scale-110 rounded-full shadow-transparent shadow-large group-hover:shadow-primary/50 transition-all duration-300" />
    </Link>
  );
};

export default WhatsAppIcon;
