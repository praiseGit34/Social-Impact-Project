import React from 'react';
import { FcBullish } from 'react-icons/fc';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/Navigation';
import { Link } from 'react-router-dom';

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

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
      <div>Lower Part</div>
    </div>
  );
};

export default SideBar;

const SideBarLink = ({ item }) => {
  return (
    <Link to={item.path} className={linkClass}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
};
