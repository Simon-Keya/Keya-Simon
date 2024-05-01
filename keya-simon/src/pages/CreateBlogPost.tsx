import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from '@material-tailwind/react';
import { useHistory } from 'react-router-dom';
import { useBlogDispatch, CREATE_POST } from '../store/actions/blogActions';

const CreateBlogPost = () => {
  const dispatch = useBlogDispatch();
  const history = useHistory();
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: CREATE_POST, payload: { title, content } });
    history.push('/');
  };

  return (
    <Container>
      <Typography variant="h1" className="mt-16 mb-8 text-4xl font-bold">
        Create a New Blog Post
      </Typography><Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">Content</Label>
          <Input
            id="content"
            type="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit" className="mt-4">
          Create Post
        </Button>
      </Form>
    </Container>
  );
};

export default CreateBlogPost;