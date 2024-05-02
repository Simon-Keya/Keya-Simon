import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import LoginForm from '../components/Auth/LoginForm';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mt-8 mb-4">Login</h1>
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
