import React from 'react';
import TeacherImage from '../assets/teacher.png';
import PupilsImage from '../assets/pupils.png';

const About = () => {
  return (
    <div className="flex border-b-2 border-teal-400 mb-10 pb-7">
      <div className="flex ml-32">
        <img
          src={TeacherImage}
          className="w-52 rounded absolute left-40"
          alt=""
        />
        <div className="flex flex-col gap-6 justify-between items-center bg-gray-300 text-xl w-52 rounded ml-44 h-60 py-4">
          <h1 className="text-xl font-bold">
            Best <span className="text-teal-600">Certified </span>
            Teachers in the Country
          </h1>
          <p>
            <span className="text-5xl text-teal-700">100+</span> <br />
            &nbsp;Experts
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col ml-32 absolute right-96">
          <img src={PupilsImage} className="rounded w-60 mb-6" alt="" />
          <p className="text-black text-xl">
            Transforming Schools and making Learning Easier!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
