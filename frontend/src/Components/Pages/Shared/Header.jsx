import React from 'react';
import { HiOutlineBell, HiOutlineChat, HiOutlineSearch } from 'react-icons/hi';

const Header = () => {
  return (
    <div className="bg-white h-16 pl-4 flex justify-start items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none w-60 h-10 active:outline-none border border-gray-400 rounded-sm"
        />
      </div>
      <div className="flex gap-2 ml-auto mr-4   ">
        <HiOutlineChat fontSize={24} />
        <HiOutlineBell fontSize={24} />
      </div>
      <div
        className="h-10 w-10 text-white rounded-full bg-blue-700 bg-cover bg-no-repeat bg-center mr-8"
        style={{
          backgroundImage: 'url("https://source.unsplash.com/80x80?face")',
        }}
      >
        <span className="flex items-center justify-center">User</span>
      </div>
    </div>
  );
};

export default Header;
