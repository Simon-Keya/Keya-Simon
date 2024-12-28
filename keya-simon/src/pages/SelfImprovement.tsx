import { useEffect, useState } from 'react';

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const SelfImprovement = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulated data for demonstration with 10 additional posts
    const selfImprovementPosts: Post[] = [
      // 1st batch of posts (existing)
      {
        title: 'The Power of Habit',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'The 7 Habits of Highly Effective People',
        type: 'writing',
        content: 'The 7 Habits of Highly Effective People is a self-help book written by Stephen Covey. It has sold more than 25 million copies in 40 languages since first publication in 1989.',
      },
      {
        title: 'Confucius',
        type: 'quote',
        quote: 'It does not matter how slowly you go as long as you do not stop.',
      },
      {
        title: 'The Miracle Morning',
        type: 'photo',
        imageUrl: 'https://via.placeholder.com/400',
      },
      {
        title: 'Mindset: The New Psychology of Success',
        type: 'writing',
        content: 'Mindset: The New Psychology of Success is a book by Carol S. Dweck. In the book, Dweck argues that the view you adopt for yourself profoundly affects the way you lead your life.',
      },
      {
        title: 'Jim Rohn',
        type: 'quote',
        quote: 'Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals.',
      },

      // 2nd batch of new posts (10 additional)
      {
        title: 'Atomic Habits',
        type: 'writing',
        content: 'Atomic Habits by James Clear provides practical strategies for building good habits and breaking bad ones. The book focuses on making small changes that lead to significant personal growth.',
      },
      {
        title: 'The Subtle Art of Not Giving a F*ck',
        type: 'writing',
        content: 'Mark Manson’s book challenges conventional self-help advice by focusing on what truly matters in life and the importance of accepting our limitations.',
      },
      {
        title: 'Oprah Winfrey',
        type: 'quote',
        quote: 'Doing the best at this moment puts you in the best place for the next moment.',
      },
      {
        title: 'Dare to Lead',
        type: 'writing',
        content: 'Dare to Lead by Brené Brown teaches how vulnerability, courage, and empathy are crucial components of leadership. Brown explores how leaders can create environments of trust and growth.',
      },
      {
        title: 'You Are a Badass',
        type: 'writing',
        content: 'Jen Sincero’s You Are a Badass is a motivational book that encourages readers to step into their personal power and achieve their goals through self-belief and action.',
      },
      {
        title: 'Maya Angelou',
        type: 'quote',
        quote: 'You may not control all the events that happen to you, but you can decide not to be reduced by them.',
      },
      {
        title: 'Grit: The Power of Passion and Perseverance',
        type: 'writing',
        content: 'Angela Duckworth’s Grit focuses on the power of perseverance and passion in achieving long-term goals. The book emphasizes the importance of developing grit for personal and professional success.',
      },
      {
        title: 'The Four Agreements',
        type: 'writing',
        content: 'Don Miguel Ruiz’s The Four Agreements is a guide to personal freedom, focusing on how to break free from societal and self-imposed limitations by practicing love, respect, and integrity.',
      },
      {
        title: 'Nelson Mandela',
        type: 'quote',
        quote: 'It always seems impossible until it’s done.',
      },
      {
        title: 'How to Win Friends and Influence People',
        type: 'writing',
        content: 'Dale Carnegie’s classic book offers timeless advice on building strong relationships, networking, and becoming a more persuasive and influential communicator.',
      },
      {
        title: 'Shonda Rhimes',
        type: 'quote',
        quote: 'You can waste your lives drawing lines. Or you can live your life crossing them.',
      },
    ];

    setPosts(selfImprovementPosts);
  }, []);

  return (
    <div className="self-improvement bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Self Improvement</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
            {post.type === 'writing' && <p className="text-gray-700 mb-4">{post.content}</p>}
            {post.type === 'quote' && (
              <blockquote className="italic text-xl text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
                <p>{post.quote}</p>
              </blockquote>
            )}
            {post.type === 'photo' && <img className="w-full rounded-lg" src={post.imageUrl} alt={post.title} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfImprovement;
