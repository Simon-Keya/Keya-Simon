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

// Dummy posts for testing with real image URLs
export const Posts: PostData[] = [
  {
    type: 'picture',
    title: 'Beautiful Sunset',
    imageUrl: 'https://www.w3schools.com/w3images/sunset.jpg',
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
  {
    type: 'picture',
    title: 'Mountain Adventure',
    imageUrl: 'https://www.w3schools.com/w3images/mountains.jpg',
    date: '2024-06-01',
    link: 'https://example.com/mountain-adventure',
    likes: 25,
    isLiked: false,
  },
  {
    type: 'quote',
    title: 'Inspirational Thought',
    author: 'Albert Einstein',
    quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    date: '2024-06-05',
    likes: 50,
    isLiked: true,
  },
  {
    type: 'picture',
    title: 'Cityscape at Night',
    imageUrl: 'https://www.w3schools.com/w3images/city.jpg',
    date: '2024-07-12',
    link: 'https://example.com/cityscape-night',
    likes: 10,
    isLiked: false,
  },
  {
    type: 'quote',
    title: 'Motivation Quote',
    author: 'Zig Ziglar',
    quote: 'You don’t have to be great to start, but you have to start to be great.',
    date: '2024-07-14',
    likes: 35,
    isLiked: true,
  },
  {
    type: 'picture',
    title: 'Beach Vibes',
    imageUrl: 'https://www.w3schools.com/w3images/beach.jpg',
    date: '2024-08-01',
    link: 'https://example.com/beach-vibes',
    likes: 40,
    isLiked: false,
  },
  {
    type: 'quote',
    title: 'Success Quote',
    author: 'Winston Churchill',
    quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    date: '2024-08-10',
    likes: 60,
    isLiked: true,
  },
  {
    type: 'picture',
    title: 'Spring Flowers',
    imageUrl: 'https://www.w3schools.com/w3images/flowers.jpg',
    date: '2024-08-25',
    link: 'https://example.com/spring-flowers',
    likes: 30,
    isLiked: true,
  },
  {
    type: 'quote',
    title: 'Happiness Quote',
    author: 'Dalai Lama',
    quote: 'Happiness is not something ready-made. It comes from your own actions.',
    date: '2024-09-01',
    likes: 80,
    isLiked: false,
  },
  {
    type: 'picture',
    title: 'Snowy Mountains',
    imageUrl: 'https://www.w3schools.com/w3images/snow.jpg',
    date: '2024-09-10',
    link: 'https://example.com/snowy-mountains',
    likes: 18,
    isLiked: false,
  },
  {
    type: 'quote',
    title: 'Leadership Quote',
    author: 'John C. Maxwell',
    quote: 'A leader is one who knows the way, goes the way, and shows the way.',
    date: '2024-09-15',
    likes: 55,
    isLiked: true,
  },
  {
    type: 'picture',
    title: 'Autumn Leaves',
    imageUrl: 'https://www.w3schools.com/w3images/autumn.jpg',
    date: '2024-09-20',
    link: 'https://example.com/autumn-leaves',
    likes: 12,
    isLiked: false,
  },
  {
    type: 'quote',
    title: 'Perseverance Quote',
    author: 'Harriet Beecher Stowe',
    quote: 'Never give up, for that is just the place and time that the tide will turn.',
    date: '2024-09-25',
    likes: 70,
    isLiked: true,
  },
  {
    type: 'picture',
    title: 'Ocean Waves',
    imageUrl: 'https://www.w3schools.com/w3images/ocean.jpg',
    date: '2024-10-01',
    link: 'https://example.com/ocean-waves',
    likes: 90,
    isLiked: false,
  },
  {
    type: 'quote',
    title: 'Confidence Quote',
    author: 'Ralph Waldo Emerson',
    quote: 'Self-trust is the first secret of success.',
    date: '2024-10-05',
    likes: 100,
    isLiked: true,
  },
];

export default Post;
