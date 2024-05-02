import React from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch REGISTER action here
    history.push('/login');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-16 mb-8">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
