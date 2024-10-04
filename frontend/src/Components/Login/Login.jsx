import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FormGroup, Input, Label, Button, Row, Col } from 'reactstrap';

const initialUser = { email: '', password: '' };
const Login = () => {
  const handleChange = ({ target }) => {
    //Make input fields accept typing
    const { name, value } = target;
    setUser(currentUser => ({
      ...currentUser,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    //Login button should communicate with the server
    const url = 'http://localhost:1337/api/auth/local';
    try {
      if (user.email && user.password) {
        const res = await axios.post(url, user);
        console.log(res);
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  const [user, setUser] = useState(initialUser);
  return (
    <Row className="login">
      <Col className="login-form" sm="12" md={{ size: 4, offset: 4 }}>
        <h2>Login:</h2>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </FormGroup>
        <Button color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Col>
    </Row>
  );
};

export default Login;
