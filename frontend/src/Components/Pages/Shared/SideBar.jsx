// src/Components/SideBar.js
import classNames from 'classnames';
import React from 'react';
import { FcBullish } from 'react-icons/fc';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/Navigation';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

const SideBar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col h-screen">
      <div className="flex gap-2 items-center py-1 px-4 mb-10">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">Edulink</span>
      </div>
      <div className="flex-1 text-white">
        {DASHBOARD_SIDEBAR_LINKS.map(item => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 p-2 border-t border-neutral-700">
        <div className={classNames('text-red-700 cursor-pointer', linkClass)}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          <Link to={'/'}>Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const SideBarLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
        linkClass
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
};
