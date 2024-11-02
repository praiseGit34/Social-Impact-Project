import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa6';
import { FcBullish } from 'react-icons/fc';
const Footer = () => {
  return (
    <div className="bg-gray-500 h-40 pt-5">
      <div>
        <div>
          <FcBullish fontSize={26} />
          <span className="text-2xl">
            Edulink <span className="text-red-800">Online.</span>
          </span>
        </div>
        <div className="flex justify-end gap-4 mr-10 mb-20">
          <BsTwitter />
          <SiLinkedin />
          <FaFacebookF />
          <BsYoutube />
        </div>
        <div className="flex gap-2 flex-row absolute left-96 px-10 py-10 text-xl">
          <span>0770-000-000</span>
          <span>www.edulink.com</span>
          <span>&copy;Copyright 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
