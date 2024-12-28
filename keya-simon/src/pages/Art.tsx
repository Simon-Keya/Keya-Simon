import { useEffect, useState } from 'react';

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const Art = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulated data for demonstration
    const artPosts: Post[] = [
      {
        title: 'The Starry Night',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'Artistic Expression',
        type: 'writing',
        content: 'Art is the expression of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.',
      },
      {
        title: 'Pablo Picasso',
        type: 'quote',
        quote: 'Art washes away from the soul the dust of everyday life.',
      },
      {
        title: 'The Persistence of Memory',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'Artistic Creativity',
        type: 'writing',
        content: 'Creativity is intelligence having fun.',
      },
      {
        title: 'Vincent van Gogh',
        type: 'quote',
        quote: 'I am seeking, I am striving, I am in it with all my heart.',
      },
      // Additional posts
      {
        title: 'Mona Lisa',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'The Beauty of Nature',
        type: 'writing',
        content: 'Art allows us to see the world through the eyes of others and understand nature and life more deeply.',
      },
      {
        title: 'Leonardo da Vinci',
        type: 'quote',
        quote: 'Art is the queen of all sciences communicating knowledge to all the generations of the world.',
      },
      {
        title: 'The Creation of Adam',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'Imagination and Art',
        type: 'writing',
        content: 'The power of imagination makes us infinite, and art is the perfect outlet for our imagination.',
      },
      {
        title: 'Frida Kahlo',
        type: 'quote',
        quote: 'I paint myself because I am so often alone and because I am the subject I know best.',
      },
      {
        title: 'Water Lilies',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'Art of War',
        type: 'writing',
        content: 'The greatest victory is that which requires no battle, and art, in its highest form, is a peaceful expression of struggle.',
      },
      {
        title: 'Claude Monet',
        type: 'quote',
        quote: 'I would like to paint the way a bird sings.',
      },
      {
        title: 'Starry Night Over the Rhône',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'The Art of Perception',
        type: 'writing',
        content: 'Art is not what you see, but what you make others see.',
      },
      {
        title: 'Henri Matisse',
        type: 'quote',
        quote: 'Creativity takes courage.',
      },
    ];

    setPosts(artPosts);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Art</h1>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            {post.type === 'writing' && <p className="mt-4 text-gray-700">{post.content}</p>}
            {post.type === 'quote' && (
              <blockquote className="mt-4 text-xl italic text-gray-600 border-l-4 border-gray-400 pl-4">{post.quote}</blockquote>
            )}
            {post.type === 'photo' && <img className="mt-4 rounded-md" src={post.imageUrl} alt={post.title} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Art;
