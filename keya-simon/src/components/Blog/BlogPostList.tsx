import React from 'react';
import { Container, Typography } from '@material-tailwind/react';
import { BlogPost as BlogPostType } from '../store/types';
import { useBlogDispatch, LOAD_POSTS } from '../store/actions/blogActions';
import BlogPost from './BlogPost';

const BlogPostList = () => {
  const dispatch = useBlogDispatch();
  const [posts, setPosts] = React.useState<BlogPostType[]>([]);

  React.useEffect(() => {
    dispatch({ type: LOAD_POSTS });
  }, [dispatch]);

  React.useEffect(() => {
    const postsFromStore = localStorage.getItem('posts');
    if (postsFromStore) {
      setPosts(JSON.parse(postsFromStore));
    }
  }, []);

  return (
    <Container>
      <Typography variant="h1" className="mt-16 mb-8 text-4xl font-bold">
        Blog Posts
      </Typography>
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} content={post.content} author={post.author} />
      ))}
    </Container>
  );
};

export default BlogPostList;