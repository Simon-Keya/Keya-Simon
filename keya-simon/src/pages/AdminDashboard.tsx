import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  role: string;
}

interface Activity {
  id: number;
  action: string;
  user: string;
  timestamp: string;
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [searchUser, setSearchUser] = useState<string>('');
  const [searchActivity, setSearchActivity] = useState<string>('');

  // Simulated data fetching or API calls
  useEffect(() => {
    // Fetch users
    fetchUsers();

    // Fetch activities
    fetchActivities();
  }, []);

  // Fetch users from API
  const fetchUsers = () => {
    // Simulated API call
    const usersData: User[] = [
      { id: 1, name: 'John Doe', role: 'Admin' },
      { id: 2, name: 'Jane Smith', role: 'User' },
      { id: 3, name: 'Alice Johnson', role: 'User' },
      // More users...
    ];
    setUsers(usersData);
    setFilteredUsers(usersData);
  };

  // Fetch activities from API
  const fetchActivities = () => {
    // Simulated API call
    const activitiesData: Activity[] = [
      { id: 1, action: 'Created a new post', user: 'John Doe', timestamp: '2024-05-01T12:00:00Z' },
      { id: 2, action: 'Updated user profile', user: 'Jane Smith', timestamp: '2024-05-01T12:30:00Z' },
      { id: 3, action: 'Deleted a comment', user: 'Alice Johnson', timestamp: '2024-05-01T13:00:00Z' },
      // More activities...
    ];
    setActivities(activitiesData);
    setFilteredActivities(activitiesData);
  };

  // Handle search for users
  useEffect(() => {
    const filtered = users.filter(user => user.name.toLowerCase().includes(searchUser.toLowerCase()));
    setFilteredUsers(filtered);
  }, [searchUser, users]);

  // Handle search for activities
  useEffect(() => {
    const filtered = activities.filter(activity => activity.action.toLowerCase().includes(searchActivity.toLowerCase()));
    setFilteredActivities(filtered);
  }, [searchActivity, activities]);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Users</h3>
        <input
          type="text"
          placeholder="Search users..."
          className="mb-2 p-2 border rounded-md"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <ul className="list-disc ml-8">
          {filteredUsers.map((user) => (
            <li key={user.id}>{user.name} - {user.role}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Activities</h3>
        <input
          type="text"
          placeholder="Search activities..."
          className="mb-2 p-2 border rounded-md"
          value={searchActivity}
          onChange={(e) => setSearchActivity(e.target.value)}
        />
        <ul className="list-disc ml-8">
          {filteredActivities.map((activity) => (
            <li key={activity.id}>{activity.user} {activity.action} - {activity.timestamp}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Analytics</h3>
        <p>Total Users: {filteredUsers.length}</p>
        <p>Total Activities: {filteredActivities.length}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
