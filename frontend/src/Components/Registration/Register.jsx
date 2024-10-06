import axios from 'axios';
import React, { useState } from 'react';
import { FormGroup, Input, Label, Button, Row, Col } from 'reactstrap';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from 'react-dropdown-select';

const initialUser = {
  username: '',
  email: '',
  password: '',
};

const Registration = () => {
  const [user, setUser] = useState(initialUser);

  const navigate = useNavigate();
  const signUp = async () => {
    const url = 'http://localhost:1337/api/auth/local/register';
    try {
      if (user.username && user.email && user.password);
      {
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
            <Label for="username" className="required-field">
              User Name
            </Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your full name"
            />
          </FormGroup>
          <FormGroup>
            <Label className="required-field">Email</Label>
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
            <Label className="required-field">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              placeholder="Enter Password"
            />
          </FormGroup>
          <FormGroup>
            <label>
              <span className="required-field">Role:</span>

              <select>
                <option value="chooseOption">Select Role</option>
                <option name="student" value={user.student}>
                  Student
                </option>
                <option name="teacher" value={user.teacher}>
                  Teacher
                </option>
              </select>
            </label>
            {/* <p>Selected option: {selectedOption}</p> */}
          </FormGroup>
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
