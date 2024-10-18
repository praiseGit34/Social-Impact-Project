import React from 'react';

const timetableData = [
  { day: 'Monday', periods: ['Math', 'Science', 'English', 'History', 'PE'] },
  { day: 'Tuesday', periods: ['Art', 'Math', 'Science', 'Computer Science', 'History'] },
  { day: 'Wednesday', periods: ['English', 'Math', 'Geography', 'Science', 'PE'] },
  { day: 'Thursday', periods: ['History', 'Math', 'English', 'Art', 'Music'] },
  { day: 'Friday', periods: ['Math', 'Science', 'History', 'PE', 'Computer Science'] },
];

const TimeTable = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Timetable</h1>
      <table className="min-w-full border-collapse border border-gray-300 mx-auto">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border border-gray-300 p-4">Day</th>
            <th className="border border-gray-300 p-4">Period 1</th>
            <th className="border border-gray-300 p-4">Period 2</th>
            <th className="border border-gray-300 p-4">Period 3</th>
            <th className="border border-gray-300 p-4">Period 4</th>
            <th className="border border-gray-300 p-4">Period 5</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {timetableData.map((row) => (
            <tr key={row.day} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-4 font-semibold">{row.day}</td>
              {row.periods.map((period, index) => (
                <td key={index} className="border border-gray-300 p-4 text-center">{period}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
