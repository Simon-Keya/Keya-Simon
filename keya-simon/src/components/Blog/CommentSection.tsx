import React from 'react';
import { Container, Typography, Textarea } from '@material-tailwind/react';

const CommentSection = () => {
  return (
    <Container>
      <Typography variant="h1" className="mt-16 mb-8 text-4xl font-bold">
        Comments
      </Typography>
      <Textarea label="Add a comment" />
    </Container>
  );
};

export default CommentSection;