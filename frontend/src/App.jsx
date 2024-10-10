import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import Login from './Components/Login/Login';
import Home from './Components/Home/index';
import Registration from './Components/Registration/Register';
import Logout from './Components/Logout/Logout';
import TeacherDashboard from './Components/Pages/TeacherDashboard';
import StudentDashboard from './Components/Pages/StudentDashboard';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
