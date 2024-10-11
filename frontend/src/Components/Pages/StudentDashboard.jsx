import { NavLink, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Assignments from './Assignments';
import Courses from './Courses';
import Dashboard from './Dashboard';
import './TeacherDashboard.css';
import Profile from './Profile';

const StudentDashboard = () => {
  return (
    <Container>
      <Row>
        <Col xs="3" className="sidebar">
          <h2>Student Dashboard</h2>
          <ul>
            <li>
              <NavLink to="/student-dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/student-dashboard/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/student-dashboard/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/student-dashboard/assignments">Assignments</NavLink>
            </li>
            <li>
              <NavLink to="/Logout">Logout</NavLink>
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
          <h3>Welcome to the Student Dashboard</h3>
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
export default StudentDashboard;
