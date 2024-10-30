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
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Assignments
      </h1>

      {/* Form to upload new assignment */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label
            style={{ display: 'block', marginBottom: '5px', color: '#555' }}
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            value={newAssignment.title}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              color: '#000',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            style={{ display: 'block', marginBottom: '5px', color: '#555' }}
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            value={newAssignment.description}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              color: '#000',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            style={{ display: 'block', marginBottom: '5px', color: '#555' }}
          >
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            value={newAssignment.dueDate}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              color: '#000',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            style={{ display: 'block', marginBottom: '5px', color: '#555' }}
          >
            Status
          </label>
          <input
            type="text"
            name="status"
            value={newAssignment.status}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              color: '#000',
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          Upload Assignment
        </button>
      </form>

      <table
        style={{
          minWidth: '100%',
          borderCollapse: 'collapse',
          border: '1px solid #ccc',
        }}
      >
        <thead style={{ backgroundColor: '#333', color: '#fff' }}>
          <tr>
            <th
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                color: '#fff',
              }}
            >
              Title
            </th>
            <th
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                color: '#fff',
              }}
            >
              Description
            </th>
            <th
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                color: '#fff',
              }}
            >
              Due Date
            </th>
            <th
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                color: '#fff',
              }}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {assignments.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                style={{ textAlign: 'center', padding: '10px', color: '#555' }}
              >
                No assignments available.
              </td>
            </tr>
          ) : (
            assignments.map(assignment => (
              <tr
                key={assignment.id}
                style={{ backgroundColor: '#f9f9f9', border: '1px solid #ccc' }}
              >
                <td
                  style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    color: '#000',
                  }}
                >
                  {assignment.title}
                </td>{' '}
                {/* Text color set to black */}
                <td
                  style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    color: '#000',
                  }}
                >
                  {assignment.description}
                </td>{' '}
                {/* Text color set to black */}
                <td
                  style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    color: '#000',
                  }}
                >
                  {new Date(
                    assignment.dueDate.seconds * 1000
                  ).toLocaleDateString()}
                </td>{' '}
                {/* Convert Firestore Timestamp to readable date */}
                <td
                  style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    color: '#000',
                  }}
                >
                  {assignment.status}
                </td>{' '}
                {/* Text color set to black */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Assignments;
