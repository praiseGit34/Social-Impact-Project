import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Assignments from './Assignments';
import Courses from './Courses';
import Dashboard from './Dashboard';
import './TeacherDashboard.css';
import Profile from './Profile';

const TeacherDashboard = () => {
  return (
    <Container>
      <Row>
        <Col xs="3" className="sidebar">
          <h2>Teacher Dashboard</h2>
          <ul>
            <li>
              <NavLink to="/teacher-dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/teacher-dashboard/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/teacher-dashboard/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/teacher-dashboard/assignments">Assignments</NavLink>
            </li>
          </ul>
        </Col>
        <Col xs="9" className="content">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
          <h3>Welcome to the Teacher Dashboard</h3>
          <p>
            Here you can manage your classes, track student progress, and create
            assignments.
          </p>
          <p>
            Explore the sidebar to navigate between your profile, courses, and
            assignments.
          </p>
          <p>Stay organized and help your students succeed!</p>
        </Col>
      </Row>
    </Container>
  );
};
export default TeacherDashboard;
