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
        if (res) {
          setUser(initialUser);
          navigate('/login');
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
    <Row className="register">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <FormGroup>
            <Label for="username">User Name</Label>
            <Input
              type="type"
              id="password"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your full name"
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
            />
          </FormGroup>

          {/* here */}

          <FormGroup>
            <Label>Role</Label>
            <select name="position" onChange={handleUserChange}>
              <option value="">Choose Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </FormGroup>

          {/* here ends */}

          <Button color="primary" onClick={signUp}>
            Sign Up
          </Button>
          <h6>
            Already have an account? Click <Link to="/login">Here</Link> to
            login
          </h6>
        </div>
      </Col>
    </Row>
  );
};

export default Registration;
