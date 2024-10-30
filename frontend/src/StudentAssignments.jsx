import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  // Fetch assignments from Firestore
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'assignments'));
        const assignmentList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAssignments(assignmentList);
      } catch (error) {
        console.error('Error fetching assignments: ', error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Student Assignments
      </h1>

      {/* Display assignments */}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-blue-400 text-white">
          <tr>
            <th className="border border-gray-300 p-4">Title</th>
            <th className="border border-gray-300 p-4">Description</th>
            <th className="border border-gray-300 p-4">Due Date</th>
            <th className="border border-gray-300 p-4">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {assignments.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No assignments available.
              </td>
            </tr>
          ) : (
            assignments.map(assignment => (
              <tr key={assignment.id} className="hover:bg-blue-100">
                <td className="border border-gray-300 p-4">
                  {assignment.title}
                </td>
                <td className="border border-gray-300 p-4">
                  {assignment.description}
                </td>
                <td className="border border-gray-300 p-4">
                  {new Date(
                    assignment.dueDate.seconds * 1000
                  ).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 p-4">
                  {assignment.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentAssignments;
