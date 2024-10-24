import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-full overflow-hidden">
      <div>
        <div>
          <SideBar />
        </div>
        <div className="bg-neutral-200 h-screen w-5/6 absolute top-0 left-60">
          <div>
            <h1>
              <Header />
            </h1>
          </div>
          <div>{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
