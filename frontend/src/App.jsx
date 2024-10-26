import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import Login from './Components/Login/Login';
import Home from './Components/Home/index';
import Registration from './Components/Registration/Register';
import Logout from './Components/Logout/Logout';
import TeacherDashboard from './Components/Pages/TeacherDashboard';
import StudentDashboard from './Components/Pages/StudentDashboard';
import Layout from './Components/Pages/shared/Layout';
import Courses from './Components/Pages/Courses';
import Assignments from './Components/Pages/Assignments';
import Profile from './Components/Pages/Profile';
import StudentAssignments from './StudentAssignments';
import TimeTable from './Components/TimeTable';
import Calendar from './Components/Calendar';
import Examinations from './Components/Examinations';
import Results from './Components/Results';
import Layout from './Components/Pages/shared/Layout';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/teacher-dashboard/*" element={<TeacherDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-dashboard/courses" element={<Courses />} />
          <Route
            path="/teacher-dashboard/Assignments"
            element={<Assignments />}
          />
          <Route path="/teacher-dashboard/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/layout" element={<Layout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="student-assignments" element={<StudentAssignments />} />
            <Route path="time-table" element={<TimeTable />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="exams" element={<Examinations />} />
            <Route path="results" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
