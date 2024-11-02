import React, { useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentMonth = new Date();
const month = currentMonth.getMonth();
const year = currentMonth.getFullYear();

const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};

// Sample events data
const events = {
  1: ['Math Test', 'Project Due'],
  5: ['Field Trip'],
  10: ['Science Fair'],
  15: ['Parent-Teacher Meeting'],
  20: ['Art Exhibition'],
  25: ['End of Month Review'],
};

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(
      <div key={`empty-${i}`} className="border border-gray-300 p-4"></div>
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <div
        key={day}
        className="border border-gray-300 p-4 hover:bg-blue-200 text-center cursor-pointer transition-colors duration-200"
        onClick={() => setSelectedDay(day)}
      >
        <span className="font-bold text-lg text-gray-800">{day}</span>
        {events[day] && (
          <div className="text-xs text-gray-600">
            {events[day].map((event, index) => (
              <div key={index}>{event}</div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Calendar - {currentMonth.toLocaleString('default', { month: 'long' })}{' '}
        {year}
      </h1>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map(day => (
          <div
            key={day}
            className="font-bold text-center border border-gray-300 p-2 bg-blue-200 text-gray-800"
          >
            {day}
          </div>
        ))}
        {days}
      </div>
      {selectedDay && (
        <div className="mt-4 text-center bg-gray-100 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-gray-800">
            Events on {selectedDay}
          </h2>
          {events[selectedDay] ? (
            <ul className="list-disc list-inside">
              {events[selectedDay].map((event, index) => (
                <li key={index} className="text-gray-700">
                  {event}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No events for this day.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
