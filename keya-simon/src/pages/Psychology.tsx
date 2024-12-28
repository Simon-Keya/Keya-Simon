import { useEffect, useState } from 'react';

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const Psychology = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulated data for demonstration
    const psychologyPosts: Post[] = [
      {
        title: 'The Power of the Subconscious Mind',
        type: 'writing',
        content: 'The subconscious mind is a vast reservoir of thoughts, memories, and experiences that influence our behavior and emotions.',
        imageUrl: 'https://images.unsplash.com/photo-1545019929-e431e7d3018c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxnZWFyZXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Stress Management Techniques',
        type: 'writing',
        content: 'Stress is a normal part of life, but chronic stress can have negative impacts on our health and well-being. Learn about effective techniques to manage stress.',
        imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHxyZWFjdGlvbnxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Carl Jung',
        type: 'quote',
        quote: 'Knowing your own darkness is the best method for dealing with the darkness of other people.',
        imageUrl: 'https://images.unsplash.com/photo-1556741533-1930a0ebc8bc?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDQ1fHxhcHBlYWx8ZW58MHx8fHwxNjg2Nzc5Mjk5&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'The Happiness Hypothesis',
        type: 'writing',
        content: 'The Happiness Hypothesis explores the science of happiness and how to cultivate greater joy in your life.',
        imageUrl: 'https://images.unsplash.com/photo-1557202097-d3a8ac1bc68a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE4fHxhZGRpY3RpdmV8ZW58MHx8fHwxNjg2Nzc5Mjk5&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Cognitive Behavioral Therapy (CBT)',
        type: 'writing',
        content: 'CBT is a form of therapy that helps individuals identify and change negative thought patterns and behaviors that contribute to emotional distress.',
        imageUrl: 'https://images.unsplash.com/photo-1583240535940-18e02f007660?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGJlaGF2aW9yfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Abraham Maslow',
        type: 'quote',
        quote: 'One must first accept oneself in order to love oneself.',
        imageUrl: 'https://images.unsplash.com/photo-1543955247-4e29da2fc8f9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDMxfHxhYnJhaGFtIE1hc2xvd3xlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      },
      // Additional posts
      {
        title: 'Emotional Intelligence',
        type: 'writing',
        content: 'Emotional intelligence involves the ability to recognize, understand, and manage our own emotions and the emotions of others.',
        imageUrl: 'https://images.unsplash.com/photo-1600527251323-28ff774d3ca3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxlbW90aW9uYWx8ZW58MHx8fHwxNjg2Nzc5Mjk5&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Sigmund Freud',
        type: 'quote',
        quote: 'Being entirely honest with oneself is a good exercise.',
        imageUrl: 'https://images.unsplash.com/photo-1561597221-93e2207504c0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDQ3fHxnYWRnZXJ8ZW58MHx8fHwxNjg2Nzc5Mjk5&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'The Psychology of Motivation',
        type: 'writing',
        content: 'Motivation is the process that initiates, guides, and sustains goal-oriented behaviors. It’s a crucial aspect of personal and professional development.',
        imageUrl: 'https://images.unsplash.com/photo-1573497467802-3b79feeffd59?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI2fHxtb3RpdmF0aW9uJ3N8ZW58MHx8fHwxNjg2Nzc5Mjk5&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Attachment Theory',
        type: 'writing',
        content: 'Attachment theory explores how early relationships with caregivers can impact emotional development and later relationships in life.',
        imageUrl: 'https://images.unsplash.com/photo-1561007251-e55da006f4c9?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDQzfHxhZHRoY2hhbWVudGhlcmlnYXRpb258ZW58MHx8fHwxNjg2Nzc5Mjk5&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Behavioral Psychology',
        type: 'writing',
        content: 'Behavioral psychology focuses on the study of observable behaviors and the influence of the environment on those behaviors.',
        imageUrl: 'https://images.unsplash.com/photo-1587284674420-7a03d9e14aaf?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxyZWFjdGlvbnN8ZW58MHx8fHwxNjg2Nzc5Mjk5&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Mindfulness and Meditation',
        type: 'writing',
        content: 'Mindfulness and meditation are practices that help reduce stress, increase self-awareness, and enhance emotional regulation.',
        imageUrl: 'https://images.unsplash.com/photo-1569182314-e14534f22c1f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDMyfHxtb3RpdmF0aW9ufGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Neuroplasticity',
        type: 'writing',
        content: 'Neuroplasticity refers to the brain’s ability to reorganize itself by forming new neural connections throughout life.',
        imageUrl: 'https://images.unsplash.com/photo-1520902851339-fdf8ed758d7b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDczfHxnZXBhcnRpY3xlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Social Psychology',
        type: 'writing',
        content: 'Social psychology is the scientific study of how people’s thoughts, feelings, and behaviors are influenced by the presence of others.',
        imageUrl: 'https://images.unsplash.com/photo-1506331514102-19b7d9fe07ff?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDkwfHxyZWFjdGlvbnM5ZW58MHx8fHwxNjg2Nzc5Mjk5&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Viktor Frankl',
        type: 'quote',
        quote: 'When we are no longer able to change a situation, we are challenged to change ourselves.',
        imageUrl: 'https://images.unsplash.com/photo-1563309027-cfc6a206975b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDk4fHxsZWFybmluZ3xlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
      },
    ];

    setPosts(psychologyPosts); // Use simulated data
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Psychology Category</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="max-w-4xl mx-auto p-6 border border-gray-200 rounded-lg shadow-lg">
            {post.type === 'writing' && (
              <>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="mb-4 w-full h-72 object-cover rounded-lg" />}
                <p className="text-lg">{post.content}</p>
              </>
            )}
            {post.type === 'quote' && (
              <>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="mb-4 w-full h-72 object-cover rounded-lg" />}
                <blockquote className="italic text-xl mt-4">“{post.quote}”</blockquote>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Psychology;
