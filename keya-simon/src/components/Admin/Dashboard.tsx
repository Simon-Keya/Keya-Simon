import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    // Fetch user data from an online repository
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));

    // Fetch post count from an online repository
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPostCount(data.length))
      .catch(error => console.error('Error fetching post count:', error));
  }, []);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">User Management</h3>
        <ul className="list-disc ml-8">
          {userData.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Post Management</h3>
        <p>Total Posts: {postCount}</p>
      </div>
    </div>
  );
};

export default Dashboard;
