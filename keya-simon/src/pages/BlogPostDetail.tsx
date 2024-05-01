import React from 'react';
import { Container, Typography, Card, CardHeader, CardBody } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import { useBlogDispatch, LOAD_POST_DETAIL } from '../store/actions/blogActions';

const BlogPostDetail = () => {
  const dispatch = useBlogDispatch();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    dispatch({ type: LOAD_POST_DETAIL, payload: id });
  }, [dispatch, id]);

  return (
    <Container>
      <Typography variant="h1" className="mt-16 mb-8 text-4xl font-bold">
        Blog Post Detail
      </Typography>
      <Card className="w-full max-w-sm mb-16">
        <CardHeader color="blue-gray" className="text-center">
          <Typography variant="h5" color="white" className="mb-2">
            Title of the Post
          </Typography>
          <Typography variant="lead" color="white" className="opacity-70">
            Author Name
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography>
            {/* Replace this with the actual blog post content from the state. */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, velit eget euismod euismod,
            nisi lacus venenatis nisl, vel aliquet nunc nisi et velit.
          </Typography>
        </CardBody>
      </Card>
    </Container>
  );
};

export default BlogPostDetail;