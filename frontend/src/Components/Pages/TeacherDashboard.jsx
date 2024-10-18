import { NavLink, Routes, Route } from 'react-router-dom';
import Assignments from './Assignments';
import Courses from './Courses';
import Dashboard from './Dashboard';
import Profile from './Profile';

const TeacherDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 h-screen p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Teacher Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive ? 'bg-blue-600 p-2 rounded' : 'block p-2 hover:bg-blue-500'
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="courses"
              className={({ isActive }) =>
                isActive ? 'bg-blue-600 p-2 rounded' : 'block p-2 hover:bg-blue-500'
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="assignments"
              className={({ isActive }) =>
                isActive ? 'bg-blue-600 p-2 rounded' : 'block p-2 hover:bg-blue-500'
              }
            >
              Assignments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? 'bg-blue-600 p-2 rounded' : 'block p-2 hover:bg-blue-500'
              }
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Welcome to the Teacher Dashboard!</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Here you can manage your classes, assignments, and students effectively.
        </p>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
        </Routes>
      </main>
    </div>
  );
};

export default TeacherDashboard;
