import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from '@material-tailwind/react';
import { useHistory } from 'react-router-dom';
import { useAuthDispatch, LOGIN } from '../store/actions/authActions';

const Login = () => {
  const dispatch = useAuthDispatch();
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: LOGIN, payload: { email, password } });
    history.push('/profile');
  };

  return (
    <Container>
      <Typography variant="h1" className="mt-16 mb-8 text-4xl font-bold">
        Login
      </Typography>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit" className="mt-4">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;