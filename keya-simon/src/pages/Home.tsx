import React from 'react';
import { Container, Typography } from '@material-tailwind/react';

const Home = () => {
  return (
    <Container>
      <Typography variant="h1" className="mt-16 mb-8 text-4xl font-bold">
        Welcome to Simon Keya's Blog
      </Typography>
      <Typography variant="lead" className="mb-16 text-gray-600">
        Explore my interests in Technology, Art, Psychology, Philosophy, Self Improvement, and Fun Facts.
      </Typography>
    </Container>
  );
};

export default Home;