import { useEffect, useState } from 'react';

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const Philosophy = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulated data for demonstration
    const philosophyPosts: Post[] = [
      {
        title: 'The Allegory of the Cave',
        type: 'writing',
        content: "Plato's Allegory of the Cave is an allegory presented by the Greek philosopher Plato in his work Republic. It is one of the best-known passages in all of philosophy.",
        imageUrl: 'https://images.unsplash.com/photo-1521747116042-bd0c4f2c6e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MjN8fHBob3RvfGVufDB8fHx8fDE2NzgxMjg4NzY&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Socrates',
        type: 'quote',
        quote: 'The unexamined life is not worth living.',
      },
      {
        title: 'Existentialism',
        type: 'writing',
        content: 'Existentialism is a form of philosophy that emphasizes the existence of the individual person as a free and self-determining agent.',
        imageUrl: 'https://images.unsplash.com/photo-1574158623685-3c7c95b98a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MzN8fGV4aXN0ZW50aWFsaXNtfGVufDB8fHx8fDE2NzgxMjg4NzY&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Confucius',
        type: 'quote',
        quote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
      },
      {
        title: 'Stoicism',
        type: 'writing',
        content: 'Stoicism is a school of Hellenistic philosophy founded by Zeno of Citium in Athens in the early 3rd century BC. It is a philosophy of personal ethics focused on the development of virtue and the estimation of what is within our control.',
        imageUrl: 'https://images.unsplash.com/photo-1509099351564-3f6029fef6ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mjl8fHN0b2ljaXNtJTIwY29tcGxleHxlbnwwfHx8fDE2NzgxMjg4NzY&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Aristotle',
        type: 'quote',
        quote: 'The more you know, the more you realize you don’t know.',
      },
      {
        title: 'The Philosophy of Language',
        type: 'writing',
        content: 'The philosophy of language explores the nature of language, its relationship to reality, and the ways in which meaning is conveyed.',
        imageUrl: 'https://images.unsplash.com/photo-1574169333025-b6ba4b84cdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mzl8fHBob3RvZ3JhcGh5fGVufDB8fHx8fDE2NzgxMjg4NzY&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Immanuel Kant',
        type: 'quote',
        quote: 'Science is organized knowledge. Wisdom is organized life.',
      },
      {
        title: 'Utilitarianism',
        type: 'writing',
        content: 'Utilitarianism is a moral theory that advocates actions that promote the greatest happiness for the greatest number.',
        imageUrl: 'https://images.unsplash.com/photo-1605118308723-d6600839b72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8NHx8fHV0aWxpdGFyaXNtfGVufDB8fHx8fDE2NzgxMjg4NzY&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'René Descartes',
        type: 'quote',
        quote: 'I think, therefore I am.',
      },
      {
        title: 'The Metaphysics of Morals',
        type: 'writing',
        content: 'The Metaphysics of Morals is a work by Immanuel Kant that addresses the concept of morality through a lens of rational philosophy.',
        imageUrl: 'https://images.unsplash.com/photo-1565161414-fb67d3d545cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8fG1vcmFsaXR5fGVufDB8fHx8fDE2NzgxMjg4NzY&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Jean-Paul Sartre',
        type: 'quote',
        quote: 'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.',
      },
      {
        title: 'Ethics and Morality',
        type: 'writing',
        content: 'Ethics is the branch of philosophy that involves systematizing, defending, and recommending concepts of right and wrong behavior.',
        imageUrl: 'https://images.unsplash.com/photo-1600302753739-cf42d332a0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8fGV0aGljYWwlMjBhbmQlMjBtb3JhbGl0eXxlbnwwfHx8fDE2NzgxMjg4NzY&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Thomas Hobbes',
        type: 'quote',
        quote: 'The condition of man... is a condition of war of everyone against everyone.',
      },
      {
        title: 'The Social Contract',
        type: 'writing',
        content: 'The Social Contract, by Jean-Jacques Rousseau, discusses the implications of the state of nature and its transformation into civil society.',
        imageUrl: 'https://images.unsplash.com/photo-1563590542-b61826bb83c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MTB8fHRoZSUyMHNvY2lhbCUyMGNvbnRyYWN0fGVufDB8fHx8fDE2NzgxMjg4NzY&ixlib=rb-1.2.1&q=80&w=1080',
      },
      {
        title: 'Friedrich Nietzsche',
        type: 'quote',
        quote: 'He who has a why to live can bear almost any how.',
      },
    ];

    setPosts(philosophyPosts); // Use simulated data
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Philosophy</h1>
      <div className="space-y-6">
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

export default Philosophy;
