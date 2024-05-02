import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../../services/adminApi';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Initialize with an empty array of type User[]

  useEffect(() => {
    // Fetch users when component mounts
    getUsers().then((data) => setUsers(data));
  }, []); // Empty dependency array ensures useEffect runs only once after mount

  // Function to delete a user
  const handleDelete = async (userId: number) => {
    await deleteUser(userId);
    setUsers(users.filter((user) => user.id !== userId)); // Update state after deleting
  };

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
