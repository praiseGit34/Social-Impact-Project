import React from 'react';

function Courses() {
  const coursesData = [
    {
      title: 'Mathematics',
      description: 'Explore the fundamentals of numbers, shapes, and patterns.',
      link: 'https://www.khanacademy.org/math',
    },
    {
      title: 'Science',
      description: 'Dive into the systematic study of the physical and natural world.',
      link: 'https://www.nationalgeographic.org/education/',
    },
    {
      title: 'English',
      description: 'Enhance your communication skills in this global language.',
      link: 'https://learnenglish.britishcouncil.org/',
    },
    {
      title: 'Social Studies',
      description: 'Understand societies and their relationships through various perspectives.',
      link: 'https://www.pbslearningmedia.org/subjects/social-studies/',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Courses You Can Teach</h1>
      <ul className="space-y-4">
        {coursesData.map((course, index) => (
          <li key={index}>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
              <p className="text-gray-700">{course.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
