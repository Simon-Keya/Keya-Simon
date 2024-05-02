// adminApi.ts

// Example data - replace with actual API calls

interface Post {
  id: number;
  title: string;
  content: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const posts: Post[] = [
  { id: 1, title: 'Post 1', content: 'Content of post 1' },
  { id: 2, title: 'Post 2', content: 'Content of post 2' },
  { id: 3, title: 'Post 3', content: 'Content of post 3' },
];

const users: User[] = [
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
  { id: 3, name: 'User 3', email: 'user3@example.com' },
];

export const getPosts = async (): Promise<Post[]> => {
  // Simulate API call delay with setTimeout
  return new Promise<Post[]>((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  });
};

export const getUsers = async (): Promise<User[]> => {
  // Simulate API call delay with setTimeout
  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export const deletePost = async (postId: number): Promise<void> => {
  // Simulate API call delay with setTimeout
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      const index = posts.findIndex((post) => post.id === postId);
      if (index !== -1) {
        posts.splice(index, 1);
      }
      resolve();
    }, 1000);
  });
};

export const deleteUser = async (userId: number): Promise<void> => {
  // Simulate API call delay with setTimeout
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      const index = users.findIndex((user) => user.id === userId);
      if (index !== -1) {
        users.splice(index, 1);
      }
      resolve();
    }, 1000);
  });
};
