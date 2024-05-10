import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth/LoginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    // Implement your Google login logic here (e.g., redirect to Google login URL)
    console.log('Redirecting to Google login...');
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth? ... '; // Replace with your Google login URL
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      // Call login API here
      console.log('Logging in...');
      // Simulate API call with setTimeout
      setTimeout(() => {
        setLoading(false);
        // Handle successful login
        console.log('Login successful');
      }, 2000);
    } catch (error) {
      setError('Invalid email or password');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-md"> {/* Increased padding for larger area */}
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21a2 2 0 01-2 2H9a2 2 0 01-2-2v-7.5h10V21z" />
                </svg>
              )}
            </button>
          </div>
        </div>
          <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className="flex mt-4 items-center">
          <label className="flex items-center mr-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-700">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-blue-500 underline">
            Forgot password?
          </Link>
        </div>
        <div className="flex mt-4 items-center justify-end">
  <span className="text-gray-700 mr-2">or </span>
  <button onClick={handleGoogleLogin}>
    <img src="/assets/google-icon.svg" alt="Google login" className="h-6 w-6" />
  </button>
</div>

      </form>
    </div>
  );
};

export default LoginForm;

