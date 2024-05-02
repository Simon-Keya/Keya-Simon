import React from 'react';

const CommentSection = () => {
  const comments = [
    {
      id: 1,
      user: 'John Doe',
      comment: 'This is amazing! Great work!',
    },
    {
      id: 2,
      user: 'Jane Smith',
      comment: 'I love this post. Thanks for sharing!',
    },
    {
      id: 3,
      user: 'Alice Johnson',
      comment: 'Wow, I never thought about it that way. Very insightful!',
    },
  ];

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id}>
            <div className="flex flex-col">
              <span className="font-semibold">{comment.user}</span>
              <p className="text-gray-700">{comment.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
