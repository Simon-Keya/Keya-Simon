import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from '@material-tailwind/react';
import { useHistory } from 'react-router-dom';
import { useAuthDispatch, REGISTER } from '../store/actions/authActions';

const Register = () => {
  const dispatch = useAuthDispatch();
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: REGISTER, payload: { name, email, password } });
    history.push('/login');
  };

  return (
    <Container>
      <Typography variant="h1" className="mt-16 mb-8 text-4xl font-bold">
        Register
      </Typography>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"value={email}
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
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;