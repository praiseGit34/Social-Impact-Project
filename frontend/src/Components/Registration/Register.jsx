import axios from 'axios';
import { useState } from 'react';
import { FormGroup, Input, Label, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialUser = { username: '', email: '', password: '', position: '' };

const Registration = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const signUp = async () => {
    const url = 'http://localhost:1337/api/auth/local/register';
    try {
      if (user.username && user.email && user.password && user.position) {
        const res = await axios.post(url, user);
        if (res && user.position === 'student') {
          setUser(initialUser);
          navigate('/student-dashboard');
        } else {
          navigate('/teacher-dashboard');
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleUserChange = ({ target }) => {
    // Allow typing in the input boxes
    const { name, value } = target;
    setUser(currentUser => ({
      ...currentUser,
      [name]: value,
    }));
  };
  return (
    <Row>
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <div className=" flex  flex-col m-auto mt-10 rounded gap-4 bg-neutral-200 text-black w-80 items-center">
          <h2 className="mt-5 text-2xl border-gray-600 border-b-2 py-2">
            Sign Up
          </h2>
          <FormGroup>
            <Label for="username">User Name</Label>
            <Input
              type="type"
              id="password"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your full name"
              required
              className="block px-3 py-1 rounded mt-1"
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Enter Email"
              required
              className="block px-3 py-1 rounded mt-1"
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              placeholder="Enter Password"
              required
              className="block px-3 py-1 rounded mt-1"
            />
          </FormGroup>

          {/* here */}

          <FormGroup>
            <Label>Role</Label>
            <select
              name="position"
              onChange={handleUserChange}
              className="py-1 px-2 text-neutral-500 w-52"
            >
              <option value="">Choose Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </FormGroup>

          {/* here ends */}

          <Button
            color="primary"
            onClick={signUp}
            className="bg-blue-900 text-white w-20 py-1"
          >
            Sign Up
          </Button>
          <h6 className="flex flex-wrap w-60 mb-5">
            Already have an account? Click
            <Link to="/login" className="signup-login">
              Here{' '}
            </Link>
            to login
          </h6>
        </div>
      </Col>
    </Row>
  );
};

export default Registration;
