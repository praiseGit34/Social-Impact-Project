import { Container } from 'reactstrap';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Logout from './Components/Logout';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
