import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <div>
        <div>
          <SideBar />
        </div>
        <div className="p-3">
          <div className="relative">header</div>
          <div>{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
