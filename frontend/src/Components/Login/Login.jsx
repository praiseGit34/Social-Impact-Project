import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormGroup, Input, Label, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { storeUser } from '../../../helpers';

const initialUser = { email: '', password: '' };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
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
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success('Login successful', {
            hideProgressBar: true,
          });

          setUser(initialUser);
          navigate('/teacher-dashboard');
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <Row className="login">
      <Col className="login-form" sm="12" md={{ size: 4, offset: 4 }}>
        <h2>Login:</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            id="email"
            name="identifier"
            value={user.identifier || ''}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={user.password || ''}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </FormGroup>
        <Button color="primary" onClick={handleLogin}>
          Login
        </Button>
        <h6>
          Click{' '}
          <Link to="/register" className="signup-login">
            Here
          </Link>{' '}
          to Sign Up
        </h6>
      </Col>
    </Row>
  );
};

export default Login;
