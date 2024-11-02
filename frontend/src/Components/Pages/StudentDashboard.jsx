import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Welcome to Your Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-700">Assignments</h2>
          <p className="text-gray-500">
            Check your upcoming assignments and due dates.
          </p>
          <Link to="/layout/student-assignments">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Assignments
            </button>
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-700">Timetable</h2>
          <p className="text-gray-500">View your daily class schedule.</p>
          <Link to="/layout/time-table">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Timetable
            </button>
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-700">Calendar</h2>
          <p className="text-gray-500">
            Keep track of important dates and events.
          </p>
          <Link to="/layout/calendar">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Calendar
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-8 bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-2xl font-semibold text-gray-700">
          Recent Notifications
        </h2>
        <ul className="list-disc pl-5 mt-2 text-gray-600">
          <li>New assignment posted in Math.</li>
          <li>Parent-Teacher meeting scheduled for next week.</li>
          <li>Field trip permission slips are due tomorrow.</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
