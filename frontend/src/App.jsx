import { Container } from 'reactstrap';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration/Register';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
