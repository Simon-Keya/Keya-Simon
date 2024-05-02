import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  // Function to fetch user data and populate form fields
  const fetchUserData = async () => {
    try {
      // Make an API request to fetch user data
      const response = await fetch('https://api.example.com/user');
      const userData = await response.json();
      
      // Populate form fields with user data
      setUsername(userData.username);
      setEmail(userData.email);
      setBio(userData.bio);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    // Fetch user data when component mounts
    fetchUserData();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Make an API request to update user profile
      const response = await fetch('https://api.example.com/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, bio }),
      });
      if (response.ok) {
        console.log('Profile updated successfully');
        // Redirect user to profile page after successful update
        window.location.href = '/profile';
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-700">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Save Changes</button>
      </form>
      <p className="mt-4 text-gray-600">
        <Link to="/profile" className="text-blue-500">Cancel</Link>
      </p>
    </div>
  );
};

export default EditProfile;
