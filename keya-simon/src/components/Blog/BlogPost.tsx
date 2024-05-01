import React from 'react';
import { Container, Typography, Card, CardHeader, CardBody } from '@material-tailwind/react';

const BlogPost = ({ title, content, author }: { title: string; content:string; author: string }) => {
  return (
    <Container>
      <Card className="w-full max-w-sm mb-16">
        <CardHeader color="blue-gray" className="text-center">
          <Typography variant="h5" color="white" className="mb-2">
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="opacity-70">
            {author}
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography>{content}</Typography>
        </CardBody>
      </Card>
    </Container>
  );
};

export default BlogPost;