import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { FcBullish } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const menuOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'About',
      icon: <InfoIcon />,
    },
    {
      text: 'Contact',
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="flex font-bold gap-2 mt-3 absolute ml-3">
        <FcBullish fontSize={26} />
        <span className="text-2xl">
          Edulink <span className="text-red-800">Online.</span>
        </span>
      </div>
      <div className="flex gap-3 justify-end mr-52 items-center font-bold mt-4 absolute right-12">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Subjects</a>
      </div>
      <div className="flex gap-3 justify-end mr-9 absolute mt-3 right-2">
        <Link to={'/Register'}>
          <button className="bg-teal-900 px-4 py-1 text-white w-24">
            Sign Up
          </button>
        </Link>
        <Link to={'/Login'}>
          <button className="bg-teal-900 px-4 py-1 text-white w-24">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
