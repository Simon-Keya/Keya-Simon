import React from 'react';
import { Container, Typography } from '@material-tailwind/react';

const Footer = () => {
  return (
    <Container className="bg-gray-800 text-white py-8">
      <Typography variant="h5" className="text-center">
        &copy; {new Date().getFullYear()} Simon Keya's Blog
      </Typography>
    </Container>
  );
};

export default Footer;