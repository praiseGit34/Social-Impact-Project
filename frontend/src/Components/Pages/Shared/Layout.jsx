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
        <div className="bg-neutral-200 h-screen w-screen absolute top-0 left-60">
          <div>
            <h1>header</h1>
          </div>
          <div>{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
