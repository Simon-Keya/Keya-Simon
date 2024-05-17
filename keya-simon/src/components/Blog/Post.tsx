import React from 'react';

interface PostData {
  type: 'picture' | 'quote';
  title: string;
  imageUrl?: string;  // Optional for picture posts
  author?: string;    // Optional for quote posts
  quote?: string;     // Optional for quote posts
  date?: string;      // Optional date for any post type
  link?: string;      // Optional link to full content
  likes?: number;     // Optional number of likes
  isLiked?: boolean;  // Optional flag indicating if user has liked
}

const Post = ({ post }: { post: PostData }) => {
  const baseClass = 'border rounded px-4 py-3 mb-4';
  const getStyleForType = (type: PostData['type']) => {
    switch (type) {
      case 'picture':
        return `${baseClass} bg-gray-100`;
      case 'quote':
        return `${baseClass} border-gray-300`;
      default:
        return null;
    }
  };

  const getContentForType = (post: PostData) => {
    switch (post.type) {
      case 'picture':
        return (
          <>
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="w-full h-auto mb-2" />}
            {post.date && <p className="text-sm text-gray-500">{post.date}</p>}
            {post.link && (
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Read More
              </a>
            )}
            {displayLikeButton(post)}
          </>
        );
      case 'quote':
        return (
          <>
            <h3 className="text-lg font-semibold mb-2">Quote by {post.author}</h3>
            <p className="italic text-gray-700">"{post.quote}"</p>
            {post.date && <p className="text-sm text-gray-500">{post.date}</p>}
            {post.link && (
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Read More
              </a>
            )}
            {displayLikeButton(post)}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={getStyleForType(post.type) || undefined}>
      {getContentForType(post)}
    </div>
  );
};

// Helper function to conditionally render like button (optional)
const displayLikeButton = (post: PostData) => {
  if (!post.likes || !post.isLiked) return null; // No likes or not liked, don't render button

  return (
    <button onClick={() => handleLikeClick(post)}>
      {post.isLiked ? 'Unlike' : 'Like'} ({post.likes})
    </button>
  );
};

// Placeholder function for like handling (implement your like logic here)
const handleLikeClick = (post: PostData) => {
  console.log('Like clicked for post:', post);
  // Update post.isLiked based on user interaction and update UI
};

// Dummy posts for testing
export const Posts: PostData[] = [
  {
    type: 'picture',
    title: 'Beautiful Sunset',
    imageUrl: 'https://via.placeholder.com/400',
    date: '2024-05-15',
    link: 'https://example.com/sunset-post',
    likes: 20,
    isLiked: true,
  },
  {
    type: 'quote',
    title: 'Wisdom Quote',
    author: 'Anonymous',
    quote: 'Wisdom is the reward you get for a lifetime of listening when you would have preferred to talk.',
    date: '2024-05-16',
    likes: 15,
    isLiked: false,
  },
  // Add more dummy posts here
];

export default Post;