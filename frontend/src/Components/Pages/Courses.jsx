import React, { useState } from 'react';
import './Courses.css'; 

function Courses() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    console.log('File to upload:', file);
    
  };

  const coursesData = [
    {
      title: 'Mathematics',
      description: 'Mathematics is the study of numbers, shapes, and patterns.',
    },
    {
      title: 'Science',
      description: 'Science is the systematic study of the physical and natural world.',
    },
    {
      title: 'English',
      description: 'English is a global language that plays a key role in communication.',
    },
    {
      title: 'Social Studies',
      description: 'Social Studies involves the study of societies and their relationships.',
    },
  ];

  return (
    <div className="courses-container">
      <h1>Courses</h1>
      <div className="course-grid">
        {coursesData.map((course, index) => (
          <div key={index} className="course">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <form onSubmit={handleUpload} className="upload-form">
              <input 
                type="file" 
                accept=".pdf, video/*" 
                onChange={handleFileChange} 
              />
              <button type="submit">Upload Notes</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
