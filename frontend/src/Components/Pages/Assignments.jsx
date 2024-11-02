import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Not Started',
  });

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

  // Handle form input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setNewAssignment({ ...newAssignment, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const assignmentWithTimestamp = {
        ...newAssignment,
        dueDate: Timestamp.fromDate(new Date(newAssignment.dueDate)),
      };

      await addDoc(collection(db, 'assignments'), assignmentWithTimestamp);
      setNewAssignment({
        title: '',
        description: '',
        dueDate: '',
        status: 'Not Started',
      });
      alert('Assignment uploaded successfully!');
    } catch (error) {
      console.error('Error uploading assignment: ', error);
    }
  };

  return (
    <div className="flex">
      {/* Form to upload new assignment */}
      <div className="w-1/3 p-4">
        <h1 className="text-2xl font-bold mb-4">Upload Assignment</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newAssignment.title}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description</label>
            <input
              type="text"
              name="description"
              value={newAssignment.description}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={newAssignment.dueDate}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Status</label>
            <input
              type="text"
              name="status"
              value={newAssignment.status}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded">
            Upload Assignment
          </button>
        </form>
      </div>

      {/* Table to display assignments */}
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-4">Assignments</h2>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Due Date</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No assignments available.
                </td>
              </tr>
            ) : (
              assignments.map(assignment => (
                <tr key={assignment.id} className="bg-white">
                  <td className="border border-gray-300 p-2">
                    {assignment.title}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {assignment.description}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {new Date(
                      assignment.dueDate.seconds * 1000
                    ).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {assignment.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Assignments;
