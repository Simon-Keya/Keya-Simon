import React from 'react';
import { Container, Typography } from '@material-tailwind/react';

const AdminDashboard = () => {
  return (
    <Container>
      <Typography variant="h1" className="mt-16 mb-8 text-4xl font-bold">
        Admin Dashboard
      </Typography>
      <Typography variant="lead" className="mb-16 text-gray-600">
        Manage users, posts, and settings.
      </Typography>
    </Container>
  );
};

export default AdminDashboard;