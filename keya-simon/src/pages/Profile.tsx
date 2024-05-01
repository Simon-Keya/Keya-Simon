import React from 'react';
import { Container, Typography } from '@material-tailwind/react';

const Profile = () => {
  return (
    <Container>
      <Typography variant="h1" className="mt-16 mb-8 text-4xl font-bold">
        Welcome to Your Profile
      </Typography>
      <Typography variant="lead" className="mb-16 text-gray-600">
        Here you can view and manage your personal information and settings.
      </Typography>
    </Container>
  );
};

export default Profile;