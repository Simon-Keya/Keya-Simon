import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Profile = () => {
  const [user, setUser] = React.useState<{ username: string; email: string; bio: string } | null>(null);

  const fetchUserData = () => {
    setTimeout(() => {
      setUser({
        username: 'example_user',
        email: 'user@example.com',
        bio: 'This is the user bio.',
      });
    }, 1000);
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
        {user ? (
          <div>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
        <Link to="/edit-profile" className="text-blue-500">Edit Profile</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
