import React from 'react';
import { Container, Typography } from '@material-tailwind/react';

const Sidebar = () => {
  return (
    <Container className="bg-gray-200 text-gray-800 py-8">
      <Typography variant="h5" className="mb-4">
        Categories
      </Typography>
      <ul>
        <li>Technology</li>
        <li>Art</li>
        <li>Psychology</li>
        <li>Philosophy</li>
        <li>Self Improvement</li>
        <li>Fun Facts</li>
      </ul>
    </Container>
  );
};

export default Sidebar;