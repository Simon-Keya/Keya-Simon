import React from 'react';
import { Container, Typography } from '@material-tailwind/react';
import { useAuthState } from '../store/reducers/authReducer';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn } = useAuthState();
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');
  };

  const handleRegisterClick = () => {
    history.push('/register');
  };

  const handleLogoutClick = () => {
    // Implement logout logic here.
  };

  return (
    <Container className="bg-gray-200 text-gray-800 py-4">
      <div className="flex justify-between items-center">
        <Typography variant="h4" className="cursor-pointer" onClick={() => history.push('/')}>
          Simon Keya's Blog
        </Typography>
        <div>
          {!isLoggedIn && (
            <>
              <button
                className="mr-4"
                onClick={handleLoginClick}
              >
                Login
              </button>
              <button onClick={handleRegisterClick}>Register</button>
            </>
          )}
          {isLoggedIn && (
            <button onClick={handleLogoutClick}>Logout</button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;